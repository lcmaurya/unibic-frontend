import { uploadSkillFileServer } from "./uploadSkillMedia.server.ts";

(async () => {
  const url = await uploadSkillFileServer(
    "./test.txt",
    "debug/test.txt"
  );
  console.log("UPLOAD OK:", url);
})();
