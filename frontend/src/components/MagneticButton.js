import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Magnetic button that pulls toward the cursor.
 * Use `as="a"` to render as an anchor link.
 */
export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  variant = "primary", // primary | ghost
  testId,
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });
  const innerX = useTransform(sx, (v) => v * 0.4);
  const innerY = useTransform(sy, (v) => v * 0.4);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    x.set(mx * 0.35);
    y.set(my * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-white text-ink-950 hover:bg-zinc-200"
      : "border border-white/15 bg-white/[0.02] text-zinc-200 hover:border-white/30 hover:bg-white/[0.05]";

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      data-testid={testId}
      className={`${base} ${styles} ${className}`}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      {...rest}
    >
      <motion.span style={{ x: innerX, y: innerY }} className="flex items-center gap-2">
        {children}
      </motion.span>
    </Comp>
  );
}
