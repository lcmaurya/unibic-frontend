"use client";

export default function ImageUploader({
  onSelect,
  disabled,
}: {
  onSelect: (file: File) => void;
  disabled: boolean;
}) {
  return (
    <label
      className={`px-4 py-2 rounded ui-card-full text-white ${
        disabled ? "bg-gray-400" : "bg-green-600"
      }`}
    >
      Image
      <input
        type="file"
        accept="image/*"
        hidden
        disabled={disabled}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onSelect(file);
        }}
      />
    </label>
  );
}
