// Posts a form submission to the enquiry API. Returns an error message string
// on failure, or "" on success — so forms can show it inline in red.

/*
  ─── Conversion tracking ───
  All conversion tracking on this site goes through Google Tag Manager
  (GTM-WLNN5FJV) and nothing else. This helper pushes a single
  `form_submit_success` event to the dataLayer; the Google Ads conversion,
  GA4 event and anything else are configured as tags inside the container.

  This replaced a direct Google Ads conversion pixel that used to fire from
  here. Firing both would have double-counted every lead.

  The push happens only where a submission is known to have succeeded — after
  the API returns ok. It cannot fire on a validation error, a network failure,
  a 500, or a button click that never reached the server.
*/

/** Identifies which form fired the event, so GTM can report per-page. */
export interface EnquiryTracking {
  /** e.g. "main_homepage" — one per form, see each call site. */
  pageType: string;
  /** e.g. "contact_enquiry" — derived from formType when not given. */
  formName?: string;
}

type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/** "Emergency Appointment Request" -> "emergency_appointment_request" */
function toFormName(formType: unknown): string {
  if (typeof formType !== "string" || !formType.trim()) return "website_enquiry";
  return formType
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function pushFormSubmitSuccess(
  payload: Record<string, unknown>,
  tracking?: EnquiryTracking,
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_submit_success",
    form_name: tracking?.formName ?? toFormName(payload.formType),
    page_type: tracking?.pageType ?? "main_unknown",
    source_domain: "hamptonfamilydentist.com",
  });
}

export async function sendEnquiry(
  payload: Record<string, unknown>,
  tracking?: EnquiryTracking,
): Promise<string> {
  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      // No dataLayer push — a failed submit is not a conversion.
      return data?.error || "Something went wrong. Please try again.";
    }
    pushFormSubmitSuccess(payload, tracking);
    return "";
  } catch {
    // Network error — also not a conversion.
    return "Network error. Please check your connection and try again.";
  }
}
