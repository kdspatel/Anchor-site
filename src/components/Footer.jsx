"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow = useTransform(scrollYProgress, [0, 1], [0.1, 0.4]);

  return (
    <footer
      ref={ref}
      className="relative bg-[#050505] text-white overflow-hidden pt-24 md:pt-32 pb-10 px-5 md:px-6 cursor-default select-none"
    >
      {/* ✨ TOP LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-30 pointer-events-none" />

      {/* ✨ GLOW */}
      <motion.div
        style={{ opacity: glow }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[700px] h-[200px] md:h-[250px] bg-yellow-500 blur-[140px] md:blur-[160px] rounded-full pointer-events-none"
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10 md:gap-14 relative z-10">
        {/* 🔥 HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug md:leading-tight pointer-events-none"
        >
          Every Event Has a Moment{" "}
          <span className="text-yellow-500">
            I Make It Unforgettable.
          </span>
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base max-w-md md:max-w-xl pointer-events-none"
        >
          From weddings to corporate stages — the energy, the emotion,
          the experience — all crafted to leave a lasting impact.
        </motion.p>

        {/* 🔥 BUTTON */}
        <motion.a
          href="#booking"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-10 py-4 rounded-full bg-yellow-500 text-black font-semibold text-base md:text-lg overflow-hidden group cursor-pointer"
          style={{ cursor: "pointer" }}
          draggable={false}
        >
          <span className="relative z-10 pointer-events-none">
            Book Your Experience
          </span>

          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 blur-md transition duration-500 pointer-events-none" />
        </motion.a>

        {/* ✨ BIG FADED NAME */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden md:block text-6xl lg:text-8xl font-bold tracking-widest absolute bottom-12 pointer-events-none"
        >
          VAISHNAVI PANCHAL
        </motion.h3>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 mt-10 md:mt-16 pointer-events-none" />

        {/* COPYRIGHT */}
        <p className="text-[10px] sm:text-xs text-gray-500 pointer-events-none">
          © {new Date().getFullYear()} Vaishnavi Panchal. Designed to perform.
        </p>
      </div>
    </footer>
  );
}