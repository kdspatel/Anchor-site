"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const reels = [
  { src: "/videos/reels1.mp4" },
  { src: "/videos/reels2.mp4" },
  { src: "/videos/reels3.mp4" },
  { src: "/videos/reels4.mp4" },
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
    <section className="relative h-screen bg-[#050505] overflow-hidden flex items-center justify-center" id="reels">

      {/* 🔥 BACKGROUND MARQUEE (CENTERED LOWER) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="whitespace-nowrap flex translate-y-[80px] md:translate-y-[120px]"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {[...Array(10)].map((_, j) => (
                <span
                  key={j}
                  className="text-[120px] md:text-[180px] font-bold mx-10
                  text-white/5 tracking-widest select-none"
                >
                  REELS
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* TITLE */}
      <div className="absolute top-14 text-center z-20">
        <p className="text-xs tracking-[4px] text-gray-500">
          SOCIAL PRESENCE
        </p>
        <h2 className="text-3xl md:text-5xl text-[#C8A96A] mt-2">
          Reels That Perform
        </h2>
      </div>

      {/* 🎬 REELS ROW */}
      <div className="relative z-10 flex items-center justify-center gap-8">

        {/* LEFT */}
        <div className="w-[200px] h-[360px] rounded-3xl overflow-hidden blur-[1px] scale-90 opacity-50 rotate-[-8deg]">
          <video
            src={reels[leftIndex].src}
            autoPlay
            muted
            loop
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
              className="w-[260px] h-[440px] rounded-3xl overflow-hidden
              shadow-[0_40px_120px_rgba(0,0,0,0.9)] z-20 cursor-pointer group"
              onClick={() => setActiveVideo(reels[index].src)}
            >
              <video
                src={reels[index].src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              {/* PLAY */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center">
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
                  className={`absolute text-xl ${
                    r.side === "right" ? "right-[-30px]" : "left-[-30px]"
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
        <div className="w-[200px] h-[360px] rounded-3xl overflow-hidden blur-[1px] scale-90 opacity-50 rotate-[8deg]">
          <video
            src={reels[rightIndex].src}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ⬅️➡️ NAV BUTTONS */}
      <div className="absolute bottom-16 flex gap-6 z-20">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md
          border border-white/20 text-white text-xl hover:scale-110 transition"
        >
          ←
        </button>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md
          border border-white/20 text-white text-xl hover:scale-110 transition"
        >
          →
        </button>
      </div>

      {/* 🎥 MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <video
              src={activeVideo}
              controls
              autoPlay
              className="max-w-[90%] max-h-[90%] rounded-xl"
            />

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}