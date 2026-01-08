"use client";

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  limit
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "@/lib/firebase";

export interface Activity {
  id: string;
  type: string;
  createdAt?: any;
}

export function useRecentActivity() {
  const [activity, setActivity] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setActivity([]);
        setLoading(false);
        return;
      }

      const q = query(
        collection(db, "users", user.uid, "activity"),
        orderBy("createdAt", "desc"),
        limit(5)
      );

      const unsub = onSnapshot(q, (snap) => {
        const list: Activity[] = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as any),
        }));
        setActivity(list);
        setLoading(false);
      });

      return () => unsub();
    });

    return () => unsubAuth();
  }, []);

  return { activity, loading };
}
