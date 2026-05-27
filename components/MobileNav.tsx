"use client";

import Link from "next/link";

export default function MobileNav() {

  return (

    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-xl md:hidden">

      <div className="backdrop-blur-xl bg-black/70 border border-white/10 rounded-3xl p-4">

        <div className="flex justify-between text-sm">

          <Link href="/dashboard">Home</Link>

          <Link href="/dashboard/rides">Rides</Link>

          <Link href="/dashboard/food">Food</Link>

          <Link href="/dashboard/shopping">Shop</Link>

          <Link href="/dashboard/assistant">AI</Link>

        </div>

      </div>

    </div>
  );
}