import { DotSquare } from "@/components/dot-square";
import { IncompleteSquare } from "@/components/incomplete-square";
import ProjectCard from "@/components/project-card";
import Quote from "@/components/quote";
import SimpleCard from "@/components/simple-card";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profile from "@/public/pfp.jpg";
import mekazino from "@/public/mekazino.png";
import nestjslogo from "@/public/nestjsLogo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const page = () => {
  return (
    <div className="flex flex-col gap-14">
      {/* shapes */}
      <div className="hidden lg:block">
        <IncompleteSquare className="top-[60vh] right-0 border-r-0" />
        <IncompleteSquare className="top-[120vh] right-0 h-30 w-[60px] border-r-0" />
        <IncompleteSquare className="top-[330vh] left-0 h-30 w-[50px] border-l-0" />
        <DotSquare col={4} className="top-[340vh] right-0 grid-cols-4" />
        <DotSquare col={2} row={4} className="top-[110vh] left-0 grid-cols-2" />
        <DotSquare col={3} row={5} className="top-[380vh] left-0 grid-cols-3" />
      </div>

      {/* hero card */}

      <div className="w-full">
        <Card className="flex flex-col lg:flex-row justify-between bg-transparent border-none shadow-none">
          {/* left side */}
          <div className="basis-[50%] flex flex-col items-start justify-center">
            <CardContent className="text-3xl font-semibold leading-11">
              I&apos;m a <span className="text-purple">Full Stack </span> and
              <br />
              <span className="text-purple"> Mobile Developer</span>
            </CardContent>
            <CardContent>
              <CardDescription className="text-base mt-10">
                He crafts responsive websites where technologies <br /> meet
                creativity
              </CardDescription>
            </CardContent>
            <CardContent className="hidden lg:block">
              <Button className="rounded-none border border-purple bg-transparent text-foreground mt-5">
                Contact me!!
              </Button>
            </CardContent>
          </div>
          {/* right side */}
          <div className="basis-[50%] relative">
            <Card className="flex flex-row w-auto absolute bottom-0 p-1 rounded-none">
              <Square fill="purple" stroke="purple" /> Currently working on nx
              monorepo nestjs.
            </Card>
            <Image
              width={300} // in pixels
              height={200} // in pixels
              alt="face image"
              src={profile}
            />
            <DotSquare className="absolute top-[50%] right-0 grid-cols-5" />
          </div>
        </Card>
      </div>

      {/* Quote */}

      <div className="relative flex justify-center">
        <Quote
          text="With great power comes great electricity bill"
          by="- Dr. Who"
        />
      </div>
      {/* projects */}
      <div>
        <span className=" text-xl text-card-foreground flex items-center gap-2 pb-6">
          <span className="text-purple">#</span>
          projects
          <div className="h-0.5 w-[55%] bg-purple"></div>
          <Link
            className="hidden lg:block text-base ml-auto"
            href={"/projects"}
          >
            View all ⟿
          </Link>
        </span>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          <ProjectCard
            src={nestjslogo}
            description="nx monorepo, nestjs, microservices, rabbitmq"
            title="Multi-Tenant Inventory Management System"
            // description2="string"
            btnText="github"
            url="https://github.com/Eyeyuel/inventory-system"
          ></ProjectCard>
          <ProjectCard
            src={nestjslogo}
            description="nextjs for both backend and frontend, tailwind"
            title="Real Estate Payment Management System "
            // description2="string aslkdjflksad lkjsdlkfj asdlkf "
            // btnText="string"
          ></ProjectCard>
          <ProjectCard
            src={mekazino}
            description="nextjs, tailwind, shadcn ui, zustand, typescript"
            title="Mekazino Inventory Management System"
            description2="string"
            btnText="string"
            url="https://github.com/Eyeyuel/inventory-app"
          ></ProjectCard>
        </div>
      </div>

      {/* skills */}
      <div>
        <span className=" text-xl text-card-foreground flex items-center gap-2 pb-6 pt-6">
          <span className="text-purple">#</span>
          skills
          <div className="h-0.5 w-[25%] bg-purple"></div>
        </span>
        <div className="flex">
          <div className="hidden lg:block relative w-2/5">
            <DotSquare gap={2} className=" top-50 right-30 grid-cols-5" />
            <DotSquare gap={2} className=" top-16 left-16 grid-cols-5" />
            <IncompleteSquare className="w-[70px] h-[70px] top-10 right-30" />
            <IncompleteSquare className="bottom-10 right-5 w-[40px] h-[40px]" />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 ">
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
      {/* about me */}
      <div>
        <span className=" text-xl text-card-foreground flex items-center gap-2 pb-6 pt-6">
          <span className="text-purple">#</span>
          about-me
          <div className="h-0.5 w-[40%] bg-purple"></div>
        </span>
        <div className="w-full">
          <Card className="flex md:flex-row justify-between bg-transparent border-none shadow-none">
            {/* left side */}
            <div className="px-5 md:p-0 basis-[50%] flex flex-col items-start justify-between">
              <CardDescription>Hello, i&apos;m Eyuel!</CardDescription>
              <CardDescription>
                I’m a full-stack developer with experience building modern,
                scalable, and user-friendly web applications using both frontend
                and backend technologies. I develop responsive applications from
                scratch and turn ideas into reliable digital solutions with
                clean and efficient system design.
              </CardDescription>
              <CardDescription>
                Building software and solving real-world problems through
                technology is a strong passion of mine. I enjoy helping clients
                create effective web solutions while continuously improving my
                skills and staying up to date with modern technologies and
                development practices.
              </CardDescription>
            </div>
            {/* right side */}
            <div className="hidden md:block basis-[50%] relative">
              <Image
                width={300} // in pixels
                height={200} // in pixels
                alt="face image"
                src={"./vercel.svg"}
              />

              <DotSquare
                gap={3}
                row={4}
                className="absolute top-[30%] right-[20%] grid-cols-5"
              />
              <DotSquare
                gap={2}
                className="absolute top-0 left-0 grid-cols-5"
              />
            </div>
          </Card>
        </div>
      </div>

      {/* contacts */}

      <div className="h-[30vh]">
        <span className=" text-xl text-card-foreground flex items-center gap-2 pb-6 pt-6">
          <span className="text-purple">#</span>
          contacts
          <div className="h-0.5 w-[20%] bg-purple"></div>
        </span>
        <Card className="md:flex-row items-end justify-end bg-transparent h-full border-none shadow-none">
          <CardContent className="flex-1 self-start">
            <CardDescription>
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </CardDescription>
          </CardContent>
          <CardContent className=" flex-1 self-center">
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
        </Card>
      </div>
    </div>
  );
};

export default page;
