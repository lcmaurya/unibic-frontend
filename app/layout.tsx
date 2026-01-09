import Header from "@/app/components/ui/Header";
import { Navbar } from "@/app/components/ui/Navbar";
import "../styles/ui.css";
import Header from "@/app/components/Header";

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-green-50">
  <Header />

<Header />

        {/* TOP BAR */}
        <header className="bg-white px-4 py-3 shadow-sm flex justify-between">
          <span className="font-bold">UNIBIC TRUST</span>
        </header>

        {/* PAGE CONTENT */}
        <main className="pb-16 pt-2" className="pb-20"><main className="pt-14">{children}</main></main>
<BottomNav />


        {/* BOTTOM NAV */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 text-sm">
          <a href="/" className="text-[var(--brand-green)]">Home</a>
          <a href="/skills">Skills</a>
          <a href="/community">Community</a>
          <a href="/profile">Profile</a>
        </nav>
import BottomNav from "@/app/components/ui/BottomNav";

      </body>
    </html>
  );
}
