import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      data-testid="loader"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-xs uppercase tracking-[0.45em] text-zinc-500"
        >
          F · A
        </motion.div>

        <div className="relative h-[1px] w-48 overflow-hidden bg-white/5">
          <motion.div
            className="absolute inset-y-0 left-0 bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600"
        >
          Loading portfolio
        </motion.div>
      </div>
    </motion.div>
  );
}
