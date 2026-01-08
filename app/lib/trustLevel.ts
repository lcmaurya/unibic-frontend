export function trustLevel(score: number = 0) {
  if (score >= 700) return "Excellent";
  if (score >= 400) return "Good";
  if (score >= 200) return "Average";
  return "Risky";
}
