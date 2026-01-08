"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "@/lib/firebase";

export function useTrustScore() {
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setScore(null);
        setLoading(false);
        return;
      }

      const ref = doc(db, "users", user.uid);
      const unsubDoc = onSnapshot(ref, (snap) => {
        if (snap.exists()) {
          setScore(snap.data().trustScore ?? 0);
        } else {
          setScore(0);
        }
        setLoading(false);
      });

      return () => unsubDoc();
    });

    return () => unsubAuth();
  }, []);

  return { score, loading };
}
