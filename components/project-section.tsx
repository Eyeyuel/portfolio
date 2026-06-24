"use client";

import { motion } from "motion/react";
import Link from "next/link";
import ProjectCard from "./project-card";
import nestjslogo from "@/public/nestjsLogo.png";
import mekazino from "@/public/mekazino.png";

export default function ProjectsSection() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
        className="text-xl text-card-foreground flex items-center gap-2 pb-6"
      >
        <span className="text-purple">#</span>
        projects
        {/* Animated line – grows from left */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "55%" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-0.5 bg-purple"
        />
        <Link className="hidden lg:block text-base ml-auto" href="/projects">
          View all ⟿
        </Link>
      </motion.div>

      {/* ---- Grid (cards already have their own entrance) ---- */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        <ProjectCard
          src={nestjslogo}
          description="nx monorepo, nestjs, microservices, rabbitmq"
          title="Multi-Tenant Inventory Management System"
          btnText="github"
          url="https://github.com/Eyeyuel/inventory-system"
        />
        <ProjectCard
          src={nestjslogo}
          description="nextjs for both backend and frontend, tailwind"
          title="Real Estate Payment Management System"
        />
        <ProjectCard
          src={mekazino}
          description="nextjs, tailwind, shadcn ui, zustand, typescript"
          title="Mekazino Inventory Management System"
          description2="string"
          btnText="string"
          url="https://github.com/Eyeyuel/inventory-app"
        />
      </div>
    </div>
  );
}
