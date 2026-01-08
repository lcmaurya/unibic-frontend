"use client";

type Props = {
  score: number;
  max: number;
  label: string;
};

export default function TrustRing({ score, max, label }: Props) {
  const percent = Math.round((score / max) * 100);

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative w-40 h-40 rounded-full flex items-center justify-center"
        style={{
          background: `conic-gradient(#16a34a ${percent}%, #e5e7eb 0)`,
        }}
      >
        <div className="w-32 h-32 bg-green-50 rounded-full flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-green-700">{score}</div>
          <div className="text-xs text-gray-600">/ {max}</div>
          <div className="text-sm font-semibold text-green-700 mt-1">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
