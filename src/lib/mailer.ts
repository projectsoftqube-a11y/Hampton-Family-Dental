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
   * Second copy of every enquiry, so a lead still exists if the first is
   * deleted or mis-filed. Goes to the practice's own inbox by default —
   * patient contact details are deliberately not routed to a third party.
   *
   * Sent as its own message rather than a bcc on the first: both copies land
   * in the same mailbox, so they need different subjects to be told apart,
   * and a bcc shares the original's subject line. It is sent separately, so
   * one copy can survive the other being rejected.
   *
   * Does NOT protect against SMTP itself failing — both sends use the same
   * transport. The enquiry route's failure path covers that.
   *
   * Set LEADS_BACKUP_EMAIL="" to switch the copy off.
   */
  backupTo:
    process.env.LEADS_BACKUP_EMAIL ?? "info@hamptonfamilydentist.com",
  /** Marks the second copy so it is obvious at a glance in a shared inbox. */
  backupSubjectPrefix: "[BACKUP] ",
};
