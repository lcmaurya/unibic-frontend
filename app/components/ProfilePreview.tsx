'use client'

import Link from 'next/link'
import ProfileAvatar from './ProfileAvatar'
import TrustRing from './TrustRing'
import VerifiedShield from './VerifiedShield'

export default function ProfilePreview() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-4 flex items-center gap-4">
      <ProfileAvatar size={52} />

      <div className="flex-1">
        <p className="text-sm text-gray-500">Your Profile</p>
        <h3 className="font-semibold text-base">View & manage profile</h3>

        <Link
          href="/profile"
          className="text-green-600 text-sm font-medium mt-1 inline-block"
        >
          Open Profile →
        </Link>
      </div>

      <div className="flex flex-col items-center gap-1">
        <TrustRing score={820} size={42} />
        <VerifiedShield size={18} />
      </div>
    </div>
  )
}
