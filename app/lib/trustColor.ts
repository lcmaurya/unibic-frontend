export function trustColor(score: number = 0) {
  if (score >= 700) return "bg-green-500";
  if (score >= 400) return "bg-yellow-400";
  return "bg-red-500";
}
