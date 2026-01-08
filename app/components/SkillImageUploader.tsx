"use client";

import React, { useRef, useState } from "react";
import { uploadSkillFile } from "../lib/uploadSkillMedia";

type Props = {
  userId: string;
  skillId: string;
  onUploaded: (url: string) => void;
};

export default function SkillImageUploader({
  userId,
  skillId,
  onUploaded,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setLoading(true);

    try {
      const url = await uploadSkillFile(
        userId,
        skillId,
        file,
        "images"
      );
      onUploaded(url);
    } catch (err) {
      console.error("Image upload failed", err);
      alert("Image upload failed");
    } finally {
      setLoading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div className="mt-3">
      <label className="block border-2 border-green-600 bg-green-50 text-green-700 font-semibold px-4 py-2 rounded cursor-pointer text-center">
        {fileName ? fileName : "Upload Skill Image"}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          hidden
        />
      </label>

      {loading && (
        <div className="text-sm text-blue-600 mt-1 font-medium">
          Uploading image…
        </div>
      )}
    </div>
  );
}
