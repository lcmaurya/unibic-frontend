'use client'

import Card from './Card'
import { Button } from './ui/Button'

export default function DealsPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">Active Deals</h3>
        <Button variant="secondary">View all</Button>
      </div>

      <Card>
        <p className="text-sm font-medium">Mobile Repair</p>
        <p className="text-xs text-gray-500">In progress · Trust +10</p>
      </Card>

      <Card>
        <p className="text-sm font-medium">Logo Design</p>
        <p className="text-xs text-gray-500">Completed · Trust +5</p>
      </Card>
    </div>
  )
}
