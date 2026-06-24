"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

const Title = ({
  children,
  symbol = "#",
}: {
  children: ReactNode;
  symbol?: string;
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
      className="text-card-foreground text-xl font-semibold flex items-center pb-6"
    >
      <span className="text-purple-500">{symbol}</span>
      {children}
    </motion.span>
  );
};

export default Title;

// import { ReactNode } from "react";

// const Title = ({
//   children,
//   symbol = "#",
// }: {
//   children: ReactNode;
//   symbol?: string;
// }) => {
//   return (
//     <span className=" text-card-foreground text-xl font-semibold flex items-center pb-6">
//       <span className="text-purple-500">{symbol}</span>
//       {children}
//     </span>
//   );
// };

// export default Title;
