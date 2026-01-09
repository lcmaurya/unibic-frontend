"use client";

import { useEffect, useState } from "react";

export default function MediaFeed() {
  const [media, setMedia] = useState<any[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("deal_media");
      if (stored) setMedia(JSON.parse(stored));
    } catch {}
  }, []);

  if (media.length === 0) {
    return (
      <p className="text-xs text-gray-400 mt-2">
        No media uploaded yet
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 mt-2">
      {media.map((m, i) => (
        <div key={i} className="border rounded overflow-hidden">
          {m.type === "image" && (
            <img src={m.url} className="w-full h-24 object-cover" />
          )}
          {m.type === "video" && (
            <video src={m.url} className="w-full h-24" />
          )}
        </div>
      ))}
    </div>
  );
}
