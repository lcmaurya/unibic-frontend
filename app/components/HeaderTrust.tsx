"use client";

import TrustBadge from "@/app/deals/components/TrustBadge";
import { ShieldCheck } from "lucide-react";
import { useTrustScore } from "@/app/hooks/useTrustScore";

export default function HeaderTrust() {
  const trust = useTrustScore();

  return (
    <div className="flex items-center gap-2">
      <TrustBadge score={trust.score} />
      <ShieldCheck className="text-[var(--brand-green)] animate-pulse" />
    </div>
  );
}
