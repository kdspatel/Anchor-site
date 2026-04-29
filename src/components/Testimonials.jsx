"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import LeftReactions from "./LeftReactions";
import RightReactions from "./RightReactions";

const testimonials = [
  {
    text: "lorem sample text for testimonial section.",
    name: "abc",
    role: "Wedding Client",
    rating: 5,
  },
  {
    text: "lorem sample text for testimonial section.",
    name: "xyz",
    role: "Corporate Event",
    rating: 5,
  },
  {
    text: "lorem sample text for testimonial section.",
    name: "pqr",
    role: "Production Team",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const duration = 3200;

  // 🔥 START INTERVAL FUNCTION
  const startAuto = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, duration);
  };

  // 🔥 AUTO RUN
  useEffect(() => {
    if (!paused) {
      startAuto();
    }

    return () => clearInterval(intervalRef.current);
  }, [paused]);

  // ⏸ PAUSE
  const handleEnter = () => {
    setPaused(true);
    clearInterval(intervalRef.current);
  };

  // ▶ RESUME INSTANTLY
  const handleLeave = () => {
    setPaused(false);

    // 🔥 instantly move to next (no waiting)
    setActive((prev) => (prev + 1) % testimonials.length);

    // restart interval immediately
    startAuto();
  };

  // 👆 MANUAL NAV
  const handleManual = (index) => {
    setActive(index);
    startAuto(); // reset timing
  };

  return (
    <section
      className="relative h-screen bg-[#050505] flex items-center justify-center overflow-hidden"
      id="testimonials"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* 💥 REACTIONS */}
      <LeftReactions />
      <RightReactions />

      {/* ✨ BIG FADED QUOTE */}
      <div className="absolute text-[200px] md:text-[300px] text-white/5 font-serif top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        “
      </div>

      {/* 🌫 GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#C8A96A]/10 blur-[120px] rounded-full" />

      {/* TITLE */}
      <div className="absolute top-16 text-center z-20">
        <p className="text-xs tracking-[4px] text-gray-500">
          CLIENT WORDS
        </p>
        <h2 className="text-3xl md:text-5xl text-white mt-2">
          Testimonials
        </h2>
      </div>

      {/* 🧠 CONTENT */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-2xl md:text-4xl text-white leading-snug font-light">
              “{testimonials[active].text}”
            </p>

            {/* ⭐ STARS */}
            <div className="mt-6 flex justify-center gap-1 text-[#C8A96A]">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                >
                  ★
                </motion.span>
              ))}
            </div>

            {/* 👤 NAME */}
            <div className="mt-6 inline-block px-6 py-3 rounded-full
              bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-white text-sm">
                {testimonials[active].name}
              </p>
              <p className="text-gray-500 text-xs">
                {testimonials[active].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOT NAV */}
      <div className="absolute bottom-16 flex gap-3 z-20">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleManual(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === active
                ? "bg-[#C8A96A] scale-125"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}