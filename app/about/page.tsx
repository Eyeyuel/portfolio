import { DotSquare } from "@/components/dot-square";
import { IncompleteSquare } from "@/components/incomplete-square";
import SimpleCard from "@/components/simple-card";
import Title from "@/components/title";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const TextWithBorder = ({ children }: { children: string }) => {
  return <span className="border-2 p-1.5 inline-block m-1">{children}</span>;
};

const page = () => {
  return (
    <div className="space-y-16">
      <IncompleteSquare className="top-[33vh] right-0 h-30 w-[60px] border-r-0" />
      <IncompleteSquare className="top-[130vh] left-0 h-30 w-[50px] border-l-0" />
      <DotSquare col={3} row={4} className="top-[50vh] left-2 grid-cols-3" />
      <DotSquare col={3} row={5} className="top-[90vh] right-0 grid-cols-3" />
      <DotSquare col={4} row={5} className="top-[170vh] right-0 grid-cols-4" />
      <div>
        <Title symbol="/">about-me</Title>
        <p className="text-card-foreground">Who am i?</p>
        <div className="mt-20">
          <div className="w-full">
            <Card className="flex flex-row justify-between bg-transparent border-none shadow-none">
              {/* left side */}
              <div className="flex flex-col items-start justify-between">
                <CardDescription>Hello, i&apos;m Eyuel!</CardDescription>
                <CardDescription>
                  I’m a full-stack developer with experience building modern,
                  scalable, and user-friendly web applications using both
                  frontend and backend technologies. I develop responsive
                  applications from scratch and turn ideas into reliable digital
                  solutions with clean and efficient system design.
                </CardDescription>
                <br />
                <CardDescription>
                  Building software and solving real-world problems through
                  technology is a strong passion of mine. I enjoy helping
                  clients create effective web solutions while continuously
                  improving my skills and staying up to date with modern
                  technologies and development practices.
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
      </div>
      <div>
        <Title>skills</Title>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(150px,200px))] gap-4 ">
          <SimpleCard
            title="Languages"
            description="Typescript, JavaScript, Python"
          />
          <SimpleCard
            title="Other"
            description="REST API, Microservices, Tailwind, shadcn ui"
          />
          <SimpleCard
            title="Tools"
            description="VS Code, Git, Docker, Postman, insomnia"
          />
          <SimpleCard
            title="Database"
            description="PostgreSQL, MongoDB, MySQL, Redis"
          />
          <SimpleCard
            title="Frameworks"
            description="Nestjs, Nextjs, React, Express"
          />
        </div>
      </div>
      <div>
        <Title>my-fun-facts</Title>
        <div>
          <TextWithBorder>
            Football is something I always keep up with, especially my favorite
            teams.
          </TextWithBorder>

          <TextWithBorder>
            I like taking long solo walks right before sunset when the day is
            about to end.
          </TextWithBorder>

          <TextWithBorder>
            Good conversations and time with friends are something I truly
            value.
          </TextWithBorder>

          <TextWithBorder>
            I’m curious about different places and enjoy learning about new
            cultures.
          </TextWithBorder>

          <TextWithBorder>
            Movies and series are my go-to way to relax in my free time.
          </TextWithBorder>

          <TextWithBorder>
            I appreciate quiet moments that help me reset and think clearly.
          </TextWithBorder>
        </div>
      </div>
    </div>
  );
};

export default page;
