import ActiveDealCard from "@/app/components/ActiveDealCard";
'use client'

import Header from '@/app/components/Header'
import TrustHero from '@/app/components/TrustHero'
<ActiveDealCard />
import DealStatus from '@/app/components/home/DealStatus'
import TodaySummary from '@/app/components/TodaySummary'
import NearbyTasks from '@/app/components/NearbyTasks'
import BottomNav from '@/app/components/BottomNav'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F6FBF8]">
      <Header />

      <main className="px-4 space-y-6 pb-24">
        <TrustHero />
<ActiveDealCard />
        <DealStatus />
        <TodaySummary />
        <NearbyTasks />
      </main>

      <BottomNav />
    </div>
  )
}
