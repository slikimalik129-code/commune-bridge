"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full glass z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          COMMUNE Bridge
        </h1>

        <div className="flex items-center gap-6">
          <a href="#features">Features</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#accessibility">Accessibility</a>

<a
  href="/login"
  className="px-5 py-3 bg-cyan-400 text-black rounded-2xl font-bold hover:scale-105 transition duration-300"
>
  Login
</a>

          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}