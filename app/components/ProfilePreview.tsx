'use client'

import Link from 'next/link'
import Card from './Card'
import ProfileAvatar from './ProfileAvatar'
import TrustRing from './TrustRing'

export default function ProfilePreview() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-base">Your Profile</h3>
        <Link href="/profile" className="text-sm text-green-600 font-medium">
          View →
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ProfileAvatar size={48} />

        <div className="flex-1">
          <div className="font-medium text-sm">User</div>
          <div className="text-xs text-gray-500">Active member</div>
        </div>

        <TrustRing value={720} size={42} />
      </div>
    </Card>
  )
}
