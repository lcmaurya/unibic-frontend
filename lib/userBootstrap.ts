import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function bootstrapUser(uid: string) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      uid,
      trustScore: 0,
      level: "new",
      createdAt: serverTimestamp(),
      lastActiveAt: serverTimestamp(),
      skills: [],
      completedTasks: 0,
      helpGiven: 0,
      helpReceived: 0,
      location: null,
    });
  }
}
