// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useRef, useEffect } from "react";

// const cards = [
//   {
//     title: "Event Anchoring",
//     desc: "Delivers energetic and engaging hosting that keeps every audience hooked.",
//     color: "linear-gradient(135deg, #3E1F16, #7A3E2B)",
//   },
//   {
//     title: "Wedding Hosting",
//     desc: "Elegant storytelling that turns your special day unforgettable.",
//     color: "linear-gradient(135deg, #5A2E1F, #A65F3B)",
//   },
//   {
//     title: "Corporate Events",
//     desc: "Professional and impactful presence tailored for brands.",
//     color: "linear-gradient(135deg, #2B1612, #5C2C1E)",
//   },
// ];

// export default function ServicesScrollCards() {
//   const [index, setIndex] = useState(0);
//   const isAnimating = useRef(false);
//   const sectionRef = useRef(null);

//   const [rotate, setRotate] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const midX = rect.width / 2;
//     const midY = rect.height / 2;

//     const rotateY = ((x - midX) / midX) * 8;
//     const rotateX = -((y - midY) / midY) * 8;

//     setRotate({ x: rotateX, y: rotateY });
//   };

//   const handleMouseLeave = () => {
//     setRotate({ x: 0, y: 0 });
//   };

//   useEffect(() => {
//     const section = sectionRef.current;

//     const handleWheel = (e) => {
//       const atTop = index === 0;
//       const atBottom = index === cards.length - 1;

//       if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) return;

//       e.preventDefault();

//       if (isAnimating.current) return;
//       isAnimating.current = true;

//       if (e.deltaY > 0) {
//         setIndex((prev) => Math.min(prev + 1, cards.length - 1));
//       } else {
//         setIndex((prev) => Math.max(prev - 1, 0));
//       }

//       setTimeout(() => {
//         isAnimating.current = false;
//       }, 700);
//     };

//     section.addEventListener("wheel", handleWheel, { passive: false });
//     return () => section.removeEventListener("wheel", handleWheel);
//   }, [index]);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen relative overflow-hidden"
//       style={{ background: "#0a0a0b" }}
//     >
//       {/* 🔥 BACKGROUND GLOW */}
//       <div className="absolute inset-0 z-0 pointer-events-none
//         bg-[radial-gradient(circle_at_20%_40%,rgba(200,169,106,0.25),transparent_45%),
//              radial-gradient(circle_at_80%_60%,rgba(200,169,106,0.15),transparent_50%),
//              radial-gradient(circle_at_center,rgba(0,0,0,0.4),rgba(0,0,0,0.95))]"
//       />

//       {/* ✨ PARTICLES (BOTTOM) */}
// <div className="absolute bottom-0 left-0 w-full h-[260px] overflow-hidden z-0 pointer-events-none">

//   {[...Array(28)].map((_, i) => {
//     const size = Math.random() * 6 + 4; // 🔥 bigger particles

//     return (
//       <motion.div
//         key={i}
//         className="absolute rounded-full"
//         style={{
//           width: size,
//           height: size,
//           left: `${Math.random() * 100}%`,
//           background: "rgba(255, 215, 140, 0.9)", // 💡 brighter gold
//           boxShadow: "0 0 12px rgba(255, 215, 140, 0.8)", // ✨ glow
//         }}
//         initial={{
//           y: 260,
//           opacity: 0,
//           scale: 0.8,
//         }}
//         animate={{
//           y: -40,
//           opacity: [0, 0.9, 0],
//           scale: [0.8, 1.2, 0.9],
//         }}
//         transition={{
//           duration: 7 + Math.random() * 4, // ⏱ smoother
//           repeat: Infinity,
//           delay: Math.random() * 6,
//           ease: "easeOut",
//         }}
//       />
//     );
//   })}

// </div>
//       <div className="relative z-10 h-full flex flex-col items-center justify-center px-5">

//         {/* TITLE */}
//         <div className="absolute top-10 text-center">
//           <h3 className="tracking-[3px] text-xs text-[#F5EFE7]/70 mb-2">
//             SERVICES
//           </h3>
//           <h1 className="text-[clamp(28px,5vw,42px)] text-[#C8A96A]">
//             What I Do
//           </h1>
//         </div>

//         {/* CONTENT */}
//         <div className="responsive-container flex items-center justify-center gap-10 w-full max-w-5xl">

//           {/* CARD */}
//           <div
//             className="relative w-full max-w-[400px] h-[260px]"
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//           >
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={index}
//                 initial={{ y: 200, rotate: -10, opacity: 0, scale: 0.9 }}
//                 animate={{
//                   y: 0,
//                   rotate: 0,
//                   opacity: 1,
//                   scale: 1,
//                   rotateX: rotate.x,
//                   rotateY: rotate.y,
//                 }}
//                 exit={{ y: -200, rotate: 10, opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.6 }}
//                 className="absolute w-full h-full rounded-3xl"
//                 style={{
//                   background: cards[index].color,
//                   boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
//                   transformStyle: "preserve-3d",
//                 }}
//               />
//             </AnimatePresence>
//           </div>

//           {/* TEXT */}
//           <div className="w-full max-w-[400px]">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -30 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h1 className="text-[clamp(26px,4vw,40px)] mb-3 text-[#F5EFE7]">
//                   {cards[index].title}
//                 </h1>

//                 <p className="text-[clamp(14px,2.5vw,18px)] leading-relaxed text-[#C8A96A]/90">
//                   {cards[index].desc}
//                 </p>

//                 <div className="mt-4 text-[#C8A96A]/60 text-sm tracking-wide">
//                   Vaishnavi Panchal
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE */}
//       <style>
//         {`
//         @media (max-width: 768px) {
//           .responsive-container {
//             flex-direction: column !important;
//             gap: 30px !important;
//           }
//         }
//         `}
//       </style>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "Event Anchoring",
    desc: "Lorem100 Delivers energetic and engaging hosting that keeps every audience hooked.",
  },
  {
    title: "Wedding Hosting",
    desc: "Lorem100 Delivers elegant storytelling that makes your big day unforgettable.",
  },
  {
    title: "Corporate Events",
    desc: "Lorem100 Delivers professional presence crafted for impactful brand moments.",
  },
];

export default function ServicesShowcase() {
  const [active, setActive] = useState(1);
  const isAnimating = useRef(false);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // 👀 detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.6 } // 60% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // 🎯 controlled scroll
  useEffect(() => {
    const handleWheel = (e) => {
      if (!inView) return;

      const atStart = active === 0;
      const atEnd = active === services.length - 1;

      // allow page scroll when finished
      if ((atStart && e.deltaY < 0) || (atEnd && e.deltaY > 0)) {
        return;
      }

      e.preventDefault(); // 🔥 lock page scroll

      if (isAnimating.current) return;
      isAnimating.current = true;

      if (e.deltaY > 0) {
        setActive((prev) => Math.min(prev + 1, services.length - 1));
      } else {
        setActive((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isAnimating.current = false;
      }, 900); // 🐢 slower control
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [active, inView]);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden"
      id="services"
    >
      {/* TITLE */}
      <div className="absolute top-16 text-center">
        <p className="text-xs tracking-[4px] text-gray-500">SERVICES</p>
        <h1 className="text-3xl md:text-5xl text-[#C8A96A] mt-2">
          What I Do
        </h1>
      </div>

      {/* PANELS */}
      <div className="relative w-full max-w-6xl h-[420px] flex items-center justify-center">
        {services.map((item, i) => {
          const isActive = i === active;

          return (
            <motion.div
              key={i}
              animate={{
                x: (i - active) * 320,
                scale: isActive ? 1 : 0.8,
                opacity: isActive ? 1 : 0.3,
                zIndex: isActive ? 10 : 1,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-[320px] md:w-[360px] h-[360px] rounded-[30px]
              bg-[#111111] border border-white/10
              shadow-[0_30px_100px_rgba(0,0,0,0.8)]
              flex items-center justify-center text-center px-6"
            >
              {/* GOLD ACCENT */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C8A96A]/70" />

              {/* CONTENT */}
              <div>
                <h2 className="text-xl md:text-2xl text-white mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ✨ PARTICLES */}
      <div className="absolute bottom-0 w-full h-[220px] pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#C8A96A] rounded-full"
            style={{
              width: 5,
              height: 5,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ y: 220, opacity: 0 }}
            animate={{ y: -30, opacity: [0, 1, 0] }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}