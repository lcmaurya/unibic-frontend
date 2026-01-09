'use client'

import Card from './Card'

export default function DealsPreview() {
  return (
    <Card className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-800">Active Deals</h3>

      <div className="space-y-2">
        <div className="text-xs bg-gray-100 rounded px-3 py-2">
          Web Design — In Progress
        </div>
        <div className="text-xs bg-gray-100 rounded px-3 py-2">
          Math Tutoring — Pending
        </div>
      </div>

      <p className="text-xs text-gray-500">
        View all in Deals Room
      </p>
    </Card>
  )
}
