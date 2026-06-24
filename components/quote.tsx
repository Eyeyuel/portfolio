"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { QuoteIcon } from "lucide-react";

const Quote = ({ text, by }: { text?: string; by?: string }) => {
  // Stagger container variants (same as Hero)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Item variants – spring in from below (same as Hero)
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

  // Wobble for the quote icons
  const wobble = {
    rotate: [0, -12, 10, -6, 4, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="border-none w-fit gap-0 flex flex-col bg-transparent shadow-none">
        {/* Quote text block – animated with spring */}
        <motion.div variants={itemVariants}>
          <CardContent className="relative border p-6 font-semibold text-lg">
            {/* Top‑left icon with wobble */}
            <motion.span
              className="bg-background absolute -top-2.5 left-3 scale-x-[-1] inline-block"
              initial={{ rotate: 0 }}
              whileInView={wobble}
              viewport={{ once: true }}
            >
              <QuoteIcon fill="none" stroke="currentColor" />
            </motion.span>

            {/* Bottom‑right icon with wobble */}
            <motion.span
              className="bg-background absolute -bottom-2.5 right-3 inline-block"
              initial={{ rotate: 0 }}
              whileInView={wobble}
              viewport={{ once: true }}
            >
              <QuoteIcon fill="none" stroke="currentColor" />
            </motion.span>

            {text}
          </CardContent>
        </motion.div>

        {/* Author block – animated second */}
        <motion.div className="self-end border p-6" variants={itemVariants}>
          <CardContent>{by}</CardContent>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default Quote;

// import React from "react";
// import { Card, CardContent } from "./ui/card";
// import { QuoteIcon, TextQuote } from "lucide-react";

// const Quote = ({ text, by }: { text?: string; by?: string }) => {
//   return (
//     <Card className="border-none w-fit gap-0 flex flex-col bg-transparent shadow-none">
//       <CardContent className=" relative border p-6 font-semibold text-lg">
//         <QuoteIcon
//           className=" bg-background absolute -top-2.5 left-3 scale-x-[-1]"
//           fill={"none"}
//           stroke="currentcolor"
//         />
//         <QuoteIcon
//           className=" bg-background absolute -bottom-2.5 right-3"
//           fill={"none"}
//           stroke="currentcolor"
//         />
//         {text}
//       </CardContent>
//       <CardContent className="self-end border p-6">{by}</CardContent>
//     </Card>
//   );
// };

// export default Quote;
