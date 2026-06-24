"use client";

import React from "react";
import { motion } from "motion/react";
import { DotSquare } from "./dot-square";
import { IncompleteSquare } from "./incomplete-square";
import SimpleCard from "./simple-card";

const SkeiilsSection = () => {
  return (
    <div>
      {/* Changed from <span> to <div> to allow a <div> inside */}
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
        skills
        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "25%" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-0.5 bg-purple"
        />
      </motion.div>

      {/* Rest of layout unchanged */}
      <div className="flex">
        <div className="hidden lg:block relative w-2/5">
          <DotSquare gap={2} className="top-50 right-30 grid-cols-5" />
          <DotSquare gap={2} className="top-16 left-16 grid-cols-5" />
          <IncompleteSquare className="w-[70px] h-[70px] top-10 right-30" />
          <IncompleteSquare className="bottom-10 right-5 w-[40px] h-[40px]" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
            <div>
              <SimpleCard
                title="Languages"
                description="Typescript, JavaScript, Python"
              />
            </div>
            <div className="lg:space-y-4">
              <SimpleCard
                title="Databases"
                description="PostgreSQL, MongoDB, MySQL, Redis"
              />
              <SimpleCard
                title="Other"
                description="REST API, Microservices, Tailwind, shadcn ui"
              />
            </div>
            <div className="space-y-4">
              <SimpleCard title="Tools" description="Git, Docker, RabbitMQ" />
              <SimpleCard
                title="FrameWorks"
                description="Nestjs, Nextjs, React, Express"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeiilsSection;
