import { Card } from "@/app/components/ui/Card";




import { getPiUser } from "@/app/lib/piAuth";

import { initFirebase, getFirebaseUserCount } from "@/app/lib/firebase";











export default async function Dashboard() {
  // 🔒 SAFE STATIC VALUES (Pi upload ready)
  const trustScore = 10;
  const trustBreakdown = { deals: 0, skills: 2, community: 0 };

  // 🔒 SAFE STATIC VALUES (Pi upload ready)





  // ✅ SAFE initial values (NO ReferenceError possible)

  return (
    <main className="ui-container ui-stack-lg" className="grid grid-cols-1 md:grid-cols-2 gap-4" className="p-4 space-y-4 bg-green-50 min-h-screen">
      <h1 className="text-2xl font-bold">UNIBIC Dashboard · Pi Ready</h1>

      <Card className="border rounded ui-card-xl p-4 bg-white shadow">
        <h2 className="font-semibold text-lg">Trust Score (Live)</h2>

        <Card className="text-3xl font-bold text-[var(--brand-green)]">
        </Card>
        <Card className="text-sm text-muted">Real-time from Firestore</Card>
      </Card>

      <Card className="border rounded ui-card-xl p-4 bg-white shadow">
        <h2 className="font-semibold text-lg">Deals</h2>
        <a href="/deals" className="text-blue-600">Open Deals</a>
      </Card>

      <Card className="border rounded ui-card-xl p-4 bg-white shadow">
        <h2 className="font-semibold text-lg">Skills</h2>
        <a href="/skills" className="text-blue-600">Find Skills</a>
      </Card>

      <Card className="border rounded ui-card-xl p-4 bg-white shadow">
        <h2 className="font-semibold text-lg">Community</h2>
        <Card className="text-sm text-muted">Active community members</Card>
        <a href="/community" className="text-blue-600">Open Community</a>
      </Card>

      <Card className="border rounded ui-card-xl p-4 bg-white shadow">
        <h4 className="font-semibold">Profile</h4>
        <a href="/profile" className="text-blue-600">Open Profile</a>
      </Card>
    </main>
  );
}
