"use client";

export default function SkillCard({ title, level }: { title: string; level: string }) {
  return (
    <div className="card card-hover rounded ui-card-xl p-4 shadow flex justify-between items-center">
      <span className="font-medium">{title}</span>
      <span className="text-xs text-muted">{level}</span>
    </div>
  );
}
