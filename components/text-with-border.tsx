"use client";

import { motion } from "motion/react";

const TextWithBorder = ({ children }: { children: string }) => {
  return (
    <motion.span
      className="border-2 p-1.5 inline-block m-1"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
    >
      {children}
    </motion.span>
  );
};

export default TextWithBorder;
