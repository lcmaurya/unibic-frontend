"use client"

import { useEffect, useState } from "react"

type User = {
  id: string
  muted?: boolean
  muteReason?: string
  strikeCount?: number
}

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([])

  async function load() {
    const res = await fetch("/api/admin/users")
    setUsers(await res.json())
  }

  async function mute(id: string) {
    await fetch("/api/moderation/mute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: id, days: 7, reason: "admin_action" })
    })
    load()
  }

  async function unmute(id: string) {
    await fetch("/api/moderation/admin-unmute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: id })
    })
    load()
  }

  async function strike(id: string) {
    await fetch("/api/moderation/strike", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: id })
    })
    load()
  }

  useEffect(() => { load() }, [])

  return (
    <div>
      {users.map(u => (
        <div key={u.id} style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
          <b>{u.id}</b><br />
          Muted: {String(u.muted)}<br />
          Strikes: {u.strikeCount || 0}<br />

          <button onClick={() => mute(u.id)}>Mute</button>{" "}
          <button onClick={() => unmute(u.id)}>Unmute</button>{" "}
          <button onClick={() => strike(u.id)}>Strike</button>
        </div>
      ))}
    </div>
  )
}
