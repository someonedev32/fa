import React, { useMemo } from "react";

/**
 * CSS-only floating particles. ~22 particles, randomized once on mount.
 */
export default function Particles({ count = 22 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        bottom: -10 - Math.random() * 40,
        duration: 18 + Math.random() * 22,
        delay: -Math.random() * 30,
        size: Math.random() < 0.2 ? 3 : Math.random() < 0.5 ? 2 : 1,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count]
  );

  return (
    <div className="particles" aria-hidden="true" data-testid="particles">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
