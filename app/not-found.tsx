"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
      className="flex flex-col items-center justify-center h-[80dvh] text-center gap-6"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          delay: 0.2,
        }}
        className="text-6xl font-bold text-purple"
      >
        404
      </motion.h1>

      <p className="text-xl text-card-foreground">
        The page you’re looking for doesn’t exist.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="/"
          className="inline-block border border-purple px-6 py-2 text-card-foreground hover:bg-purple/10 transition-colors"
        >
          Go back home →
        </Link>
      </motion.div>
    </motion.div>
  );
}
