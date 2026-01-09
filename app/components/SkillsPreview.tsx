'use client'

import Card from './Card'

export default function SkillsPreview() {
  return (
    <Card className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-800">Your Skills</h3>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
          Electrician
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
          Graphic Design
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
          Math Tutor
        </span>
      </div>

      <p className="text-xs text-gray-500">
        Add or manage skills anytime
      </p>
    </Card>
  )
}
