"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const reels = [
  { src: "/videos/reel1.mp4" },
  { src: "/videos/reel2.mp4" },
  { src: "/videos/reel3.mp4" },
  { src: "/videos/reel4.mp4" },
];

export default function Reels() {
  const [index, setIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [reactions, setReactions] = useState([]);

  const prev = () => {
    setIndex((i) => (i === 0 ? reels.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === reels.length - 1 ? 0 : i + 1));
  };

  const leftIndex = index === 0 ? reels.length - 1 : index - 1;
  const rightIndex = index === reels.length - 1 ? 0 : index + 1;

  // 💥 POP REACTIONS
  useEffect(() => {
    const interval = setInterval(() => {
      const icons = ["❤️", "👍", "💬", "🔗"];
      const side = Math.random() > 0.5 ? "right" : "left";

      const newReaction = {
        id: Math.random(),
        icon: icons[Math.floor(Math.random() * icons.length)],
        side,
        y: 40 + Math.random() * 60,
      };

      setReactions((prev) => [...prev, newReaction]);

      setTimeout(() => {
        setReactions((prev) =>
          prev.filter((r) => r.id !== newReaction.id)
        );
      }, 1200);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center px-4 py-24"
      id="reels"
    >
      {/* 🔥 BACKGROUND MARQUEE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="whitespace-nowrap flex translate-y-[100px] sm:translate-y-[120px]"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {[...Array(10)].map((_, j) => (
                <span
                  key={j}
                  className="text-[70px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-bold mx-5 sm:mx-8 md:mx-10 text-white/5 tracking-widest select-none"
                >
                  REELS
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* TITLE */}
      <div className="absolute top-6 sm:top-10 md:top-12 text-center z-20 px-4">
        <p className="text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] text-gray-500">
          SOCIAL PRESENCE
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#C8A96A] mt-2">
          Reels That Perform
        </h2>
      </div>

      {/* 🎬 REELS ROW */}
      <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mt-20 sm:mt-24 md:mt-28">
        {/* LEFT */}
        <div className="hidden sm:block w-[140px] md:w-[180px] lg:w-[200px] h-[260px] md:h-[320px] lg:h-[360px] rounded-3xl overflow-hidden blur-[1px] scale-90 opacity-50 rotate-[-8deg]">
          <video
            src={reels[leftIndex].src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* CENTER */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -100, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative w-[240px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[420px] sm:h-[440px] md:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9)] z-20 cursor-pointer group"
              onClick={() => setActiveVideo(reels[index].src)}
            >
              <video
                src={reels[index].src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              {/* PLAY */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-black flex items-center justify-center text-lg">
                  ▶
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 💥 POP REACTIONS */}
          <div className="absolute inset-0 pointer-events-none">
            <AnimatePresence>
              {reactions.map((r) => (
                <motion.div
                  key={r.id}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute text-lg sm:text-xl ${
                    r.side === "right"
                      ? "right-[-20px] sm:right-[-30px]"
                      : "left-[-20px] sm:left-[-30px]"
                  }`}
                  style={{ top: `${r.y}%` }}
                >
                  {r.icon}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden sm:block w-[140px] md:w-[180px] lg:w-[200px] h-[260px] md:h-[320px] lg:h-[360px] rounded-3xl overflow-hidden blur-[1px] scale-90 opacity-50 rotate-[8deg]">
          <video
            src={reels[rightIndex].src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ⬅️➡️ NAV BUTTONS */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 flex gap-4 sm:gap-6 z-20">
        <button
          onClick={prev}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg sm:text-xl hover:scale-110 transition"
        >
          ←
        </button>

        <button
          onClick={next}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg sm:text-xl hover:scale-110 transition"
        >
          →
        </button>
      </div>

      {/* 🎥 MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full max-w-5xl max-h-[90vh] rounded-xl"
            />

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 text-white text-2xl sm:text-3xl"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}