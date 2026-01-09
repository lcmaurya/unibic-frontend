'use client'

import Card from './Card'

export default function CommunityPreview() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-800">
        Community Activity
      </h3>

      <Card>
        <p className="text-sm font-medium">Ankit earned Trust +5</p>
        <p className="text-xs text-gray-500">
          Help accepted in “Website Fix”
        </p>
      </Card>

      <Card>
        <p className="text-sm font-medium">Rahul joined Unibic</p>
        <p className="text-xs text-gray-500">
          New verified member
        </p>
      </Card>
    </div>
  )
}
