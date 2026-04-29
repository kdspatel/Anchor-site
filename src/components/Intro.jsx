// import { motion } from "framer-motion";

// export default function Intro({ onEnter }) {
//   return (
//     <div className="h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden">

//       {/* TOP MOVING TEXT */}
//       <div className="w-full overflow-hidden whitespace-nowrap">
//         <motion.div
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//           className="text-[8vw] font-bold uppercase"
//         >
//           Vaishnavi Panchal — Event Anchor — Host — Cho — 
//         </motion.div>
//       </div>

//       {/* CENTER TEXT */}
//       <motion.h1
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="text-4xl md:text-6xl font-semibold mt-10 text-center"
//       >
//         Crafting Unforgettable Experiences
//       </motion.h1>

//       {/* BOTTOM MOVING TEXT (reverse) */}
//       <div className="w-full overflow-hidden whitespace-nowrap mt-10">
//         <motion.div
//           animate={{ x: ["-100%", "0%"] }}
//           transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//           className="text-[8vw] font-bold uppercase opacity-20"
//         >
//           Live • Energy • Stage • Crowd • Celebration • 
//         </motion.div>
//       </div>

//       {/* ENTER BUTTON */}
//       <motion.button
//         onClick={onEnter}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         whileHover={{ scale: 1.05 }}
//         className="mt-12 border border-white px-8 py-3 hover:bg-white hover:text-black transition"
//       >
//         Enter
//       </motion.button>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function Intro({ onEnter }) {
  return (
    <div className="h-screen bg-[#050505] text-white flex items-center justify-center relative overflow-hidden">

      {/* 🔝 TOP MARQUEE */}
      <div className="absolute top-0 w-full overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="whitespace-nowrap text-[18vw] font-bold opacity-[0.05]"
        >
          LIVE EXPERIENCE • LIVE EXPERIENCE • LIVE EXPERIENCE •
        </motion.div>
      </div>

      {/* 🔻 BOTTOM MARQUEE */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          className="whitespace-nowrap text-[18vw] font-bold opacity-[0.05]"
        >
          ENERGY • CROWD • STAGE • ENERGY • CROWD • STAGE •
        </motion.div>
      </div>

      {/* ✨ CENTER CONTENT (NOW CLEAN) */}
      <div className="text-center z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold leading-tight"
        >
          This isn’t just an event.
          <br />
          <span className="text-yellow-400">It’s a presence.</span>
        </motion.h1>

        <motion.button
          onClick={onEnter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-8 py-3 border border-white/30 rounded-full hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition"
        >
          Enter
        </motion.button>
      </div>

      {/* ✨ SUBTLE GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full" />
    </div>
  );
}