"use client";
import Title from "./title";
import { motion } from "motion/react";
import { CardDescription } from "./ui/card";

const WorkTitle = () => {
  return (
    <div>
      <Title symbol="/">projects</Title>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: 0.1,
        }}
      >
        <CardDescription className="pl-5 md:pl-0 text-card-foreground">
          List of my projects
        </CardDescription>
      </motion.div>
    </div>
  );
};

export default WorkTitle;
