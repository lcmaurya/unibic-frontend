"use client";

export default function TrustRing({ score }: { score: number }) {
  const pct = Math.min(100, (score / 1000) * 100);

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" stroke="#e5e7eb" strokeWidth="4" fill="none" />
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke="#22c55e"
            strokeWidth="4"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset={100 - pct}
            className="transition-all duration-700"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-bold">
          {score}
        </span>
      </div>
      <div>
        <p className="font-semibold">Excellent</p>
        <p className="text-xs text-muted">Trust score calculated</p>
      </div>
    </div>
  );
}
