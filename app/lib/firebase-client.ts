import { initializeApp, getApps, getApp as _getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6qDAYA0U5fz76vzgrIakB9uLLApfL2y4",
  authDomain: "unibic-web.firebaseapp.com",
  projectId: "unibic-web",
  storageBucket: "unibic-web.firebasestorage.app",
  messagingSenderId: "530589078676",
  appId: "1:530589078676:web:1617c48b678789fc7c5081",
};

export const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0];

export function getApp() {
  return app;
}

export const db = getFirestore(app);
