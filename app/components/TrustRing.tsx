'use client'

import { useEffect, useState } from 'react'
import { ShieldCheck } from 'lucide-react'

export default function TrustRing({ score = 750, max = 1000 }) {
  const [progress, setProgress] = useState(0)
  const percentage = Math.min(100, Math.round((score / max) * 100))

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 300)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="relative w-36 h-36 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90">
        <circle
          cx="72"
          cy="72"
          r="60"
          stroke="#E5E7EB"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="72"
          cy="72"
          r="60"
          stroke="#16A34A"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 60}
          strokeDashoffset={
            2 * Math.PI * 60 * (1 - progress / 100)
          }
          style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
        />
      </svg>

      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-semibold text-green-700">
          {score}
        </span>
        <span className="text-xs text-gray-500">/ {max}</span>
        <span className="text-xs text-green-600 mt-1">Excellent</span>
      </div>

      <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow">
        <ShieldCheck className="w-5 h-5 text-green-600" />
      </div>
    </div>
  )
}
