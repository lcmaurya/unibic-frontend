export default function VerifiedShield({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22c55e"/>
          <stop offset="100%" stopColor="#15803d"/>
        </linearGradient>
      </defs>

      <path
        d="M32 4L56 12V32C56 46 45 58 32 60C19 58 8 46 8 32V12L32 4Z"
        fill="url(#shieldGrad)"
        stroke="#eab308"
        strokeWidth="2"
      />

      <path
        d="M24 32L30 38L42 24"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
