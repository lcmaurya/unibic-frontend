"use client";

import { dashboardData } from "@/app/lib/dashboardData";
import SkillCard from "@/app/components/SkillCard";

export default function SkillsPage() {
  return (
    <main className="p-4 space-y-4 bg-green-50 min-h-screen">
      <h1 className="text-lg font-semibold">Your Skills</h1>

      <div className="space-y-3">
        {dashboardData.skills.map((s, i) => (
          <SkillCard key={i} title={s.title} level={s.level} />
        ))}
      </div>
    </main>
  );
}
