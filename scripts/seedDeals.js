import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, applicationDefault } from "firebase-admin/app";

initializeApp({ credential: applicationDefault() });
const db = getFirestore();

await db.collection("deals").add({
  title: "Demo Deal 1",
  createdAt: Date.now(),
  status: "open"
});

await db.collection("deals").add({
  title: "Demo Deal 2",
  createdAt: Date.now(),
  status: "open"
});

console.log("Deals seeded");
process.exit(0);
