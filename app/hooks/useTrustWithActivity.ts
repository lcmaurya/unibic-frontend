"use client";

import { useEffect, useState } from "react";
import { TrustEvent } from "@/app/lib/trustEngine";
import { calculateWeightedTrust } from "@/app/lib/trustCalculator";

export function useTrustWithActivity() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    // demo logic (firebase optional)
    let current = 0;

    current = calculateWeightedTrust(current, TrustEvent.TASK_COMPLETED);
    current = calculateWeightedTrust(current, TrustEvent.HELP_ACCEPTED);

    setScore(current);
  }, []);

  return { score };
}
