import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Apps shipped" },
  { value: "30–50%", label: "Avg. perf gains" },
  { value: "7+", label: "Years building" },
  { value: "∞", label: "Coffee consumed" },
];

export default function About() {
  return (
    <section
      data-testid="about-section"
      id="about"
      className="relative mx-auto w-full max-w-5xl px-6 py-28 md:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 gap-10 md:grid-cols-12"
      >
        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            01 / About
          </div>
        </div>

        <div className="md:col-span-9">
          <p className="text-2xl font-light leading-[1.35] tracking-tight text-zinc-100 md:text-3xl">
            I build <span className="text-white">scalable SaaS</span> and{" "}
            <span className="text-white">e-commerce</span> systems —
            <span className="text-zinc-500">
              {" "}
              from interface to infrastructure.
            </span>{" "}
            Production-grade software, shipped end-to-end with a designer's eye
            and an engineer's discipline.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-y-8 gap-x-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + i * 0.08,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-1.5 border-l border-white/10 pl-4"
                data-testid={`about-stat-${i}`}
              >
                <div className="font-sans text-2xl font-medium tracking-tight text-white md:text-3xl">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
