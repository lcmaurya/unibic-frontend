'use client'

import Link from 'next/link'
import Card from './Card'
import TrustBadge from '@/app/deals/components/TrustBadge'

const MOCK_DEALS = [
  { id: 1, title: 'Logo Design', status: 'Active' },
  { id: 2, title: 'Landing Page Fix', status: 'Pending' },
  { id: 3, title: 'Bug Resolve', status: 'Completed' },
]

export default function DealsPreview() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-base">Deals</h3>
        <Link href="/deals" className="text-sm text-green-600 font-medium">
          View all →
        </Link>
      </div>

      <div className="space-y-2">
        {MOCK_DEALS.map(d => (
          <div
            key={d.id}
            className="flex items-center justify-between border rounded-lg px-3 py-2 text-sm"
          >
            <span className="truncate">{d.title}</span>
            <TrustBadge label={d.status} />
          </div>
        ))}
      </div>
    </Card>
  )
}
