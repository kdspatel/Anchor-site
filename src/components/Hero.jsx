"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen bg-[#050505] relative overflow-hidden flex items-center justify-center"
      id="/"
    >
      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-[#C8A96A] rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: -120, opacity: [0, 1, 0] }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* 🌟 STRONG GOLD BACK GLOW (UNCHANGED) */}
      <div className="absolute w-[500px] h-[500px] bg-[#C8A96A]/15 blur-[120px] rounded-full" />

      {/* 🎤 MIC (ONLY CHANGE: hidden on small screens) */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -25 }}
        animate={{ opacity: 1, x: 0, rotate: -12 }}
        transition={{ duration: 1 }}
        className="
          hidden sm:block
          absolute 
          left-[8%] md:left-[26%]
          top-[40%]
          -translate-y-1/2
          z-10
        "
      >
        {/* ✨ MIC GLOW (UNCHANGED) */}
        <div className="absolute inset-0 blur-[28px] bg-[#C8A96A]/12 rounded-full scale-100" />

        <motion.img
          src="/images/mic.png"
          alt="mic"
          className="w-[140px] md:w-[200px]"
          animate={{
            y: [0, -12, 0],
            rotate: [-12, -8, -12],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* 🎭 CONTENT (UNCHANGED) */}
      <div className="relative z-20 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xs tracking-[6px] text-gray-500 mb-6"
        >
          EVENT HOST
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[52px] md:text-[100px] font-bold text-white leading-none"
        >
          VAISHNAVI
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-[52px] md:text-[100px] font-bold text-[#C8A96A] leading-none"
        >
          PANCHAL
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-[2px] bg-[#C8A96A] mx-auto mt-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-gray-400 text-lg"
        >
          Wedding • Corporate • Live Shows
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          onClick={() => {
            document.getElementById("booking")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="mt-10 px-10 py-4 rounded-full
          bg-[#C8A96A] text-black font-medium
          shadow-[0_20px_80px_rgba(200,169,106,0.5)]"
        >
          Book Now
        </motion.button>
      </div>

      {/* 🌑 VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.9))]" />
    </section>
  );
}
