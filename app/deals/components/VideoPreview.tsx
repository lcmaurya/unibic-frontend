"use client";

export default function VideoPreview({
  src,
  clear,
  locked,
}: {
  src: string;
  clear: () => void;
  locked: boolean;
}) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <video
        src={src}
        controls
        className="rounded-lg max-h-[260px]"
      />
      {!locked && (
        <button
          onClick={clear}
          className="absolute top-2 right-2 bg-red-600 text-white w-7 h-7 rounded-full text-sm"
        >
          ×
        </button>
      )}
    </div>
  );
}
