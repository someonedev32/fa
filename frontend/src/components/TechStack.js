import React from "react";
import { motion } from "framer-motion";

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Swift",
  "React Native",
  "TailwindCSS",
  "Framer Motion",
  "Shopify API",
  "OpenAI",
  "Vercel",
  "AWS",
];

export default function TechStack() {
  return (
    <section
      data-testid="stack-section"
      id="stack"
      className="relative mx-auto w-full max-w-5xl px-6 py-28 md:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 flex items-end justify-between gap-6"
      >
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            03 / Stack
          </div>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-100 md:text-4xl">
            Tools I reach for.
          </h2>
        </div>
      </motion.div>

      <div className="flex flex-wrap gap-2.5">
        {STACK.map((t, i) => (
          <motion.span
            key={t}
            data-testid={`tech-pill-${i}`}
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.03,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -2 }}
            className="cursor-default rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-zinc-300 backdrop-blur-md transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
          >
            {t}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
