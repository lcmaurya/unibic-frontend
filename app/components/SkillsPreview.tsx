'use client'

import Card from './Card'
import { Button } from './ui/Button'

export default function SkillsPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">Your Skills</h3>
        <Button variant="secondary">Add</Button>
      </div>

      <Card>
        <p className="text-sm font-medium">Phone Repair</p>
        <p className="text-xs text-gray-500">Trust impact: +8</p>
      </Card>

      <Card>
        <p className="text-sm font-medium">Graphic Design</p>
        <p className="text-xs text-gray-500">Trust impact: +6</p>
      </Card>
    </div>
  )
}
