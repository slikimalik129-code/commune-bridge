"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setMessage("Login successful!");
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <main className="min-h-screen hero-bg flex items-center justify-center px-6">

      <div className="glass w-full max-w-md rounded-3xl p-6 md:p-10">

        <h1 className="text-5xl font-black text-cyan-400 text-center">
          Login
        </h1>

        <p className="text-center text-gray-400 mt-4 mb-10">
          Access COMMUNE Bridge
        </p>

        <div className="space-y-6">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full py-4 bg-cyan-400 text-black rounded-2xl font-bold hover:scale-105 transition duration-300"
          >
            Sign In
          </button>

        </div>

        {message && (
          <p className="mt-6 text-center text-sm text-cyan-400">
            {message}
          </p>
        )}

        <p className="mt-8 text-center text-gray-400">
          No account?
          <a
            href="/register"
            className="text-cyan-400 ml-2"
          >
            Register
          </a>
        </p>

      </div>

    </main>
  );
}
