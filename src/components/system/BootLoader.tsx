import { AnimatePresence, motion } from "motion/react";
import { LogoMark } from "../ui/LogoMark";

const messages = [
  "Booting engineering environment...",
  "Initialising systems...",
  "Preparing workspace...",
  "Welcome.",
];

export function BootLoader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
        >
          <div className="boot-grid" />
          <div className="boot-particles" />
          <motion.div
            className="relative z-10 flex flex-col items-center gap-8 px-6 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.42 }}
              className="boot-logo"
            >
              <LogoMark />
            </motion.div>
            <div className="min-h-28 min-w-[min(88vw,460px)] font-mono text-xs text-neutral-400">
              {messages.map((message, index) => (
                <motion.p
                  key={message}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 + index * 0.22, duration: 0.24 }}
                  className="mb-3"
                >
                  <span className="text-neutral-600">sys:{index + 1}</span>{" "}
                  {message}
                </motion.p>
              ))}
            </div>
            <motion.p
              className="text-2xl font-semibold tracking-[0.34em] text-white sm:text-4xl"
              initial={{ opacity: 0, letterSpacing: "0.14em" }}
              animate={{ opacity: 1, letterSpacing: "0.34em" }}
              transition={{ delay: 1.18, duration: 0.42 }}
            >
              THANDO MPOFU
            </motion.p>
            <motion.div
              className="boot-progress"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.24 }}
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                <span>THANDO MPOFU</span>
                <span>loading</span>
              </div>
              <div className="boot-progress-track">
                <motion.div
                  className="boot-progress-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.64, duration: 1.08, ease: "easeInOut" }}
                >
                  <span>THANDO MPOFU</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
