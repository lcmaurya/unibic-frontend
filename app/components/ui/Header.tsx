"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        
        {/* Left: Brand */}
        <Link href="/" className="font-semibold text-lg tracking-tight">
          UNIBIC
        </Link>

        {/* Center: Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/skills" className="hover:text-black">Skills</Link>
          <Link href="/community" className="hover:text-black">Community</Link>
          <Link href="/deals" className="hover:text-black">Deals</Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/post"
            className="px-3 py-1.5 rounded-md text-sm bg-green-600 text-white hover:bg-green-700"
          >
            Post
          </Link>

          <Link
            href="/profile"
            className="px-3 py-1.5 rounded-md text-sm border hover:bg-gray-100"
          >
            Profile
          </Link>
        </div>

      </div>
    </header>
  );
}
