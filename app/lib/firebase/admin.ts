import { initializeApp, getApps, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export function getAdminDb() {
  if (!getApps().length) {
    initializeApp({
      credential: applicationDefault(),
    });
  }
  return getFirestore();
}
