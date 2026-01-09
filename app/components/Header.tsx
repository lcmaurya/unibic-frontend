"use client";

import TrustShield from "@/app/components/TrustShield";
import { useTrustScore } from "@/app/hooks/useTrustScore";

export default function Header() {
  const trust = useTrustScore();

  return (
    <header className="relative bg-white px-4 py-3 shadow">
      <h1 className="font-semibold text-lg">UNIBIC TRUST</h1>
<a href="/platform" className="absolute left-4 top-4 text-xs text-green-600 font-medium">Dashboard</a>

      <div className="absolute right-4 top-2">
        <TrustShield score={trust.score || 0} />
      </div>
    </header>
  );
}
