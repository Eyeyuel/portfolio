"use client";
import { motion } from "motion/react";

export function DotSquare({
  className,
  gap = 4,
  col = 5,
  row = 5,
}: {
  className?: string;
  gap?: number;
  col?: number;
  row?: number;
}) {
  const dots = Array.from({ length: col * row });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, y: 5, scale: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 8,
      },
    },
  };

  return (
    <motion.div
      className={`hidden absolute md:grid gap-${gap} w-fit p-2 ${
        className || ""
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {dots.map((_, i) => (
        <motion.div
          key={i}
          className="rounded-full bg-foreground"
          style={{ width: 4, height: 4 }}
          variants={dotVariants}
        />
      ))}
    </motion.div>
  );
}

// export function DotSquare({
//   className,
//   gap = 4,
//   col = 5,
//   row = 5,
// }: {
//   className?: string;
//   gap?: number;
//   col?: number;
//   row?: number;
// }) {
//   const size = 5; // 5x5 grid
//   const dots = Array.from({ length: col * row });

//   return (
//     <div
//       // need to send grid-cols-${col} using the className prop
//       className={`hidden absolute md:grid gap-${gap} w-fit p-2 ${
//         className || ""
//       }`}
//     >
//       {dots.map((_, i) => (
//         <div
//           key={i}
//           className={`rounded-full bg-foreground`}
//           style={{ width: 4, height: 4 }}
//         />
//       ))}
//     </div>
//   );
// }
