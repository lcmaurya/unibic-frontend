import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";
import { app } from "./firebase-client";

const storage = getStorage(app);

export async function uploadSkillFile(
  userId: string,
  skillId: string,
  file: File,
  type: "images" | "videos"
) {
  const path = `users/${userId}/skills/${skillId}/${type}/${file.name}`;
  const storageRef = ref(storage, path);

  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}
