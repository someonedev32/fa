import React from "react";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative mx-auto w-full max-w-6xl px-6 pb-10"
    >
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          © {new Date().getFullYear()} Flamur Ahmeti · Built with intent.
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          v1.0 · Pristina ⟶ Worldwide
        </div>
      </div>
    </footer>
  );
}
