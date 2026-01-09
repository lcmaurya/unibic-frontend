import { Button } from "@/app/components/ui/Button";
"use client"
import { useRef } from "react"

export default function RealBell() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  function ring() {
    audioRef.current?.currentTime && (audioRef.current.currentTime = 0)
    audioRef.current?.play()
  }

  return (
    <div style={{ position: "relative" }}>
      <Button
        onClick={ring}
        aria-label="Notifications"
        style={{
          fontSize: 22,
          background: "none",
          border: "none",
          cursor: "pointer",
          animation: "bell-shake 2s infinite"
        }}
      >
        🔔
      </Button>

      <audio ref={audioRef} src="/bell.mp3" preload="auto" />

      <style jsx>{`
        @keyframes bell-shake {
          0% { transform: rotate(0deg); }
          2% { transform: rotate(15deg); }
          4% { transform: rotate(-15deg); }
          6% { transform: rotate(10deg); }
          8% { transform: rotate(-10deg); }
          10% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  )
}
