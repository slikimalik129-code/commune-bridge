"use client";

export default function NotificationPanel() {
  const notifications = [
    "🚖 Driver arriving in 3 minutes",
    "🍔 Food order confirmed",
    "🚨 Emergency services nearby",
    "🌍 Translation completed",
  ];

  return (
    <div className="fixed top-6 right-6 z-40 w-[340px] space-y-4">

      {notifications.map((note, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-2xl animate-pulse"
        >
          {note}
        </div>
      ))}

    </div>
  );
}