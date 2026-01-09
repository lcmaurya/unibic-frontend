'use client'

import Card from './Card'

export default function DealsPreview() {
  return (
    <Card className="space-y-2">
      <h3 className="text-sm font-semibold text-gray-800">Active Deals</h3>

      <div className="space-y-2">
        <div className="h-10 bg-gray-100 rounded" />
        <div className="h-10 bg-gray-100 rounded" />
      </div>

      <p className="text-xs text-gray-500">
        Ongoing or recently completed deals
      </p>
    </Card>
  )
}
