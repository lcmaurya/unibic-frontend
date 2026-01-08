import admin from "firebase-admin";
import fs from "fs";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: "unibic-xxxxx.appspot.com"
  });
}

const bucket = admin.storage().bucket();

export async function uploadSkillFileServer(
  localPath: string,
  destPath: string
) {
  await bucket.upload(localPath, {
    destination: destPath,
    public: true
  });

  return `https://storage.googleapis.com/${bucket.name}/${destPath}`;
}
