import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import Particles from "./components/Particles";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      data-testid="app-root"
      className="relative min-h-screen w-full bg-ink-950 text-zinc-200 antialiased selection:bg-white/20"
    >
      {/* Cinematic ambient layers */}
      <div className="mesh-bg" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <Particles />
      <CursorGlow />
      <div className="grain" aria-hidden="true" />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <Hero />
            <About />
            <Projects />
            <TechStack />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
