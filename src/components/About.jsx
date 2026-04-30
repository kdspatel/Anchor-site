"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center px-6 py-28 overflow-hidden" id="about">

      {/* ✨ Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

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
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* 🖼️ LEFT - BIG IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center md:justify-start"
        >
          {/* Glow */}
          <div className="absolute w-[400px] h-[400px] bg-yellow-500/20 blur-[140px] rounded-full" />

          <img
            src="/images/about.png"
            alt="Vaishnavi Panchal"
            className="relative w-[320px] md:w-[420px] lg:w-[480px] rounded-3xl object-cover border border-white/10 shadow-2xl"
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
          <p className="text-xs tracking-[0.35em] text-yellow-500 mb-4">
            ABOUT
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The Voice Behind <br />
            <span className="text-yellow-500">The Energy</span>
          </h2>

          {/* Hook */}
          <p className="text-white/80 text-lg mb-5">
            I don’t just host events — I create moments people remember.
          </p>

          {/* Points */}
          <div className="space-y-3 text-white/60">
            <p>• Weddings that feel emotional, not scripted</p>
            <p>• Corporate events that never feel boring</p>
            <p>• Crowds that don’t just watch… they react</p>
          </div>

          {/* Signature */}
          <p className="mt-6 text-yellow-500 font-medium">
            Hi, I’m Vaishnavi — and I turn silence into energy.
          </p>

          {/* 📸 Socials */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/anchor_vaishnavi_shilwant?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-yellow-500/10 hover:shadow-[0_0_20px_rgba(234,179,8,0.25)] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>

              <span className="text-sm text-white/70 group-hover:text-white transition">
                @anchor_vaishnavi_shilwant
              </span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@anchor_vaishnavi_shilwant"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-yellow-500/10 hover:shadow-[0_0_20px_rgba(234,179,8,0.25)] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition"
              >
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.1 5 12 5 12 5h0s-4.1 0-6.9.1c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.2 6.6.2 6.6.2s4.1 0 6.9-.1c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22 9.6 21.8 8 21.8 8zM9.8 14.6V9.4l5.2 2.6-5.2 2.6z" />
              </svg>

              <span className="text-sm text-white/70 group-hover:text-white transition">
                YouTube
              </span>
            </a>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-10 justify-center md:justify-start">
            {[
              { label: "Events Hosted", value: "100+" },
              { label: "Audience Engaged", value: "10K+" },
              { label: "Energy Level", value: "100%" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-yellow-500">
                  {item.value}
                </p>
                <p className="text-xs text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-10 text-white/5 text-4xl md:text-6xl font-bold tracking-widest select-none">
        ENERGY • MOMENTS • CROWD
      </div>
    </section>
  );
}