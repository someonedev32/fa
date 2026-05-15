import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

const ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "AI & Automation Builder",
];

const NAME_LINES = ["FLAMUR", "AHMETI"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      data-testid="hero-section"
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center px-6 pt-24 md:pt-0"
    >
      {/* Top status bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-6 -translate-x-1/2 md:top-8"
      >
        <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400 md:text-[10px] md:tracking-[0.25em]">
            <span className="hidden sm:inline">Available for select work · </span>
            <span className="sm:hidden">Available · </span>
            2026
          </span>
        </div>
      </motion.div>

      {/* Top-left brand mark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute left-6 top-6 md:left-10 md:top-10"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500">
          F<span className="text-zinc-700">/</span>A
        </div>
      </motion.div>

      {/* Main name */}
      <div className="relative z-10 flex w-full flex-col items-center px-4 text-center">
        <h1
          data-testid="hero-name"
          aria-label="Flamur Ahmeti"
          className="select-none font-sans font-semibold leading-[0.86] tracking-[-0.055em] text-white"
          style={{
            fontSize: "clamp(64px, 22vw, 200px)",
            letterSpacing: "-0.055em",
          }}
        >
          {NAME_LINES.map((line, lineIdx) => (
            <div
              key={line}
              className="block overflow-hidden"
              style={{ paddingBottom: "0.04em" }}
            >
              <motion.span
                initial={{ y: "110%", opacity: 0, filter: "blur(14px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  delay: 0.25 + lineIdx * 0.16,
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="shimmer-text inline-block"
              >
                {line}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Rotating roles */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex items-center gap-3 md:mt-10"
        >
          <span className="h-px w-8 bg-white/15" />
          <div className="relative h-6 w-[18rem] overflow-hidden md:h-7 md:w-[22rem]">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                data-testid="hero-role"
                initial={{ y: 20, opacity: 0, filter: "blur(6px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-[0.32em] text-zinc-300 md:text-sm"
              >
                {ROLES[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="h-px w-8 bg-white/15" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <MagneticButton
            href="mailto:contact@flamurahmeti.com"
            variant="primary"
            testId="hero-cta-contact"
          >
            <Mail size={15} strokeWidth={1.8} />
            Get in touch
          </MagneticButton>
          <MagneticButton
            href="#projects"
            variant="ghost"
            testId="hero-cta-projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            See selected work
            <ArrowDownRight size={15} strokeWidth={1.8} />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-600">
            Scroll
          </div>
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-6 w-px bg-gradient-to-b from-white/0 via-white/40 to-white/0"
          />
        </div>
      </motion.div>
    </section>
  );
}
