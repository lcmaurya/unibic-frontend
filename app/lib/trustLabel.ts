export function getTrustLabel(score: number) {
  if (score >= 800) return "Excellent";
  if (score >= 500) return "Good";
  if (score > 0) return "Average";
  return "New";
}
