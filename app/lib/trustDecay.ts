export function applyTrustDecay(
  score: number,
  daysInactive: number
): number {
  if (daysInactive < 7) return score;

  const decay = Math.floor(daysInactive / 7);
  const next = score - decay * 2;

  return next < 0 ? 0 : next;
}
