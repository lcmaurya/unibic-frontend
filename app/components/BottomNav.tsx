"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const path = usePathname();

  const items = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/skills", label: "Skills", icon: "🛠️" },
    { href: "/community", label: "Community", icon: "👥" },
    { href: "/profile", label: "Profile", icon: "👤" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 56,
        background: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 50,
      }}
    >
      {items.map((item) => {
        const active = path === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="tap"
            style={{
              textDecoration: "none",
              color: active ? "#16a34a" : "#6b7280",
              fontWeight: active ? "bold" : "normal",
              fontSize: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: active ? "scale(1.05)" : "scale(1)",
            }}
          >
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
