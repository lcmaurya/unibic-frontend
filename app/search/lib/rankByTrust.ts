export type RankedProvider = {
  trust: number
  distance?: string
}

/**
 * Higher trust comes first
 * Stable & safe (no mutation)
 */
export function rankByTrust<T extends RankedProvider>(list: T[]): T[] {
  return [...list].sort((a, b) => b.trust - a.trust)
}
