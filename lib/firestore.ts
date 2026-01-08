import { useEffect, useState } from "react";
import { getTrustScore } from "@/lib/firestore";
import { TEST_USER } from "@/lib/testUser";

export function useTrustScore() {
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getTrustScore(TEST_USER.uid);
        setScore(data.score);
      } catch (e) {
        console.error("TrustScore error", e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { score, loading };
}
