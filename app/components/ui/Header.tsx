"use client";

export default function Header() {
  return (
    <header className="w-full bg-white border-b px-4 py-3 flex items-center justify-between">
      
      {/* LEFT ICONS */}
      <div className="flex items-center gap-3 text-green-600">
        <span className="text-lg">🌐</span>
        <span className="text-lg">📍</span>
        <span className="text-lg">🔔</span>
      </div>

      {/* CENTER BRAND */}
      <div className="flex flex-col items-center leading-tight">
        <span className="text-xl font-extrabold text-green-600">
          UNIBIC
        </span>
        <span className="text-[11px] tracking-wide text-gray-500">
          Trust
        </span>
      </div>

      {/* RIGHT PLACEHOLDER (balance) */}
      <div className="w-[72px]" />
    </header>
  );
}
