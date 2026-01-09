import { trustColor } from "@/app/lib/trustColor";

"use client";

export default function TrustBadge({ score = 50 }: { score?: number }) {
  const color =
    score >= 80 ? "bg-green-600" :
    score >= 50 ? "bg-yellow-500" :
    "${trustColor(score)}";

  return (
    <div className={`inline-block px-3 py-1 text-white text-xs rounded ui-card-full ${color}`}>
      Trust: {score}
    </div>
  );
}
