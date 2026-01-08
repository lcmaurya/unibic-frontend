"use client";
import { useState } from "react";
import { getTrustTimeline } from "@/app/lib/trustTimeline";

export function useTrustTimeline() {
  const [events] = useState(getTrustTimeline());
  return events;
}
