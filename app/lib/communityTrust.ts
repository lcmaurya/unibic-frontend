export type EndorsementType =
  | "HELPFUL"
  | "RELIABLE"
  | "SKILLED"
  | "UNRESPONSIVE";

export interface Endorsement {
  fromUser: string;
  toUser: string;
  type: EndorsementType;
  timestamp: number;
}

const ENDORSEMENT_WEIGHTS: Record<EndorsementType, number> = {
  HELPFUL: 40,
  RELIABLE: 30,
  SKILLED: 30,
  UNRESPONSIVE: -50,
};

export function calculateCommunityTrust(
  endorsements: Endorsement[]
): number {
  if (!endorsements || endorsements.length === 0) return 0;

  const score = endorsements.reduce((sum, e) => {
    return sum + (ENDORSEMENT_WEIGHTS[e.type] || 0);
  }, 0);

  return Math.max(0, Math.min(1000, score));
}
