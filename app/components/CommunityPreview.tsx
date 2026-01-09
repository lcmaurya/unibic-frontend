'use client'

import Card from './Card'

export default function CommunityPreview() {
  return (
    <Card className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-800">Community</h3>

      <div className="space-y-2">
        <div className="text-xs bg-gray-100 rounded px-3 py-2">
          🛡️ Trust discussion ongoing
        </div>
        <div className="text-xs bg-gray-100 rounded px-3 py-2">
          💬 New help requests nearby
        </div>
      </div>

      <p className="text-xs text-gray-500">
        Open Community
      </p>
    </Card>
  )
}
