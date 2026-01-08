export const TRUST_WEIGHTS = {
  HELP_ACCEPTED: {
    base: 5,
    multiplier: 1.2,
  },
  HELP_REJECTED: {
    base: -5,
    multiplier: 1,
  },
  STRIKE: {
    base: -10,
    multiplier: 1.5,
  },
} as const

/**
 * Adapter for trustCalculator
 * DO NOT delete TRUST_WEIGHTS
 */
export const TRUST_RULES = Object.fromEntries(
  Object.entries(TRUST_WEIGHTS).map(([key, value]) => [
    key,
    { base: value.base }
  ])
);
