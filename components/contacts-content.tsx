// components/animated-contact-section.tsx
"use client";

import { motion } from "motion/react";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactsContent() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-8 md:mb-0"
    >
      {/* Left column – description */}
      <motion.div variants={itemVariants}>
        <CardDescription>
          I’m interested in freelance opportunities. However, <br /> if you have
          other request or question, don’t <br /> hesitate to contact me
        </CardDescription>
      </motion.div>

      {/* Right column – contact box */}
      <motion.div
        variants={itemVariants}
        className="gap-5 md:gap-2 flex md:flex-row flex-col"
      >
        <CardContent className="flex-1 self-center">
          <CardContent className="w-fit p-6 border-2 ml-auto mt-auto space-y-5">
            <CardTitle>Message me here!</CardTitle>

            <CardDescription className="flex gap-2 cursor-pointer">
              <Link
                href="https://t.me/Eyuel_Teklu"
                target="_blank"
                className="flex gap-2"
              >
                <FaTelegramPlane className="w-5 h-5" />
                <CardDescription>Eyuel_Teklu</CardDescription>
              </Link>
            </CardDescription>

            <CardDescription className="flex gap-2 cursor-pointer">
              <Link href="mailto:eyueltklu27@gmail.com" className="flex gap-2">
                <SiGmail className="w-5 h-5" />
                <CardDescription>eyueltklu27@gmail.com</CardDescription>
              </Link>
            </CardDescription>
          </CardContent>
        </CardContent>
      </motion.div>
    </motion.div>
  );
}
