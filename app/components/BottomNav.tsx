'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/search', label: 'Search', icon: '🔍' },
  { href: '/deals', label: 'Deals', icon: '🤝' },
  { href: '/community', label: 'Community', icon: '👥' },
  { href: '/profile', label: 'Profile', icon: '👤' },
]

export default function BottomNav() {
  const path = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t">
      <div className="max-w-md mx-auto flex justify-between px-2 py-2">
        {tabs.map(tab => {
          const active = path === tab.href
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center flex-1 py-1 rounded-lg text-xs transition
                ${active
                  ? 'text-green-600 font-semibold'
                  : 'text-gray-500 hover:text-gray-700'}
              `}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
