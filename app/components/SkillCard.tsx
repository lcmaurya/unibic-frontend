"use client";

export default function SkillCard({ title, level }: { title: string; level: string }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow flex justify-between items-center">
      <span className="font-medium">{title}</span>
      <span className="text-sm text-gray-500">{level}</span>
    </div>
  );
}
