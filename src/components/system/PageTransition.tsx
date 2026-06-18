import { motion } from "motion/react";
import type { ReactNode } from "react";
import { LogoMark } from "../ui/LogoMark";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.992, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -18, scale: 0.992, filter: "blur(10px)" }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        className="world-transition world-transition-enter"
        initial={{ clipPath: "inset(0 0 0 0)" }}
        animate={{ clipPath: "inset(0 0 100% 0)" }}
        exit={{ clipPath: "inset(100% 0 0 0)" }}
        transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
        aria-hidden="true"
      >
        <WorldTransitionContent />
      </motion.div>
      <motion.div
        className="world-transition world-transition-exit"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 100% 0)" }}
        exit={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 0.58, ease: [0.76, 0, 0.24, 1] }}
        aria-hidden="true"
      >
        <WorldTransitionContent />
      </motion.div>
    </>
  );
}

function WorldTransitionContent() {
  return (
    <div className="world-transition-inner">
      <div className="world-transition-grid" />
      <div className="world-transition-center">
        <LogoMark />
        <span>Opening workspace</span>
      </div>
    </div>
  );
}
