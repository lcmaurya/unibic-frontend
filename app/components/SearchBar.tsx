'use client'

import { Search } from 'lucide-react'

export default function SearchBar({ placeholder }: { placeholder?: string }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder || 'Search'}
        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  )
}
