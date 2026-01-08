"use client"

import { useEffect, useState } from "react"

export default function NotificationBell({ userId }: { userId: string }) {
  const [open, setOpen] = useState(false)
  const [list, setList] = useState<any[]>([])

  async function load() {
    const res = await fetch("/api/notifications/list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId })
    })
    setList(await res.json())
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

  const unread = list.filter(n => !n.read).length

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)}>
        🔔 {unread > 0 && <span>({unread})</span>}
      </button>

      {open && (
        <div style={{
          position: "absolute",
          right: 0,
          background: "#fff",
          border: "1px solid #ccc",
          width: 280,
          zIndex: 99
        }}>
          {list.length === 0 && <p>No notifications</p>}
          {list.map(n => (
            <div
              key={n.id}
              onClick={() => markRead(n.id)}
              style={{
                padding: 8,
                background: n.read ? "#fff" : "#eef",
                cursor: "pointer"
              }}
            >
              <b>{n.title}</b>
              <div>{n.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
