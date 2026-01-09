'use client'

import NearbyTaskCard from './NearbyTaskCard'
import { Filter } from 'lucide-react'

export default function NearbyTaskList() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">Nearby Tasks</h3>
        <button className="flex items-center gap-1 text-xs text-green-700">
          <Filter className="w-3 h-3" />
          Filters
        </button>
      </div>

      <NearbyTaskCard
        title="Math Tutoring for Class 10"
        distance="1.2 km"
        time="1 hr"
        reward="₹300–500 Pi"
        tag="Teaching"
      />

      <NearbyTaskCard
        title="Hindi Translation Needed"
        distance="1.8 km"
        time="1 hr"
        reward="2–4 Pi"
        tag="Language"
      />

      <NearbyTaskCard
        title="Website Design Help"
        distance="2.3 km"
        time="2 hr"
        reward="4–6 Pi"
        tag="Design"
      />
    </div>
  )
}
