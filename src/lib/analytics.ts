type EventMetadata = Record<string, unknown>;

export function trackEvent(eventType: string, metadata: EventMetadata = {}) {
  if (typeof window === "undefined") return;

  const event = {
    event_type: eventType,
    page: window.location.pathname,
    referrer: document.referrer || null,
    device: navigator.userAgent,
    metadata,
    created_at: new Date().toISOString(),
  };

  console.log("portfolio_event", event);

  // Future integration point for Supabase or server analytics.
  // if (typeof fetch !== 'undefined') {
  //   return fetch('/api/track', { method: 'POST', body: JSON.stringify(event) })
  // }
}
