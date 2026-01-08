"use client";

export default function AnimatedShield() {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        marginLeft: 8,
        animation: "shieldMove 1.8s ease-in-out infinite alternate"
      }}
    >
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L20 6V12C20 16.5 16.9 20.7 12 22C7.1 20.7 4 16.5 4 12V6L12 2Z"
          fill="#1f9d55"
          stroke="#d4af37"
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

      <style jsx>{`
        @keyframes shieldMove {
          from {
            transform: translateX(0px);
          }
          to {
            transform: translateX(6px);
          }
        }
      `}</style>
    </div>
  );
}
