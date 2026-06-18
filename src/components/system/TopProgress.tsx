import { AnimatePresence, motion } from "motion/react";

export function TopProgress({
  active,
  pulseKey,
}: {
  active: boolean;
  pulseKey: string;
}) {
  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[120]">
      <AnimatePresence>
        {active ? (
          <motion.div
            className="h-[3px] overflow-hidden bg-neutral-950"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="h-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.72)]"
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "-18%", "100%"] }}
              transition={{ duration: 1.05, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div key={pulseKey} className="route-progress" />
    </div>
  );
}
