"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Reels", link: "#reels" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Booking", link: "#booking" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      
      {/* 🔥 MAIN BAR */}
      <div
        className="flex justify-between items-center px-6 py-3 rounded-2xl 
        bg-[#111111]/80 backdrop-blur-xl border border-[#C8A96A]/20 
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
      >
        
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-widest text-[#F5EFE7]">
          VP
        </h1>

        {/* 💻 DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="relative group text-[#C8A96A] hover:text-[#F5EFE7] 
              transition duration-300 
              drop-shadow-[0_0_6px_rgba(200,169,106,0.4)]"
            >
              {item.name}

              {/* underline */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] 
                bg-[#C8A96A] transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
        </div>

        {/* 📱 Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#F5EFE7] text-2xl font-bold"
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-2 rounded-2xl overflow-hidden 
            bg-[#111111]/95 backdrop-blur-xl 
            border border-[#C8A96A]/20 
            shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-6 text-[#C8A96A] text-lg">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#F5EFE7] transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}