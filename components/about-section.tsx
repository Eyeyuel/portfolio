"use client";

import { motion } from "motion/react";
import { Card, CardDescription } from "./ui/card";
import { DotSquare } from "./dot-square";
import Image from "next/image";

const AboutSection = () => {
  // Stagger container for the text paragraphs
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Each paragraph slides up (same spring as hero / quote)
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
    <div>
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
        about-me
        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "40%" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-0.5 bg-purple"
        />
      </motion.div>

      {/* ---- Content ---- */}
      <div className="w-full">
        <Card className="flex md:flex-row justify-between bg-transparent border-none shadow-none">
          {/* left side – staggered text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="px-5 md:p-0 basis-[50%] flex flex-col items-start justify-between"
          >
            <motion.div variants={itemVariants}>
              <CardDescription>Hello, i&apos;m Eyuel!</CardDescription>
            </motion.div>

            <motion.div variants={itemVariants}>
              <CardDescription>
                I’m a full‑stack developer with experience building modern,
                scalable, and user‑friendly web applications using both frontend
                and backend technologies. I develop responsive applications from
                scratch and turn ideas into reliable digital solutions with
                clean and efficient system design.
              </CardDescription>
            </motion.div>

            <motion.div variants={itemVariants}>
              <CardDescription>
                Building software and solving real‑world problems through
                technology is a strong passion of mine. I enjoy helping clients
                create effective web solutions while continuously improving my
                skills and staying up to date with modern technologies and
                development practices.
              </CardDescription>
            </motion.div>
          </motion.div>

          {/* right side – image + decorators */}
          <div className="hidden md:block basis-[50%] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: 0.2,
              }}
            >
              <Image
                width={300}
                height={200}
                alt="face image"
                src="./vercel.svg"
              />
            </motion.div>

            {/* DotSquares already animate on their own (whileInView) */}
            <DotSquare
              gap={3}
              row={4}
              className="absolute top-[30%] right-[20%] grid-cols-5"
            />
            <DotSquare gap={2} className="absolute top-0 left-0 grid-cols-5" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
