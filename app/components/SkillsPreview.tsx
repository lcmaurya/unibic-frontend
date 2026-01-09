'use client'

import Card from './Card'

export default function SkillsPreview() {
  return (
    <Card className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-800">Your Skills</h3>

      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 text-xs rounded bg-gray-100">Math Tutor</span>
        <span className="px-2 py-1 text-xs rounded bg-gray-100">Web Design</span>
        <span className="px-2 py-1 text-xs rounded bg-gray-100">Video Editing</span>
      </div>

      <p className="text-xs text-gray-500">
        Manage skills in Skills section
      </p>
    </Card>
  )
}
