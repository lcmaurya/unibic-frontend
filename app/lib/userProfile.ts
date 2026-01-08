import { prodLog } from "./prodLogger";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
import { app } from "./firebase-client";

export async function ensureUserProfile(user: {
  uid: string;
  email?: string | null;
}) {
  try {
    const db = getFirestore(app);
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        uid: user.uid,
        email: user.email ?? null,
        trustScore: 0,
        createdAt: Date.now(),
      });
    }
  } catch {
    // Firebase not ready → skip silently
  }
}
