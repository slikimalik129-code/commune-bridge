"use client";

import { useState } from "react";

export default function AIChat() {

  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hello. COMMUNE AI systems are online. How may I assist you today?",
    },
  ]);

  const [input, setInput] = useState("");

 const sendMessage = async () => {

  if (!input.trim()) return;

  const userMessage = {
    sender: "User",
    text: input,
  };

  setMessages((prev) => [...prev, userMessage]);

  const currentInput = input;

  setInput("");

  try {

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: currentInput,
      }),
    });

    const data = await response.json();

    setMessages((prev) => [
      ...prev,
      {
        sender: "AI",
        text: data.reply,
      },
    ]);

  } catch (error) {

    setMessages((prev) => [
      ...prev,
      {
        sender: "AI",
        text: "AI connection failed.",
      },
    ]);

  }
};
  return (
    <div className="glass rounded-3xl p-8 mt-12">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-black text-cyan-400">
          AI Communication Assistant
        </h2>

        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          <span>Online</span>
        </div>

      </div>

      <div className="h-[300px] sm:h-[400px] overflow-y-auto space-y-6 pr-2 sm:pr-4">

        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 sm:p-5 rounded-2xl max-w-[95%] sm:max-w-[80%] ${
              message.sender === "AI"
                ? "bg-cyan-400/10 border border-cyan-400/20"
                : "bg-white/10 ml-auto"
            }`}
          >
            <p className="text-sm text-cyan-400 mb-2">
              {message.sender}
            </p>

            <p>{message.text}</p>
          </div>
        ))}

      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">

        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
        />

        <button
          onClick={sendMessage}
          className="px-8 py-4 bg-cyan-400 text-black rounded-2xl font-bold hover:scale-105 transition duration-300"
        >
          Send
        </button>

      </div>

    </div>
  );
}