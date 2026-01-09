'use client'

import { Users, ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'

export default function ActiveDealCard({
  title = 'Website Design Deal',
  amount = '₹ 5,000 Pi',
  members = 3,
  onOpen,
}: {
  title?: string
  amount?: string
  members?: number
  onOpen?: () => void
}) {
  return (
    <div className="rounded-2xl bg-white shadow p-4 space-y-3">
      <h3 className="text-sm font-semibold text-gray-800">Active Deal</h3>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">You have 1 active deal</p>
          <p className="mt-1 text-sm font-medium text-green-700">{title}</p>
        </div>

        <div className="flex items-center gap-1 text-green-700 text-sm">
          <Users className="w-4 h-4" />
          {members}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-900">
          {amount}
        </span>

        <Button onClick={onOpen} variant="primary">
          Open Deals Room <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
