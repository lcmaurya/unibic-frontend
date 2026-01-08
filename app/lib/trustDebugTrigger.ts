import { applyTrustEvent } from "./trustEngine";

export function debugTrustTrigger() {
  return applyTrustEvent(
    { score: 0, flags: [], events: [] },
    "MARK_DONE"
  );
}
