import React from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import MagneticButton from "./MagneticButton";

const EMAIL = "contact@flamurahmeti.com";

export default function Contact() {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section
      data-testid="contact-section"
      id="contact"
      className="relative mx-auto w-full max-w-5xl px-6 pb-28 pt-20 md:pb-40 md:pt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-24"
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent blur-3xl" />

        <div className="relative">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            05 / Let's Talk
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-zinc-50 md:text-6xl">
            Have a product worth{" "}
            <span className="italic text-zinc-300">building right?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-zinc-500 md:text-base">
            I take on a small number of engagements each quarter. If you need a
            developer who ships end-to-end — let's start a conversation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <MagneticButton
              href={`mailto:${EMAIL}`}
              variant="primary"
              testId="contact-cta-mail"
            >
              <Mail size={15} strokeWidth={1.8} />
              {EMAIL}
            </MagneticButton>

            <button
              type="button"
              onClick={copy}
              data-testid="contact-copy-email"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05] hover:text-zinc-100"
            >
              {copied ? (
                <>
                  <Check size={13} strokeWidth={2} /> Copied
                </>
              ) : (
                <>
                  <Copy size={13} strokeWidth={1.8} /> Copy email
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
