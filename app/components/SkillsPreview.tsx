'use client'

import Card from './Card'

export default function SkillsPreview() {
  return (
    <Card className="space-y-2">
      <h3 className="text-sm font-semibold text-gray-800">Top Skills</h3>

      <div className="flex gap-2">
        <div className="h-8 w-20 bg-green-100 rounded-full" />
        <div className="h-8 w-20 bg-green-100 rounded-full" />
        <div className="h-8 w-20 bg-green-100 rounded-full" />
      </div>

      <p className="text-xs text-gray-500">
        Skills you offer or frequently search
      </p>
    </Card>
  )
}
