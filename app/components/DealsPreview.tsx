'use client'

import Card from './Card'

export default function DealsPreview() {
  return (
    <Card className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-800">Active Deals</h3>

      <div className="space-y-2">
        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2">
          <span className="text-xs text-gray-700">Plumbing Work</span>
          <span className="text-xs text-green-600 font-medium">Ongoing</span>
        </div>

        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2">
          <span className="text-xs text-gray-700">Logo Design</span>
          <span className="text-xs text-blue-600 font-medium">Pending</span>
        </div>
      </div>

      <p className="text-xs text-gray-500">
        Deals room opens after confirmation
      </p>
    </Card>
  )
}
