import { DealState, MediaState, TrustState } from "./platform/types";

export const platformEngine = {
  deal: {} as DealState,
  media: {} as MediaState,
  trust: {} as TrustState,

  init() {
    return {
      status: "READY",
      firebase: "DISABLED",
      mode: "LOCAL_SAFE",
    };
  },
};
