'use client'

import Link from 'next/link'
import Card from './Card'
import VerifiedShield from './VerifiedShield'

const MOCK_COMMUNITY = [
  { id: 1, name: 'Ravi Kumar', action: 'endorsed a skill' },
  { id: 2, name: 'Neha Singh', action: 'completed a deal' },
  { id: 3, name: 'Amit Verma', action: 'joined community' },
]

export default function CommunityPreview() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-base">Community</h3>
        <Link href="/community" className="text-sm text-green-600 font-medium">
          View →
        </Link>
      </div>

      <div className="space-y-2">
        {MOCK_COMMUNITY.map(u => (
          <div
            key={u.id}
            className="flex items-center justify-between border rounded-lg px-3 py-2 text-sm"
          >
            <div className="truncate">
              <span className="font-medium">{u.name}</span>{' '}
              <span className="text-gray-500">{u.action}</span>
            </div>
            <VerifiedShield />
          </div>
        ))}
      </div>
    </Card>
  )
}
