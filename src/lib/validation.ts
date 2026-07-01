// Shared client-side form validation helpers.
// Each validator returns an error message string, or "" when the value is valid.

export function validateRequired(value: string, label = "This field"): string {
  return value.trim() ? "" : `${label} is required.`;
}

export function validateName(value: string): string {
  if (!value.trim()) return "Please enter your name.";
  if (value.trim().length < 2) return "Please enter a valid name.";
  return "";
}

export function validateEmail(value: string): string {
  if (!value.trim()) return "Please enter your email address.";
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(value.trim()) ? "" : "Please enter a valid email address.";
}

export function validatePhone(value: string): string {
  if (!value.trim()) return "Please enter your phone number.";
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 ? "" : "Please enter a valid phone number.";
}

export function validateSelect(value: string, label = "an option"): string {
  return value.trim() ? "" : `Please select ${label}.`;
}

// Returns true when every value in the errors object is an empty string.
export function isValid(errors: Record<string, string>): boolean {
  return Object.values(errors).every((e) => !e);
}
