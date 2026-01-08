import { trustEvents } from "@/app/lib/trustData";

export function getTrustBreakdown() {
  const breakdown = {
    deals: 0,
    skills: 0,
    community: 0,
  };

  for (const event of trustEvents) {
    if (event.type === "deal") breakdown.deals += event.points;
    if (event.type === "skill") breakdown.skills += event.points;
    if (event.type === "community") breakdown.community += event.points;
  }

  return breakdown;
}
