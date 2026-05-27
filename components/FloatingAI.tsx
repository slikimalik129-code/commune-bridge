"use client";

import Link from "next/link";
import { Bot } from "lucide-react";

export default function FloatingAI() {

  return (

    <Link
      href="/dashboard/assistant"
      className="fixed bottom-24 right-6 z-50"
    >

      <div className="w-20 h-20 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 animate-pulse">

        <Bot size={34} />

      </div>

    </Link>

  );
}