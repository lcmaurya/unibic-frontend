'use client'

import { ArrowRight } from 'lucide-react'
import Card from './Card'

export default function DealsPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">Active Deals</h3>
        <span className="text-xs text-green-700 flex items-center gap-1">
          View all <ArrowRight className="w-3 h-3" />
        </span>
      </div>

      <Card>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">Logo Design</p>
            <p className="text-xs text-gray-500">With Rahul · Ongoing</p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
            In Progress
          </span>
        </div>
      </Card>

      <Card>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">Math Tutoring</p>
            <p className="text-xs text-gray-500">With Ankit · Completed</p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
            Done
          </span>
        </div>
      </Card>
    </div>
  )
}
