import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe, Store, Apple } from "lucide-react";

const SOCIALS = [
  {
    label: "Shopify",
    href: "https://apps.shopify.com/partners/promoteyourshop-com",
    icon: Store,
    handle: "promoteyourshop",
  },
  {
    label: "App Store",
    href: "https://apps.apple.com/xk/developer/flamur-ahmeti/id1857404716",
    icon: Apple,
    handle: "Flamur Ahmeti",
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Github,
    handle: "flamur-ahmeti",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
    handle: "in/flamur-ahmeti",
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: Twitter,
    handle: "@flamur_ahmeti",
  },
  {
    label: "Web",
    href: "https://www.flamurahmeti.com",
    icon: Globe,
    handle: "flamurahmeti.com",
  },
];

export default function Socials() {
  return (
    <section
      data-testid="socials-section"
      id="socials"
      className="relative mx-auto w-full max-w-5xl px-6 py-28 md:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
          04 / Channels
        </div>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-100 md:text-4xl">
          Find me online.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 divide-y divide-white/5 border-y border-white/5 md:grid-cols-2 md:gap-x-12 md:divide-y-0">
        {SOCIALS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`social-${s.label.toLowerCase()}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.06,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex items-center justify-between py-5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-zinc-400 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/[0.06] group-hover:text-white">
                  <Icon size={15} strokeWidth={1.6} />
                </div>
                <div>
                  <div className="text-base font-medium text-zinc-100 transition-colors group-hover:text-white">
                    {s.label}
                  </div>
                  <div className="font-mono text-[11px] tracking-wide text-zinc-500">
                    {s.handle}
                  </div>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-300">
                Visit →
              </div>

              {/* hover line */}
              <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
