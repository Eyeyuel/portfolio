"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

const SimpleCard = ({
  title,
  description,
  btnText,
  url,
}: {
  title: string;
  description: string;
  btnText?: string;
  url?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
      whileHover={{ y: -5 }}
    >
      <Card className="rounded-none bg-transparent h-fit p-0 gap-0">
        <CardTitle className="border-b p-2">{title}</CardTitle>
        <CardContent className="p-2 pb-5 space-y-6">
          <CardDescription className="leading-relaxed">
            {description}
          </CardDescription>
          {btnText && (
            <Link
              href={url || "#"}
              className="py-1 pr-5 pl-1 w-fit text-card-foreground text-sm border border-purple"
            >
              {btnText} &#x21ad;
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SimpleCard;

// import Link from "next/link";
// import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

// const SimpleCard = ({
//   title,
//   description,
//   btnText,
//   url,
// }: {
//   title: string;
//   description: string;
//   btnText?: string;
//   url?: string;
// }) => {
//   return (
//     <Card className="rounded-none bg-transparent h-fit p-0 gap-0">
//       <CardTitle className="border-b p-2">{title}</CardTitle>
//       <CardContent className="p-2 pb-5 space-y-6">
//         <CardDescription className=" leading-relaxed">
//           {description}
//         </CardDescription>
//         {btnText && (
//           <Link
//             href={url || "#"}
//             className=" py-1 pr-5 pl-1 w-fit text-card-foreground text-sm border border-purple"
//           >
//             {btnText} &#x21ad;
//           </Link>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default SimpleCard;
