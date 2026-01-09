'use client'

import Card from './Card'

export default function DealsPreview() {
  return (
    <Card className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-800">Active Deals</h3>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-700">Math Tutor Session</span>
          <span className="text-green-600 font-medium">Ongoing</span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-700">Logo Design</span>
          <span className="text-blue-600 font-medium">Completed</span>
        </div>
      </div>

      <p className="text-xs text-gray-500">
        View all deals in Deals Room
      </p>
    </Card>
  )
}
