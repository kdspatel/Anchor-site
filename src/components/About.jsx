"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center px-4 sm:px-6 md:px-10 py-20 md:py-28 overflow-hidden" id="about">

      {/* ✨ Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-yellow-500/10 blur-[120px] md:blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* ✨ Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-yellow-400/40 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* MAIN */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* 🖼️ LEFT - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center md:justify-start"
        >
          {/* Glow */}
          <div className="absolute w-[250px] sm:w-[320px] md:w-[400px] h-[250px] sm:h-[320px] md:h-[400px] bg-yellow-500/20 blur-[100px] md:blur-[140px] rounded-full" />

          <img
            src="/images/VP.png"
            alt="Vaishnavi Panchal"
            className="relative w-[240px] sm:w-[300px] md:w-[380px] lg:w-[480px] rounded-3xl object-cover border border-white/10 shadow-2xl"
          />
        </motion.div>

        {/* 📝 RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left"
        >
          {/* Tag */}
          <p className="text-[10px] sm:text-xs tracking-[0.35em] text-yellow-500 mb-3 sm:mb-4">
            ABOUT
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 md:mb-6">
            The Voice Behind <br />
            <span className="text-yellow-500">The Energy</span>
          </h2>

          {/* Hook */}
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-4 md:mb-5">
            I don’t just host events — I create moments people remember.
          </p>

          {/* Points */}
          <div className="space-y-2 sm:space-y-3 text-white/60 text-sm sm:text-base">
            <p>• Weddings that feel emotional, not scripted</p>
            <p>• Corporate events that never feel boring</p>
            <p>• Crowds that don’t just watch… they react</p>
          </div>

          {/* Signature */}
          <p className="mt-5 md:mt-6 text-yellow-500 font-medium text-sm sm:text-base">
            Hi, I’m Vaishnavi — and I turn silence into energy.
          </p>

          {/* 📸 Instagram */}
          <div className="mt-5 md:mt-6 flex justify-center md:justify-start">
            <a
              href="https://instagram.com/anchor_vaishnavi_panchal"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-yellow-500/10 hover:shadow-[0_0_20px_rgba(234,179,8,0.25)] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 group-hover:scale-110 transition"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>

              <span className="text-xs sm:text-sm text-white/70 group-hover:text-white transition">
                @anchor_vaishnavi_panchal
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-8 mt-8 md:mt-10 justify-center md:justify-start">
            {[
              { label: "Events Hosted", value: "100+" },
              { label: "Audience Engaged", value: "10K+" },
              { label: "Energy Level", value: "100%" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-yellow-500">
                  {item.value}
                </p>
                <p className="text-[10px] sm:text-xs text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-6 md:bottom-10 text-white/5 text-2xl sm:text-3xl md:text-6xl font-bold tracking-widest select-none text-center w-full">
        ENERGY • MOMENTS • CROWD
      </div>
    </section>
  );
}