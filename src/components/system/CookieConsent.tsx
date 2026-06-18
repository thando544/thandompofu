import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  clearVisitorId,
  getConsent,
  getOrCreateVisitorId,
  setConsent,
} from "../../lib/cookies";

export function CookieConsent() {
  const [visible, setVisible] = useState(() => !getConsent());

  function accept() {
    setConsent("accepted");
    getOrCreateVisitorId();
    setVisible(false);
  }

  function decline() {
    setConsent("declined");
    clearVisitorId();
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed bottom-4 left-4 right-4 z-[95] mx-auto max-w-3xl rounded-lg border border-neutral-800 bg-black/95 p-4 text-white shadow-2xl backdrop-blur-xl sm:bottom-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="text-sm font-medium text-white">Visitor memory</p>
              <p className="mt-1 text-sm leading-6 text-neutral-500">
                This site can use a small consent cookie and anonymous visitor
                id so the future n8n assistant can remember basic context like
                returning visits and current page.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-300 transition hover:border-neutral-600 hover:text-white"
                onClick={decline}
              >
                Decline
              </button>
              <button
                type="button"
                className="btn-primary-contrast rounded-full px-4 py-2 text-sm font-medium"
                onClick={accept}
              >
                Allow
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
