"use client";

import { useEffect, useState } from "react";

type Particle = {
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
};

export default function ParticleBackground() {

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {

    const generatedParticles = Array.from({ length: 40 }).map(() => ({
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
    }));

    setParticles(generatedParticles);

  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {particles.map((particle, index) => (

        <div
          key={index}
          className="absolute rounded-full bg-cyan-400/30 animate-pulse"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />

      ))}

    </div>
  );
}