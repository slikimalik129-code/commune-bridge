"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const services = [
    {
      title: "AI Assistant",
      description: "Smart multilingual AI communication.",
      link: "/dashboard/assistant",
      emoji: "🤖",
    },
    {
      title: "Ride Services",
      description: "Request rides with smart live maps.",
      link: "/dashboard/ride",
      emoji: "🚖",
    },
    {
      title: "Food Delivery",
      description: "Order food from local restaurants.",
      link: "/dashboard/food",
      emoji: "🍔",
    },
    {
      title: "Rentals",
      description: "Find houses and apartments nearby.",
      link: "/dashboard/rentals",
      emoji: "🏘",
    },
    {
      title: "Emergency",
      description: "Emergency SOS and smart response.",
      link: "/dashboard/emergency",
      emoji: "🚨",
    },
    {
      title: "Accessibility",
      description: "Accessibility communication systems.",
      link: "/dashboard/accessibility",
      emoji: "♿",
    },
    {
      title: "Translation",
      description: "Real-time multilingual translation.",
      link: "/dashboard/translation",
      emoji: "🌍",
    },
    {
      title: "Marketplace",
      description: "Smart accessibility marketplace.",
      link: "/dashboard/shopping",
      emoji: "🛒",
    },
  ];

  return (
    <main className="min-h-screen text-white overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 lg:px-6 md:px-10 py-20">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-700/10 to-indigo-900/20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-400 mb-8">
              Smart Community Ecosystem
            </div>

            <h1 className="text-4xl md:text-6xl md:text-8xl font-extrabold leading-tight mb-8">
              Commune
              <span className="text-cyan-400"> Bridge</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl">
              AI-powered accessibility, emergency response,
              communication, transportation, food delivery,
              rentals and smart-city services unified into
              one intelligent platform.
            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                href="/dashboard/assistant"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl text-lg font-bold text-black"
              >
                Launch AI Assistant
              </Link>

              <Link
                href="/dashboard/emergency"
                className="bg-red-600 hover:bg-red-500 transition px-8 py-4 rounded-2xl text-lg font-bold"
              >
                Emergency SOS
              </Link>

            </div>

          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block"
          >

            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              alt="Smart City"
              className="rounded-[40px] shadow-2xl border border-white/10"
            />

          </motion.div>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-6 md:px-10 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {[
            {
              value: "12K+",
              label: "Connected Users",
            },
            {
              value: "80+",
              label: "Languages Supported",
            },
            {
              value: "24/7",
              label: "Emergency Response",
            },
            {
              value: "GPS",
              label: "Smart Navigation",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
            >

              <h2 className="text-5xl font-extrabold text-cyan-400 mb-4">
                {stat.value}
              </h2>

              <p className="text-gray-300 text-lg">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-6 md:px-10 pb-24">

        <div className="mb-12">

          <h2 className="text-5xl font-extrabold mb-3">
            Smart Services
          </h2>

          <p className="text-gray-400 text-lg">
            Integrated AI-powered ecosystem
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >

              <Link
                href={service.link}
                className="group block bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-2xl h-full"
              >

                <div className="text-4xl md:text-6xl mb-7">
                  {service.emoji}
                </div>

                <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.description}
                </p>

              </Link>

            </motion.div>
          ))}

        </div>

      </section>

      {/* SMART MAP */}
      <section className="max-w-7xl mx-auto px-6 lg:px-6 md:px-10 pb-24">

        <div className="mb-10">

          <h2 className="text-5xl font-extrabold mb-3">
            Smart Community Map
          </h2>

          <p className="text-gray-400 text-lg">
            Real-time navigation and smart location system
          </p>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl"
        >

          <div className="h-[500px] relative">

            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
              alt="Map"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="text-center">

                <div className="w-10 h-10 bg-cyan-500 rounded-full animate-ping mx-auto mb-5"></div>

                <h3 className="text-4xl font-extrabold">
                  Live Smart Navigation
                </h3>

              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* LIVE ACTIVITY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-6 md:px-10 pb-24">

        <div className="mb-10">

          <h2 className="text-5xl font-extrabold mb-3">
            Live Activity
          </h2>

          <p className="text-gray-400 text-lg">
            Real-time smart ecosystem updates
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7">

            <div className="flex items-center gap-4 mb-5">

              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>

              <h3 className="text-2xl font-bold">
                Ride Request
              </h3>

            </div>

            <p className="text-gray-400 text-lg">
              Driver assigned in Mbabane.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7">

            <div className="flex items-center gap-4 mb-5">

              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>

              <h3 className="text-2xl font-bold">
                Emergency Alert
              </h3>

            </div>

            <p className="text-gray-400 text-lg">
              Emergency services dispatched.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7">

            <div className="flex items-center gap-4 mb-5">

              <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>

              <h3 className="text-2xl font-bold">
                AI Translation
              </h3>

            </div>

            <p className="text-gray-400 text-lg">
              Live multilingual translation active.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-6 md:px-10 pb-20">

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[40px] p-12 shadow-2xl">

          <h2 className="text-5xl font-extrabold mb-6">
            Future Of Smart Communities
          </h2>

          <p className="text-xl text-gray-100 max-w-4xl leading-relaxed mb-10">
            Commune Bridge combines accessibility,
            emergency systems, AI communication,
            transportation, housing and smart services
            into one revolutionary ecosystem.
          </p>

          <div className="flex flex-wrap gap-5">

            <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold">
              Explore Platform
            </button>

            <button className="bg-black/30 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl text-lg font-bold">
              Watch Demo
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}