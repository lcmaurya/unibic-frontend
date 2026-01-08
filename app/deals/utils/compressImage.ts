export async function compressImage(
  file: File,
  quality = 0.7,
  maxWidth = 1280
): Promise<Blob> {
  const img = document.createElement("img");
  const url = URL.createObjectURL(file);

  await new Promise((res) => {
    img.onload = res;
    img.src = url;
  });

  const scale = Math.min(1, maxWidth / img.width);
  const canvas = document.createElement("canvas");
  canvas.width = img.width * scale;
  canvas.height = img.height * scale;

  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  return new Promise((resolve) =>
    canvas.toBlob(
      (blob) => resolve(blob!),
      "image/jpeg",
      quality
    )
  );
}
