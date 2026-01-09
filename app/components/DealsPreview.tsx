'use client'

import Link from 'next/link'
import Card from './Card'
import TrustBadge from '@/app/deals/components/TrustBadge'

const MOCK_DEALS = [
  { id: 1, title: 'Logo Design', price: '₹500', status: 'active' },
  { id: 2, title: 'Fix React Bug', price: '₹300', status: 'pending' },
]

export default function DealsPreview() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-base">Deals</h3>
        <Link href="/deals" className="text-sm text-green-600 font-medium">
          View →
        </Link>
      </div>

      <div className="space-y-3">
        {MOCK_DEALS.map(deal => (
          <div
            key={deal.id}
            className="flex items-center justify-between border rounded-lg px-3 py-2"
          >
            <div>
              <div className="text-sm font-medium">{deal.title}</div>
              <div className="text-xs text-gray-500">{deal.price}</div>
            </div>

            <TrustBadge status={deal.status} />
          </div>
        ))}
      </div>
    </Card>
  )
}
