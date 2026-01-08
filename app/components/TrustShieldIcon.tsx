"use client";

export default function TrustShieldIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <path
        d="M32 4L56 14V30C56 45 44 56 32 60C20 56 8 45 8 30V14L32 4Z"
        fill="#22c55e"
      />
      <path
        d="M26 32L30 36L40 26"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
