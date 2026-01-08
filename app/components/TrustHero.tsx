"use client";
import { useTrustScore } from "@/app/hooks/useTrustScore";

export default function TrustHero() {
  const trust = useTrustScore();

  return (
    <section className="bg-white rounded-2xl p-4 shadow flex items-center justify-between">
      <div>
        <div className="text-2xl font-bold">{trust.score}/1000</div>
        <div className="text-sm text-gray-500">Trust score calculated</div>
      </div>
      <div className="w-12 h-12 rounded-full bg-green-100 animate-pulse flex items-center justify-center">
        🛡️
      </div>
    </section>
  );
}
