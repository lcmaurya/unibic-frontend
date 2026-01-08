"use client";

import { useEffect, useState } from "react";
import { listenAuth } from "@/app/lib/authSafe";
import { ensureUserProfile } from "@/app/lib/userProfile";

export function useUserProfile() {
  const [user, setUser] = useState<null | {
    uid: string;
    email?: string | null;
  }>(null);

  useEffect(() => {
    const unsub = listenAuth((u) => {
      if (u) {
        const profile = { uid: u.uid, email: u.email };
        setUser(profile);
        ensureUserProfile(profile);
      } else {
        setUser(null);
      }
    });

    return () => unsub();
  }, []);

  return user;
}
