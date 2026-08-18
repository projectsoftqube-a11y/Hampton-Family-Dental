// Posts a form submission to the enquiry API. Returns an error message string
// on failure, or "" on success — so forms can show it inline in red.

/** Google Ads "Submit lead form" conversion, from the Ads tag instructions. */
const LEAD_CONVERSION_ID = "AW-18372303940/OlxtCI_e4OMcEMS4zLhE";

type GtagFn = (
  command: string,
  eventName: string,
  params?: Record<string, unknown>
) => void;

/*
  Google's instructions put the event snippet on a "Thank you for your order"
  page. This site has no such page — every form resolves in place and shows an
  inline success state — so the conversion fires here instead, at the single
  point where a submission is known to have succeeded. All five forms
  (contact, homepage contact, scheduling, emergency scheduling, CTA block)
  route through this helper, so this covers the whole site without duplicating
  the snippet, and it cannot fire on a failed or abandoned submission.
*/
function reportLeadConversion() {
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  // Absent if the tag is still loading or blocked — never let that break the
  // form's own success path.
  if (typeof gtag !== "function") return;
  gtag("event", "conversion", { send_to: LEAD_CONVERSION_ID });
}

export async function sendEnquiry(
  payload: Record<string, unknown>
): Promise<string> {
  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return data?.error || "Something went wrong. Please try again.";
    }
    reportLeadConversion();
    return "";
  } catch {
    return "Network error. Please check your connection and try again.";
  }
}
