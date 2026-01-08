"use client";

export default function ImagePreview({
  image,
  clear,
  locked,
}: {
  image: string;
  clear: () => void;
  locked: boolean;
}) {
  return (
    <div className="relative w-full flex justify-center">
      <div className="relative inline-block">
        <img
          src={image}
          className="rounded-lg max-h-[260px] object-contain"
          alt="preview"
        />

        {!locked && (
          <button
            onClick={clear}
            className="absolute -top-2 -right-2 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
