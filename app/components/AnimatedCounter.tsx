"use client";

import { useEffect, useState } from "react";

export default function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.floor(value / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setCount(current);
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}</span>;
}
