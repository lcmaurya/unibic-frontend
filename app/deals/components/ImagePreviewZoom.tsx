"use client";

import { useState, useRef } from "react";

export default function ImagePreviewZoom({ src }: { src: string }) {
  const [zoomed, setZoomed] = useState(false);
  const lastTap = useRef(0);

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      setZoomed((z) => !z);
    }
    lastTap.current = now;
  };

  return (
    <div
      onClick={handleTap}
      className="relative overflow-hidden rounded-lg border bg-white"
    >
      <img
        src={src}
        className={`
          w-full transition-transform duration-300
          ${zoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"}
        `}
        alt="preview"
        draggable={false}
      />
    </div>
  );
}
