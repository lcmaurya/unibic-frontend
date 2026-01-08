import { uploadSkillFile } from "./uploadSkillMedia";

(async () => {
  const file = new File(["HELLO"], "test.txt", { type: "text/plain" });
  const url = await uploadSkillFile("debug-user", "debug-skill", file, "images");
  console.log("UPLOAD OK:", url);
})();
