const consentCookie = "thando_cookie_consent";
const visitorCookie = "thando_visitor_id";

export type CookieConsentValue = "accepted" | "declined";

export function getCookie(name: string) {
  const match = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${name}=`));

  return match ? decodeURIComponent(match.split("=").slice(1).join("=")) : "";
}

export function setCookie(name: string, value: string, days = 180) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value,
  )}; expires=${expires}; path=/; SameSite=Lax`;
}

export function getConsent() {
  return getCookie(consentCookie) as CookieConsentValue | "";
}

export function setConsent(value: CookieConsentValue) {
  setCookie(consentCookie, value, 180);
}

export function getOrCreateVisitorId() {
  const existing = getCookie(visitorCookie);

  if (existing) {
    return existing;
  }

  const id =
    crypto.randomUUID?.() ||
    `visitor_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  setCookie(visitorCookie, id, 180);
  return id;
}

export function clearVisitorId() {
  document.cookie = `${visitorCookie}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
}
