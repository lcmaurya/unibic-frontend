"use client";

export default function VideoUploader({
  onSelect,
  disabled,
}: {
  onSelect: (file: File) => void;
  disabled?: boolean;
}) {
  return (
    <label
      className={`cursor-pointer ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <input
        type="file"
        accept="video/*"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onSelect(file);
        }}
      />
      Video
    </label>
  );
}
