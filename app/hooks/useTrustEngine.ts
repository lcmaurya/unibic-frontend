"use client";

import { useEffect, useState } from "react";

export function useTrustEngine() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("/api/trust")
      .then(r => r.json())
      .then(d => setScore(d.score));
  }, []);

  return score;
}
