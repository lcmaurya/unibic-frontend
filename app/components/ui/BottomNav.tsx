"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search" },
  { href: "/deals", label: "Deals" },
  { href: "/skills", label: "Skills" },
  { href: "/profile", label: "Profile" },
];

export default function BottomNav() {
  const path = usePathname();

  return (
    <nav className="nav">
      {items.map(i => (
        <Link
          key={i.href}
          href={i.href}
          className={`nav-item ${path === i.href ? "active" : ""}`}
        >
          <div>●</div>
          <span>{i.label}</span>
        </Link>
      ))}
    </nav>
  );
}
