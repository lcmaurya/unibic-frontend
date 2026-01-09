import { Button } from "@/app/components/ui/Button";
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
          className="rounded ui-card-lg max-h-[260px] object-contain"
          alt="preview"
        />

        {!locked && (
          <Button
            onClick={clear}
            className="absolute -top-2 -right-2 bg-red-600 text-white w-8 h-8 rounded ui-card-full flex items-center justify-center shadow-lg"
          >
            ✕
          </Button>
        )}
      </div>
    </div>
  );
}
