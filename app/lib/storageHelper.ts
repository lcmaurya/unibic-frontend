import fs from "fs";
import path from "path";
import { LOCAL_PATHS } from "./storageConfig";

type MediaType = "image" | "audio" | "video";

export function saveLocalFile(
  type: MediaType,
  filename: string,
  buffer: Buffer
) {
  const dir = path.join(process.cwd(), LOCAL_PATHS[type]);
  fs.mkdirSync(dir, { recursive: true });

  const fullPath = path.join(dir, filename);
  fs.writeFileSync(fullPath, buffer);

  return fullPath;
}
