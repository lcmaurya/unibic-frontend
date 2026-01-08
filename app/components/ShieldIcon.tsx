"use client";

export default function ShieldIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L4 5V11C4 16 7.5 19.5 12 22C16.5 19.5 20 16 20 11V5L12 2Z"
        fill="#22C55E"
        stroke="#15803D"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 12.5L11 15L15.5 9.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
