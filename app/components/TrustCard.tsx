"use client";

import TrustBadge from "@/app/deals/components/TrustBadge";
import TrustTimeline from "@/app/components/TrustTimeline";
import { useTrustScore } from "@/app/hooks/useTrustScore";

export default function TrustCard() {
  const trust = useTrustScore();

  return (
    <section className="bg-white rounded-xl p-4 shadow space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">Trust</h2>
        <TrustBadge score={trust.score || 0} />
      </div>

      <div className="border-t pt-2">
        <TrustTimeline />
      </div>
    </section>
  );
}
