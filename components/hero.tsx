"use client";

import { useRef } from "react";
import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Square } from "lucide-react";
import Image from "next/image";
import profile from "@/public/pfp.png";
import { DotSquare } from "@/components/dot-square";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [scope, animate] = useAnimate();
  const { scrollY } = useScroll();
  const hasScrolledAway = useRef(false);
  const isJiggling = useRef(false);
  const router = useRouter();

  const triggerJiggle = async () => {
    if (isJiggling.current) return;
    isJiggling.current = true;
    try {
      await animate(
        scope.current,
        { y: -6 },
        { type: "spring", stiffness: 600, damping: 50, duration: 0.1 },
      );
      await animate(
        scope.current,
        { y: 0 },
        { type: "spring", stiffness: 600, damping: 50, duration: 0.1 },
      );
    } finally {
      setTimeout(() => {
        isJiggling.current = false;
      }, 300);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      hasScrolledAway.current = true;
    }
    if (latest === 0 && hasScrolledAway.current && !isJiggling.current) {
      hasScrolledAway.current = false;
      triggerJiggle();
    }
  });

  // ---- Variants ----
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
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
    <motion.div ref={scope} className="w-full">
      <Card className="flex flex-col lg:flex-row justify-between bg-transparent border-none shadow-none">
        {/* Left side – Text */}
        <div className="basis-[50%] flex flex-col items-start justify-center">
          <CardContent>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={textVariants}
                className="lg:text-3xl font-semibold lg:leading-11"
              >
                I&apos;m a <span className="text-purple">Full Stack </span> and
                <span className="text-purple"> Mobile Developer</span>
              </motion.h1>
            </motion.div>
          </CardContent>

          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            >
              <CardDescription className="text-sm md:text-base lg:mt-10">
                I crafts responsive websites where technologies meet creativity.
              </CardDescription>
            </motion.div>
          </CardContent>

          <CardContent className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8,
                type: "spring" as const,
                stiffness: 200,
              }}
            >
              <Button
                className="rounded-none border border-purple bg-transparent text-foreground mt-5 hover:bg-purple cursor-pointer"
                onClick={() => router.push("/contact")}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact me!!
                </motion.span>
              </Button>
            </motion.div>
          </CardContent>
        </div>

        {/* Right side – Image + decorations */}
        <div className="basis-[50%] relative flex justify-center items-center">
          <motion.div
            className="absolute bottom-0 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          >
            <Card className="flex flex-row w-auto p-1 rounded-none shadow-lg">
              <Square fill="purple" stroke="purple" />
              <CardDescription>
                Currently working on nx monorepo nestjs.
              </CardDescription>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
              type: "spring" as const,
              stiffness: 150,
              damping: 15,
            }}
          >
            <Image
              width={300}
              height={200}
              alt="face image"
              src={profile}
              loading="eager"
              className="max-w-[250px] w-full h-auto object-contain"
              priority
            />
          </motion.div>

          <DotSquare
            className="absolute top-[50%] right-0 grid-cols-5"
            col={5}
            row={5}
            gap={4}
          />
        </div>
      </Card>
    </motion.div>
  );
}
// "use client";

// import { motion } from "motion/react";
// import { Card, CardContent, CardDescription } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Square, DotSquare } from "lucide-react";
// import Image from "next/image";
// import profile from "@/public/pfp.png";

// export default function Hero() {
//   // Stagger container variants
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   // Individual text item variants (note: transition type uses "as const")
//   const textVariants = {
//     hidden: { opacity: 0, y: 25 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring" as const, // 👈 fix: literal type
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   };

//   return (
//     <div className="w-full">
//       <Card className="flex flex-col lg:flex-row justify-between bg-transparent border-none shadow-none">
//         {/* Left side - Text */}
//         <div className="basis-[50%] flex flex-col items-start justify-center">
//           <CardContent>
//             {/* No asChild needed – motion.div directly inside CardContent */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <motion.h1
//                 variants={textVariants}
//                 className="lg:text-3xl font-semibold lg:leading-11"
//               >
//                 I&apos;m a <span className="text-purple">Full Stack </span> and
//                 <span className="text-purple"> Mobile Developer</span>
//               </motion.h1>
//             </motion.div>
//           </CardContent>

//           <CardContent>
//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
//             >
//               <CardDescription className="text-sm md:text-base lg:mt-10">
//                 I crafts responsive websites where technologies meet creativity.
//               </CardDescription>
//             </motion.div>
//           </CardContent>

//           <CardContent className="hidden lg:block">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{
//                 delay: 0.8,
//                 type: "spring" as const, // 👈 fix
//                 stiffness: 200,
//               }}
//             >
//               <Button className="rounded-none border border-purple bg-transparent text-foreground mt-5">
//                 <motion.span
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Contact me!!
//                 </motion.span>
//               </Button>
//             </motion.div>
//           </CardContent>
//         </div>

//         {/* Right side - Image + decorations */}
//         <div className="basis-[50%] relative flex justify-center items-center">
//           {/* Floating current-work card */}
//           <motion.div
//             className="absolute bottom-0 z-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
//           >
//             <Card className="flex flex-row w-auto p-1 rounded-none shadow-lg">
//               <Square fill="purple" stroke="purple" />
//               <CardDescription>
//                 Currently working on nx monorepo nestjs.
//               </CardDescription>
//             </Card>
//           </motion.div>

//           {/* Profile image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               delay: 0.4,
//               type: "spring" as const,
//               stiffness: 150,
//               damping: 15,
//             }}
//           >
//             <Image
//               width={300}
//               height={200}
//               alt="face image"
//               src={profile}
//               loading="eager"
//               className="max-w-[250px] w-full h-auto object-contain"
//               priority
//             />
//           </motion.div>

//           {/* Decorative DotSquare */}
//           <motion.div
//             className="absolute top-[50%] right-0 grid-cols-5"
//             initial={{ opacity: 0, rotate: -45 }}
//             animate={{ opacity: 1, rotate: 0 }}
//             transition={{
//               delay: 1.2,
//               duration: 0.7,
//               type: "spring" as const,
//               stiffness: 100,
//             }}
//           >
//             <DotSquare className="absolute top-[50%] right-0 grid-cols-5" />
//           </motion.div>
//         </div>
//       </Card>
//     </div>
//   );
// }
