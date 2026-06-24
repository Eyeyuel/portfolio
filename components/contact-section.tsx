"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactsSection = () => {
  // Stagger for the two content columns
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <div className="h-[30vh]">
      {/* ---- Animated heading ---- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
        className="text-xl text-card-foreground flex items-center gap-2 pb-6 pt-6"
      >
        <span className="text-purple">#</span>
        contacts
        {/* Growing line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "20%" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-0.5 bg-purple"
        />
      </motion.div>

      {/* ---- Content (staggered columns) ---- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Card className="md:flex-row items-end justify-end bg-transparent h-full border-none shadow-none">
          {/* Left side – description */}
          <motion.div variants={itemVariants} className="flex-1 self-start">
            <CardContent>
              <CardDescription>
                I’m interested in freelance opportunities. However, if you have
                other request or question, don’t hesitate to contact me
              </CardDescription>
            </CardContent>
          </motion.div>

          {/* Right side – contact box */}
          <motion.div variants={itemVariants} className="flex-1 self-center">
            <CardContent>
              <CardContent className="w-fit p-6 border-2 ml-auto mt-auto space-y-5">
                <CardTitle>Message me here!</CardTitle>
                <CardDescription className="flex gap-2 cursor-pointer">
                  <Link
                    href={`https://t.me/Eyuel_Teklu`}
                    target="_blank"
                    className="flex gap-2"
                  >
                    <FaTelegramPlane className="w-5 h-5" />
                    <CardDescription>Eyuel_Teklu</CardDescription>
                  </Link>
                </CardDescription>
                <CardDescription className="flex gap-2 cursor-pointer">
                  <Link
                    href={`mailto:eyueltklu27@gmail.com`}
                    className="flex gap-2"
                  >
                    <SiGmail className="w-5 h-5" />
                    <CardDescription>eyueltklu27@gmail.com</CardDescription>
                  </Link>
                </CardDescription>
              </CardContent>
            </CardContent>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactsSection;
