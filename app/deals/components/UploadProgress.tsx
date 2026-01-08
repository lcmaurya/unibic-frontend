"use client";
export default function UploadProgress({ progress }: { progress: number }) {
  if (progress <= 0 || progress >= 100) return null;
  return (
    <div className="w-full mt-2">
      <div className="text-xs text-gray-600 mb-1">Uploading… {progress}%</div>
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className="h-2 bg-green-600 rounded transition-all"
          style={{ width: progress + "%" }}
        />
      </div>
    </div>
  );
}
