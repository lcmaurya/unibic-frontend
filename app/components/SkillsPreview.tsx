'use client'

import Card from './Card'

export default function SkillsPreview() {
  return (
    <Card className="space-y-2">
      <h3 className="text-sm font-semibold text-gray-800">Your Skills</h3>

      <div className="grid grid-cols-2 gap-2">
        <div className="h-12 bg-gray-100 rounded" />
        <div className="h-12 bg-gray-100 rounded" />
      </div>

      <p className="text-xs text-gray-500">
        Skills you offer or are exploring
      </p>
    </Card>
  )
}
