'use client'

import Card from './Card'

export default function CommunityPreview() {
  return (
    <Card className="space-y-2">
      <h3 className="text-sm font-semibold text-gray-800">Community Activity</h3>

      <div className="space-y-2">
        <div className="h-8 bg-gray-100 rounded-lg" />
        <div className="h-8 bg-gray-100 rounded-lg" />
        <div className="h-8 bg-gray-100 rounded-lg" />
      </div>

      <p className="text-xs text-gray-500">
        Endorsements, help, and trust-building actions
      </p>
    </Card>
  )
}
