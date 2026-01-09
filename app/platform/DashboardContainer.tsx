"use client";

import { useTrustScore } from "@/app/hooks/useTrustScore";
import TrustShield from "@/app/components/TrustShield";
import TrustTimeline from "@/app/components/TrustTimeline";

export default function DashboardContainer() {
  const trust = useTrustScore();

  return (
    <div className="space-y-4">

      {/* TRUST SUMMARY */}
      <section className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
        <div className="relative w-20 h-20">
          <svg width="80" height="80" viewBox="0 0 40 40">
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
              strokeDashoffset={100 - trust.score / 10}
              className="transition-all duration-700"
            />
          </svg>
        </div>

        <div className="flex-1">
          <p className="text-lg font-semibold">Excellent</p>
          <p className="text-xs text-gray-500">Trust score calculated</p>
        </div>

        <TrustShield score={trust.score} />
      </section>

      {/* RECENT ACTIVITY */}
      <section className="bg-white rounded-xl p-4 shadow">
        <h3 className="font-medium mb-2">Recent Activity</h3>
        <TrustTimeline />
      </section>

      {/* QUICK STATS */}
      <section className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <p className="text-lg font-bold">5</p>
          <p className="text-xs text-gray-500">Available Tasks</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <p className="text-lg font-bold">2</p>
          <p className="text-xs text-gray-500">Help Requests</p>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="grid grid-cols-3 gap-3">
        <button className="bg-white rounded-xl p-3 shadow text-xs">📦 Post Skill</button>
        <button className="bg-white rounded-xl p-3 shadow text-xs">📍 Find Work</button>
        <button className="bg-red-100 text-red-700 rounded-xl p-3 shadow text-xs">
          🆘 Request Help
        </button>
      </section>

    </div>
  );
}
