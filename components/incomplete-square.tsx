"use client";
import { motion } from "motion/react";

export function IncompleteSquare({ className }: { className?: string }) {
  return (
    <motion.div
      className={`hidden md:block absolute w-5 h-5 lg:w-20 lg:h-20 border-2 border-foreground ${
        className || ""
      }`}
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        type: "spring" as const,
        stiffness: 120,
        damping: 10,
        delay: 1.5, // appears after the main content
      }}
    />
  );
}

// export function IncompleteSquare({ className }: { className?: string }) {
//   return (
//     <div
//       className={`hidden md:block absolute w-5 h-5 lg:w-20 lg:h-20 border-2 border-foreground ${
//         className || ""
//       }`}
//     />
//   );
// }
