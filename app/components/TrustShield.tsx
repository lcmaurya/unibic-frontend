"use client";

export default function TrustShield({ score = 0 }: { score: number }) {
  const pct = Math.min(100, Math.max(0, score));

  return (
    <div className="relative w-10 h-10">
      {/* Ring */}
      <svg className="w-10 h-10 rotate-[-90deg]">
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#e5e7eb"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#22c55e"
          strokeWidth="4"
          fill="none"
          strokeDasharray={100}
          strokeDashoffset={100 - pct}
          className="transition-all duration-700"
        />
      </svg>

      {/* Shield */}
      <div className="absolute inset-0 flex items-center justify-center text-green-600 animate-pulse">
        🛡️
      </div>
    </div>
  );
}
