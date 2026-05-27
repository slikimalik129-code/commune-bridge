"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "Dashboard", href: "/dashboard", emoji: "🏠" },
  { name: "AI Assistant", href: "/dashboard/assistant", emoji: "🤖" },
  { name: "Ride Services", href: "/dashboard/ride", emoji: "🚖" },
  { name: "Food Delivery", href: "/dashboard/food", emoji: "🍔" },
  { name: "Rentals", href: "/dashboard/rentals", emoji: "🏘" },
  { name: "Emergency", href: "/dashboard/emergency", emoji: "🚨" },
  { name: "Accessibility", href: "/dashboard/accessibility", emoji: "♿" },
  { name: "Translation", href: "/dashboard/translation", emoji: "🌍" },
  { name: "Marketplace", href: "/dashboard/shopping", emoji: "🛒" },
  { name: "Settings", href: "/dashboard/settings", emoji: "⚙" },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col hidden xl:flex w-[300px] min-h-screen bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 sticky top-0">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-cyan-400 mb-12"
      >
        Commune Bridge
      </motion.h1>

      <div className="flex flex-col gap-4">

        {links.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >

            <Link
              href={link.href}
              className="flex items-center gap-4 bg-zinc-900/70 hover:bg-cyan-500 hover:text-black transition-all duration-300 px-5 py-4 rounded-2xl border border-zinc-800 text-lg font-medium hover:translate-x-2"
            >
              <span className="text-2xl">
                {link.emoji}
              </span>

              {link.name}
            </Link>

          </motion.div>
        ))}

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-auto bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl p-6 shadow-2xl"
      >

        <h2 className="text-2xl font-bold mb-3">
          Smart Community AI
        </h2>

        <p className="text-gray-100 leading-relaxed">
          AI-powered accessibility, emergency response,
          navigation and communication ecosystem.
        </p>

      </motion.div>

    </aside>
  );
}