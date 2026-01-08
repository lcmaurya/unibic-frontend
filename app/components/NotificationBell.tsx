"use client"

import { useEffect, useState } from "react"

type Notification = {
  id: string
  title: string
  body: string
  read: boolean
}

function playBell() {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = "sine"
  osc.frequency.value = 880
  gain.gain.value = 0.2

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()
  setTimeout(() => {
    osc.stop()
    ctx.close()
  }, 250)
}

export default function NotificationBell({ userId }: { userId: string }) {
  const [list, setList] = useState<Notification[]>([])

  async function load() {
    const res = await fetch("/api/notifications/list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId })
    })
    const data = await res.json()
    setList(data)

    if (data.some((n: Notification) => !n.read)) {
      playBell()
    }
  }

  useEffect(() => {
    load()
  }, [])

  const unread = list.filter(n => !n.read).length

  return (
    <div style={{ position: "relative", cursor: "pointer" }}>
      🔔
      {unread > 0 && (
        <span style={{
          position: "absolute",
          top: -6,
          right: -6,
          background: "red",
          color: "white",
          borderRadius: "50%",
          padding: "2px 6px",
          fontSize: 12
        }}>
          {unread}
        </span>
      )}
    </div>
  )
}
