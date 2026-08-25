import nodemailer from "nodemailer";

// Reads SMTP configuration from environment variables (see .env.example).
// Throws a clear error if required values are missing so misconfiguration is obvious.
export function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS in .env.local."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
    auth: { user, pass },
  });
}

export const mailConfig = {
  from: process.env.SMTP_FROM || process.env.SMTP_USER || "",
  fromName: process.env.SMTP_FROM_NAME || "Hampton Family Dental Website",
  to: process.env.ENQUIRY_TO || "info@hamptonfamilydentist.com",
  /**
   * Blind copy of every enquiry, so a lead still exists somewhere if the main
   * inbox is cleared, mis-filed, or the mailbox changes hands.
   *
   * Note what this does NOT protect against: it rides the same SMTP transport
   * as the main message, so if SMTP itself fails, this fails with it. The
   * failure path in the enquiry route covers that case separately.
   *
   * Set LEADS_BACKUP_EMAIL="" to switch the copy off.
   */
  bcc:
    process.env.LEADS_BACKUP_EMAIL ?? "hampton-leads-backup@softqubes.com",
};
