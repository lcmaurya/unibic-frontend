"use client";
import { trustEvents } from "@/app/lib/trustData";
import { calculateTrustScore } from "@/app/lib/trustEngine";


import SearchPage from "@/app/search/page";

export default function PlatformDashboard() {
  const trustScore = calculateTrustScore(trustEvents);

  return (
    <main className="p-4">
      <h1 className="text-lg font-semibold mb-4">
        Search (Live – Deals & Skills)
      </h1>

      <div className="bg-white p-4 rounded-xl shadow">
        <SearchPage />
      </div>
    </main>
  );
}
