"use client";

import { useEffect, useRef } from "react";

export function MediaVideo({
  src,
  poster,
  width,
  height,
  label,
  loop = false,
  muted = true,
  controls,
  priority = false,
  className,
}: {
  src: string;
  poster: string;
  width: number;
  height: number;
  label?: string;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  priority?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const showControls = controls ?? false;

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    el.muted = muted;
    el.defaultMuted = muted;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      return;
    }

    const play = () => {
      void el.play().catch(() => {
        el.muted = true;
        void el.play().catch(() => undefined);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          play();
        } else {
          el.pause();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [muted, src]);

  return (
    <video
      ref={ref}
      className={className ?? "h-auto w-full bg-surface"}
      style={{ aspectRatio: `${width} / ${height}` }}
      width={width}
      height={height}
      poster={poster}
      autoPlay
      controls={showControls}
      muted={muted}
      loop={loop}
      playsInline
      preload={priority ? "auto" : "metadata"}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
