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

/**
 * Turns an error into a single safe log line.
 *
 * SMTP rejections often quote the addresses involved, and the message carries
 * the enquirer's address as replyTo — so an unfiltered error string can leak
 * the very detail the log is meant to keep out. Any address is masked, and
 * newlines are flattened so one failure stays one grep-able line.
 */
function redact(err: unknown): string {
  const raw = err instanceof Error ? err.message : String(err);
  return raw
    .replace(/[^\s@<>",;:]+@[^\s@<>",;:]+/g, "[email-redacted]")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 300);
}

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

  const subject = `${formType}${name ? ` — ${name}` : ""}`;

  try {
    const transport = getTransport();
    const message = {
      from: `"${mailConfig.fromName}" <${mailConfig.from}>`,
      replyTo: email || undefined,
      text: textBody,
      html: htmlBody,
    };

    await transport.sendMail({ ...message, to: mailConfig.to, subject });

    /*
      Second copy, best effort. Awaited rather than fired and forgotten —
      a serverless function can be frozen the moment the response is
      returned, which would drop an un-awaited send.

      Its failure must never fail the request: the practice already has the
      enquiry, and telling the visitor to call again would cost a real lead.
    */
    if (mailConfig.backupTo) {
      try {
        await transport.sendMail({
          ...message,
          to: mailConfig.backupTo,
          subject: `${mailConfig.backupSubjectPrefix}${subject}`,
        });
      } catch (backupErr) {
        console.error(
          `LEAD_BACKUP_COPY_FAILED formType=${formType} error=${redact(
            backupErr
          )} timestamp=${new Date().toISOString()}`
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    /*
      Alarm, not a record. It says a submission failed and why, so the outage
      is noticed — the enquiry itself is recovered from the backup email copy.

      Deliberately carries no name, phone, email or message: runtime logs are
      visible to anyone with host access and are not an appropriate place for
      patient contact details. Logged on failure only, never on success.
    */
    console.error(
      `LEAD_CAPTURE_FAILED formType=${formType} status=failed error=${redact(
        err
      )} timestamp=${new Date().toISOString()}`
    );
    return NextResponse.json(
      { error: "Could not send your message. Please call us or try again later." },
      { status: 500 }
    );
  }
}
