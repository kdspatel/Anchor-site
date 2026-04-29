import { motion } from "framer-motion";

export default function RightReactions() {
  const reactions = [
    "😍 Loved it!",
    "🎤 Amazing energy!",
    "🔥 What a performance!",
  ];

  return (
    <div className="absolute right-0 top-0 h-full w-1/4 pointer-events-none">
      {reactions.map((text, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 40, y: 50 }}
          animate={{ opacity: [0, 1, 0], x: [0, -20, 0], y: [50, -80] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i }}
          className="absolute text-yellow-400 text-sm opacity-60 text-right"
          style={{ right: 0, top: `${20 + i * 25}%` }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}