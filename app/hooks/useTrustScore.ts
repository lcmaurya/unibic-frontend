"use client";

import { useEffect, useState } from "react";

export function useTrustScore() {
  const [trust, setTrust] = useState({
    score: 0,
    events: []
  });

  useEffect(() => {
    // FORCE change after mount
    setTimeout(() => {
      setTrust({
        score: 750,
        events: [
          { label: "Deal created", points: 50 },
          { label: "Media uploaded", points: 200 },
          { label: "Help completed", points: 500 }
        ]
      });
    }, 500);
  }, []);

  return trust;
}
