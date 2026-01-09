'use client'

import { Briefcase, Heart, Plus, Search, HandHeart } from 'lucide-react'
import { Button } from './ui/Button'

export default function TodaySummaryBlock({
  tasks = 5,
  helps = 2,
}: {
  tasks?: number
  helps?: number
}) {
  return (
    <div className="rounded-2xl bg-white shadow p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">Today’s Summary</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-gray-50 p-3">
          <div className="flex items-center gap-2 text-green-700">
            <Briefcase className="w-4 h-4" />
            <span className="text-xs">Available Tasks</span>
          </div>
          <p className="mt-1 text-lg font-bold">{tasks}</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-3">
          <div className="flex items-center gap-2 text-green-700">
            <Heart className="w-4 h-4" />
            <span className="text-xs">Help Requests</span>
          </div>
          <p className="mt-1 text-lg font-bold">{helps}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Button variant="secondary">
          <Plus className="w-4 h-4" /> Post Skill
        </Button>
        <Button variant="secondary">
          <Search className="w-4 h-4" /> Find Tasks
        </Button>
        <Button variant="secondary">
          <HandHeart className="w-4 h-4" /> Request Help
        </Button>
      </div>
    </div>
  )
}
