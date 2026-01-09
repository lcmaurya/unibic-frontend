'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Briefcase, Users, User } from 'lucide-react'

const nav = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/deals', label: 'Deals', icon: Briefcase },
  { href: '/community', label: 'Community', icon: Users },
  { href: '/profile', label: 'Profile', icon: User },
]

export default function BottomNav() {
  const path = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md">
      <div className="flex justify-around items-center h-14">
        {nav.map(item => {
          const active = path === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center text-xs transition ${
                active ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <Icon
                size={20}
                className={active ? 'stroke-[2.5]' : 'stroke-[1.8]'}
              />
              <span className="mt-0.5">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
