"use client";

import { useEffect, useState } from "react";
import { Endorsement } from "@/app/lib/communityTrust";
import {
  addEndorsement,
  getEndorsementsForUser,
} from "@/app/lib/endorseEngine";
import { calculateCommunityTrust } from "@/app/lib/communityTrust";

export function useCommunityEndorsements(userId?: string) {
  const [endorsements, setEndorsements] = useState<Endorsement[]>([]);
  const [trustScore, setTrustScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setEndorsements([]);
      setTrustScore(0);
      setLoading(false);
      return;
    }

    const list = getEndorsementsForUser(userId);
    setEndorsements(list);
    setTrustScore(calculateCommunityTrust(list));
    setLoading(false);
  }, [userId]);

  function endorse(type: Endorsement["type"]) {
    if (!userId) return;

    const e: Endorsement = {
      fromUser: "user.uid",
      toUser: userId,
      type,
      timestamp: Date.now(),
    };

    addEndorsement(e);

    const updated = getEndorsementsForUser(userId);
    setEndorsements(updated);
    setTrustScore(calculateCommunityTrust(updated));
  }

  return {
    endorsements,
    trustScore,
    endorse,
    loading,
  };
}
