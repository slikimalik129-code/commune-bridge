"use client";

import Link from "next/link";

export default function TopNavbar() {
  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      emoji: "🏠",
    },
    {
      name: "AI",
      href: "/dashboard/assistant",
      emoji: "🤖",
    },
    {
      name: "Ride",
      href: "/dashboard/ride",
      emoji: "🚖",
    },
    {
      name: "Food",
      href: "/dashboard/food",
      emoji: "🍔",
    },
    {
      name: "Rentals",
      href: "/dashboard/rentals",
      emoji: "🏠",
    },
    {
      name: "Emergency",
      href: "/dashboard/emergency",
      emoji: "🚨",
    },
    {
      name: "Accessibility",
      href: "/dashboard/accessibility",
      emoji: "♿",
    },
    {
      name: "Translation",
      href: "/dashboard/translation",
      emoji: "🌍",
    },
    {
      name: "Marketplace",
      href: "/dashboard/shopping",
      emoji: "🛒",
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      emoji: "⚙",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">

        <h1 className="text-3xl font-extrabold text-cyan-400">
          Commune Bridge
        </h1>

        <nav className="flex flex-wrap gap-3">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="bg-zinc-900 hover:bg-cyan-500 hover:text-black transition px-4 py-2 rounded-2xl border border-zinc-800 text-sm font-medium"
            >
              {link.emoji} {link.name}
            </Link>
          ))}

        </nav>

      </div>

    </header>
  );
}