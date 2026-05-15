import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Store, Smartphone } from "lucide-react";

const PROJECTS = [
  {
    title: "Shopify App System",
    tag: "E-Commerce / SaaS",
    description:
      "Production Shopify apps powering live stores with API integrations, automation, and backend logic.",
    href: "https://apps.shopify.com/partners/promoteyourshop-com",
    icon: Store,
    tech: ["Next.js", "Node.js", "Shopify API", "PostgreSQL"],
    accent: "from-emerald-400/20 to-transparent",
  },
  {
    title: "iOS Applications",
    tag: "Mobile · 10+ Apps",
    description:
      "End-to-end iOS apps deployed to the App Store — from concept and design to launch and maintenance.",
    href: "https://apps.apple.com/xk/developer/flamur-ahmeti/id1857404716",
    icon: Smartphone,
    tech: ["Swift", "React Native", "Mobile UX"],
    accent: "from-sky-400/20 to-transparent",
  },
];

export default function Projects() {
  return (
    <section
      data-testid="projects-section"
      id="projects"
      className="relative mx-auto w-full max-w-6xl px-6 py-28 md:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14 flex items-end justify-between gap-6 md:mb-16"
      >
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            02 / Selected Work
          </div>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-100 md:text-4xl">
            Things I've shipped.
          </h2>
        </div>
        <div className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:block">
          Live in production
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {PROJECTS.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`project-card-${i}`}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="group glass relative overflow-hidden rounded-3xl p-7 md:p-9"
            >
              {/* Accent glow */}
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-radial blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br ${p.accent}`}
              />

              {/* Header row */}
              <div className="relative flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors duration-500 group-hover:border-white/25 group-hover:text-white">
                  <Icon size={18} strokeWidth={1.6} />
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                    {p.tag}
                  </div>
                  <motion.div
                    initial={{ rotate: -15, opacity: 0.5 }}
                    whileHover={{ rotate: 0, opacity: 1 }}
                    className="text-zinc-500 transition-colors duration-300 group-hover:text-white"
                  >
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Title + desc */}
              <div className="relative mt-12 md:mt-16">
                <h3 className="text-2xl font-medium tracking-tight text-zinc-100 md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500 md:text-[15px]">
                  {p.description}
                </p>
              </div>

              {/* Tech row */}
              <div className="relative mt-8 flex flex-wrap items-center gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 transition-colors duration-300 group-hover:border-white/20 group-hover:text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom underline reveal */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full overflow-hidden">
                <div className="h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-0" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
