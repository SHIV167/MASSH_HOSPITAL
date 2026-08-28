"use client";

import { useRef } from "react";

export default function CardSlider({
  children,
  className = "",
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0");
    const distance = card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  }

  return (
    <div className="slider-shell" aria-label={label}>
      <button className="slider-arrow slider-arrow--left" onClick={() => move(-1)} aria-label={`Previous ${label}`}>
        ←
      </button>
      <div className={`slider-track ${className}`} ref={trackRef} tabIndex={0}>
        {children}
      </div>
      <button className="slider-arrow slider-arrow--right" onClick={() => move(1)} aria-label={`Next ${label}`}>
        →
      </button>
    </div>
  );
}
