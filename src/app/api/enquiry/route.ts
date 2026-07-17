import { NextRequest, NextResponse } from "next/server";
import { getTransport, mailConfig } from "@/lib/mailer";

// nodemailer needs Node APIs (net/tls) — force the Node.js runtime, not Edge.
export const runtime = "nodejs";

const FIELD_LABELS: Record<string, string> = {
  name: "Full Name",
  email: "Email Address",
  phone: "Phone Number",
  preferredTime: "Preferred Time",
  timeOfDay: "Preferred Time",
  service: "Service",
  symptom: "Primary Emergency Symptom",
  visitTypes: "Reason for Visit",
  message: "Message",
  notes: "Notes",
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const formType = typeof body.formType === "string" ? body.formType : "Website Enquiry";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  // Server-side validation — never trust the client alone.
  if (!name && !email && !phone) {
    return NextResponse.json(
      { error: "Please provide your contact details." },
      { status: 400 }
    );
  }
  if (email && !emailRe.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Build a readable list of all submitted fields.
  const skip = new Set(["formType"]);
  const rows: { label: string; value: string }[] = [];
  for (const [key, raw] of Object.entries(body)) {
    if (skip.has(key)) continue;
    let value = "";
    if (Array.isArray(raw)) value = raw.join(", ");
    else if (raw != null) value = String(raw);
    if (!value.trim()) continue;
    rows.push({ label: FIELD_LABELS[key] || key, value: value.trim() });
  }

  const textBody = rows.map((r) => `${r.label}: ${r.value}`).join("\n");
  const htmlBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#143C50;max-width:600px">
      <h2 style="color:#1E6076;margin-bottom:4px">New ${escapeHtml(formType)}</h2>
      <p style="color:#5C7098;font-size:13px;margin-top:0">Submitted via the Hampton Family Dental website.</p>
      <table style="border-collapse:collapse;width:100%;margin-top:12px">
        ${rows
          .map(
            (r) => `<tr>
              <td style="padding:8px 12px;border:1px solid #DDE4EC;background:#F2F5F9;font-weight:bold;width:180px">${escapeHtml(
                r.label
              )}</td>
              <td style="padding:8px 12px;border:1px solid #DDE4EC">${escapeHtml(
                r.value
              ).replace(/\n/g, "<br>")}</td>
            </tr>`
          )
          .join("")}
      </table>
    </div>`;

  try {
    const transport = getTransport();
    await transport.sendMail({
      from: `"${mailConfig.fromName}" <${mailConfig.from}>`,
      to: mailConfig.to,
      replyTo: email || undefined,
      subject: `${formType}${name ? ` — ${name}` : ""}`,
      text: textBody,
      html: htmlBody,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Enquiry email failed:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please call us or try again later." },
      { status: 500 }
    );
  }
}
