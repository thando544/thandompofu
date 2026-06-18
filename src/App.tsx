import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "motion/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { BootLoader } from "./components/system/BootLoader";
import { CookieConsent } from "./components/system/CookieConsent";
import { CustomCursor } from "./components/system/CustomCursor";
import { FloatingAssistant } from "./components/system/FloatingAssistant";
import { PageTransition } from "./components/system/PageTransition";
import { TopProgress } from "./components/system/TopProgress";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import {
  About,
  Architecture,
  Contact,
  Experience,
  LabNotes,
  OpenSource,
  Principles,
  Projects,
  Toolkit,
} from "./pages/SystemPages";

function App() {
  const [booting, setBooting] = useState(() => !sessionStorage.getItem("booted"));
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    if (!booting) {
      return;
    }

    const timer = window.setTimeout(() => {
      sessionStorage.setItem("booted", "true");
      setBooting(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [booting]);

  return (
    <div className="min-h-screen bg-black text-white">
      <TopProgress active={booting} pulseKey={location.pathname} />
      <BootLoader visible={booting} />
      <CustomCursor />
      <div className={booting ? "site-under-boot" : undefined}>
        <Navbar />
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/toolkit" element={<Toolkit />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/lab-notes" element={<LabNotes />} />
              <Route path="/principles" element={<Principles />} />
              <Route path="/open-source" element={<OpenSource />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
        <Footer />
        <FloatingAssistant />
        <CookieConsent />
      </div>
    </div>
  );
}

export default App;
