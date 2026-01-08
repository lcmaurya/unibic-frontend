"use client";

import { useState } from "react";

export function useImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  async function uploadImage(file: File) {
    setPreview(URL.createObjectURL(file));
    setUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/upload/image");

    // 🔐 PI Auth placeholder token
    xhr.setRequestHeader("Authorization", "Bearer PI_DEMO_TOKEN");

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded / e.total) * 100);
        setProgress(percent);
      }
    };

    xhr.onload = () => {
      setUploading(false);
      setProgress(100);
    };

    xhr.onerror = () => {
      setUploading(false);
      alert("Upload failed");
    };

    xhr.send(formData);
  }

  return {
    preview,
    progress,
    uploading,
    uploadImage,
  };
}
