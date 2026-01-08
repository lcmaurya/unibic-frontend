"use client";

import { useTrustScore } from "@/app/hooks/useTrustScore";

export default function TrustTimeline() {
  const trust = useTrustScore();

  if (!trust.events?.length) {
    return <p className="text-sm text-gray-400">No trust activity yet</p>;
  }

  return (
    <ul className="text-sm space-y-2 mt-2">
      {trust.events.map((e, i) => (
        <li key={i} className="flex justify-between">
          <span>{e.label}</span>
          <span className="text-green-600">+{e.points}</span>
        </li>
      ))}
    </ul>
  );
}
