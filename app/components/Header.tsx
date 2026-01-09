'use client'

import { Bell, MapPin, ShieldCheck } from 'lucide-react'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="px-4 pt-4 pb-3 space-y-3">

        {/* Title Row */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">
            <span className="text-black">Unibic</span>{' '}
            <span className="text-gray-600 font-medium">Trust</span>
          </h1>

          <div className="flex items-center gap-4 text-gray-600">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <MapPin className="w-5 h-5" />
            <Bell className="w-5 h-5" />
          </div>
        </div>

        {/* Search */}
        <SearchBar placeholder="Search skills or tasks..." />
      </div>
    </header>
  )
}
