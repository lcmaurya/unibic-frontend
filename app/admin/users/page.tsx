'use client'

import { useEffect, useState } from "react"

export default function AdminUsers() {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/admin/users")
      .then(r => r.json())
      .then(setUsers)
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Users</h2>
      {users.map(u => (
        <div key={u.id} style={{ borderBottom: "1px solid #ccc", marginBottom: 10 }}>
          <div>User: {u.id}</div>
          <div>Muted: {String(u.muted)}</div>
          <div>Banned: {String(u.banned)}</div>
          <div>Strikes: {u.strikeCount || 0}</div>

          <button onClick={() =>
            fetch("/api/moderation/admin-unmute", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ userId: u.id })
            })
          }>
            Unmute
          </button>
        </div>
      ))}
    </div>
  )
}
