"use client"
import { useEffect, useState } from "react"

export default function NotificationsPage() {
  const userId = "test-user-1"
  const [list, setList] = useState<any[]>([])

  async function load() {
    const r = await fetch("/api/notifications/list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId })
    })
    setList(await r.json())
  }

  async function markRead(id: string) {
    await fetch("/api/notifications/read", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
    load()
  }

  useEffect(() => { load() }, [])

  return (
    <div style={{ padding: 16 }}>
      <h3>Notifications</h3>

      {list.length === 0 && <p>No notifications</p>}

      {list.map(n => (
        <div key={n.id}
          onClick={() => markRead(n.id)}
          style={{
            padding: 10,
            marginBottom: 8,
            cursor: "pointer",
            background: n.read ? "#fff" : "#eef",
            border border-[var(--border-soft)]: "1px solid #ddd"
          }}
        >
          <b>{n.title}</b>
          <div>{n.body}</div>
        </div>
      ))}
    </div>
  )
}
