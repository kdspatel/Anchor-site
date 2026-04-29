// "use client";

// import { motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";

// const services = [
//   {
//     title: "Event Anchoring",
//     desc: "Lorem100 Delivers energetic and engaging hosting that keeps every audience hooked.",
//   },
//   {
//     title: "Wedding Hosting",
//     desc: "Lorem100 Delivers elegant storytelling that makes your big day unforgettable.",
//   },
//   {
//     title: "Corporate Events",
//     desc: "Lorem100 Delivers professional presence crafted for impactful brand moments.",
//   },
// ];

// export default function ServicesShowcase() {
//   const [active, setActive] = useState(1);
//   const isAnimating = useRef(false);
//   const sectionRef = useRef(null);
//   const [inView, setInView] = useState(false);

//   // 👀 detect when section is visible
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setInView(entry.isIntersecting);
//       },
//       { threshold: 0.6 } // 60% visible
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   // 🎯 controlled scroll
//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (!inView) return;

//       const atStart = active === 0;
//       const atEnd = active === services.length - 1;

//       // allow page scroll when finished
//       if ((atStart && e.deltaY < 0) || (atEnd && e.deltaY > 0)) {
//         return;
//       }

//       e.preventDefault(); // 🔥 lock page scroll

//       if (isAnimating.current) return;
//       isAnimating.current = true;

//       if (e.deltaY > 0) {
//         setActive((prev) => Math.min(prev + 1, services.length - 1));
//       } else {
//         setActive((prev) => Math.max(prev - 1, 0));
//       }

//       setTimeout(() => {
//         isAnimating.current = false;
//       }, 900); // 🐢 slower control
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [active, inView]);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden"
//       id="services"
//     >
//       {/* TITLE */}
//       <div className="absolute top-16 text-center">
//         <p className="text-xs tracking-[4px] text-gray-500">SERVICES</p>
//         <h1 className="text-3xl md:text-5xl text-[#C8A96A] mt-2">
//           What I Do
//         </h1>
//       </div>

//       {/* PANELS */}
//       <div className="relative w-full max-w-6xl h-[420px] flex items-center justify-center">
//         {services.map((item, i) => {
//           const isActive = i === active;

//           return (
//             <motion.div
//               key={i}
//               animate={{
//                 x: (i - active) * 320,
//                 scale: isActive ? 1 : 0.8,
//                 opacity: isActive ? 1 : 0.3,
//                 zIndex: isActive ? 10 : 1,
//               }}
//               transition={{ duration: 0.7, ease: "easeInOut" }}
//               className="absolute w-[320px] md:w-[360px] h-[360px] rounded-[30px]
//               bg-[#111111] border border-white/10
//               shadow-[0_30px_100px_rgba(0,0,0,0.8)]
//               flex items-center justify-center text-center px-6"
//             >
//               {/* GOLD ACCENT */}
//               <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C8A96A]/70" />

//               {/* CONTENT */}
//               <div>
//                 <h2 className="text-xl md:text-2xl text-white mb-3">
//                   {item.title}
//                 </h2>

//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* ✨ PARTICLES */}
//       <div className="absolute bottom-0 w-full h-[220px] pointer-events-none">
//         {[...Array(25)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-[#C8A96A] rounded-full"
//             style={{
//               width: 5,
//               height: 5,
//               left: `${Math.random() * 100}%`,
//             }}
//             initial={{ y: 220, opacity: 0 }}
//             animate={{ y: -30, opacity: [0, 1, 0] }}
//             transition={{
//               duration: 6 + Math.random() * 3,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//             }}
//           />
//         ))}
//       </div>
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

  // 🔁 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating.current) return;

      isAnimating.current = true;

      setActive((prev) =>
        prev === services.length - 1 ? 0 : prev + 1
      );

      setTimeout(() => {
        isAnimating.current = false;
      }, 700); // match your animation speed
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
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