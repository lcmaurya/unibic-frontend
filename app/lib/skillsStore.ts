import { db } from "./firebase-client";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

export async function getUserSkills(userId: string) {
  const ref = doc(db, "skills", userId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return [];
  return snap.data().items || [];
}

export async function addUserSkill(userId: string, skill: string) {
  const ref = doc(db, "skills", userId);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, { items: [skill] });
  } else {
    await updateDoc(ref, {
      items: arrayUnion(skill),
    });
  }
}
