'use client'

import Card from './Card'

export default function MediaFeedPreview() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-800">Community Media</h3>

      <div className="grid grid-cols-3 gap-2">
        <Card className="h-20 bg-gray-100" />
        <Card className="h-20 bg-gray-100" />
        <Card className="h-20 bg-gray-100" />
      </div>

      <p className="text-xs text-gray-500">
        Images & videos shared by trusted users
      </p>
    </div>
  )
}
