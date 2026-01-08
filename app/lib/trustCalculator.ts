// 🔒 TRUST ENGINE – DO NOT MODIFY (WIRING PENDING)
import { TrustEvent } from "./trustEngine";
import { TRUST_RULES } from "./trustWeights";

export function calculateWeightedTrust(
  currentScore: number,
  event: TrustEvent
): number {
  const rule = TRUST_RULES[event];
  if (!rule) return currentScore;

  let delta = rule.base;

  // High-trust users earn slightly less (anti-inflation)
  if (currentScore > 700) {
    delta *= 0.7;
  }

  // Low-trust users recover faster
  if (currentScore < 200 && delta > 0) {
    delta *= 1.3;
  }

  delta *= rule.multiplier;

  let next = currentScore + Math.round(delta);

  if (next < 0) next = 0;
  if (next > 1000) next = 1000;

  return next;
}
