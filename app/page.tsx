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

const page = () => {
  return (
    <div className="flex flex-col gap-14">
      {/* shapes */}
      <IncompleteSquare className="top-[60vh] right-0 border-r-0" />
      <IncompleteSquare className="top-[120vh] right-0 h-30 w-[60px] border-r-0" />
      <IncompleteSquare className="top-[330vh] left-0 h-30 w-[50px] border-l-0" />
      <DotSquare col={4} className="top-[340vh] right-0 grid-cols-4" />
      <DotSquare col={2} row={4} className="top-[110vh] left-0 grid-cols-2" />
      <DotSquare col={3} row={5} className="top-[380vh] left-0 grid-cols-3" />

      {/* hero card */}

      <div className="w-full">
        <Card className="flex flex-row justify-between bg-transparent border-none shadow-none">
          {/* left side */}
          <div className="basis-[50%] flex flex-col items-start justify-center">
            <CardContent className="text-3xl leading-14">
              I&apos;m a <span className="text-purple">web designer</span> and
              <br />
              <span className="text-purple"> front-end developer</span>
            </CardContent>
            <CardContent>
              <CardDescription className="text-base">
                He crafts responsive websites where technologies <br /> meet
                creativity
              </CardDescription>
            </CardContent>
            <CardContent>
              <Button className="rounded-none border border-purple bg-transparent text-foreground mt-5">
                Contact me!!
              </Button>
            </CardContent>
          </div>
          {/* right side */}
          <div className="basis-[50%] relative">
            <Card className="flex flex-row w-auto absolute bottom-0 p-1 rounded-none">
              <Square fill="purple" stroke="purple" /> Currently working on
              something.
            </Card>
            <Image
              width={300} // in pixels
              height={200} // in pixels
              alt="face image"
              src={"./vercel.svg"}
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
        <span className=" text-xl flex items-center gap-2 pb-6">
          <span className="text-purple">#</span>
          projects
          <div className="h-0.5 w-[55%] bg-purple"></div>
          <Link className="text-base ml-auto" href={"/projects"}>
            View all ⟿
          </Link>
        </span>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          <ProjectCard
            src="./vercel.svg"
            description="string"
            title="string"
            description2="string"
            btnText="string"
          ></ProjectCard>
          <ProjectCard
            src="./vercel.svg"
            description="string"
            title="string"
            description2="string aslkdjflksad lkjsdlkfj asdlkf jasdlkfj laskjdf laskdjf laksdj flaskjdfl kjsadlkfj lkfjsl;kdjf lkdjslfk ajdlf"
            btnText="string"
          ></ProjectCard>
          <ProjectCard
            src="./vercel.svg"
            description="string"
            title="string"
            description2="string"
            btnText="string"
          ></ProjectCard>
          <ProjectCard
            src="./vercel.svg"
            description="string"
            title="string"
            description2="string"
            btnText="string"
          ></ProjectCard>
        </div>
      </div>

      {/* skills */}
      <div>
        <span className=" text-xl flex items-center gap-2 pb-6 pt-6">
          <span className="text-purple">#</span>
          skills
          <div className="h-0.5 w-[25%] bg-purple"></div>
        </span>
        <div className="flex">
          <div className="relative w-2/5">
            <DotSquare gap={2} className=" top-50 right-30 grid-cols-5" />
            <DotSquare gap={2} className=" top-16 left-16 grid-cols-5" />
            <IncompleteSquare className="w-[70px] h-[70px] top-10 right-30" />
            <IncompleteSquare className="bottom-10 right-5 w-[40px] h-[40px]" />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 ">
              <div>
                <SimpleCard
                  title="languages"
                  description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda"
                />
              </div>
              <div className="space-y-4">
                <SimpleCard
                  title="languages"
                  description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda slkdfal lasdfj asdlkf jsaldkfjasldk sa"
                />
                <SimpleCard
                  title="languages"
                  description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda"
                />
              </div>
              <div className="space-y-4">
                <SimpleCard
                  title="languages"
                  description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda"
                />
                <SimpleCard
                  title="languages"
                  description="lorem lsadjflksd saldjf lskdjf asjdflskd flsdsdlakflasd lksdjf lksajdf lkasd lksda"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about me */}
      <div>
        <span className=" text-xl flex items-center gap-2 pb-6 pt-6">
          <span className="text-purple">#</span>
          about-me
          <div className="h-0.5 w-[40%] bg-purple"></div>
        </span>
        <div className="w-full">
          <Card className="flex flex-row justify-between bg-transparent border-none shadow-none">
            {/* left side */}
            <div className="basis-[50%] flex flex-col items-start justify-between">
              <CardDescription>Hello, i&apos;m Eyuel!</CardDescription>
              <CardDescription>
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I
                can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences.
              </CardDescription>
              <CardDescription>
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </CardDescription>
            </div>
            {/* right side */}
            <div className="basis-[50%] relative">
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
        <span className=" text-xl flex items-center gap-2 pb-6 pt-6">
          <span className="text-purple">#</span>
          contacts
          <div className="h-0.5 w-[20%] bg-purple"></div>
        </span>
        <Card className="flex-row items-end justify-end bg-transparent h-full border-none shadow-none">
          <CardContent className="flex-1 self-start">
            <CardDescription>
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </CardDescription>
          </CardContent>
          <CardContent className=" flex-1 self-center">
            <CardContent className="w-fit p-6 border-2 ml-auto mt-auto space-y-1">
              <CardTitle>Message me here!</CardTitle>
              <CardDescription className="flex gap-2">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5  fill-current"
                >
                  <title>Discord</title>
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                <CardDescription>something</CardDescription>
              </CardDescription>
              <CardDescription className="flex gap-2">
                <Link href={`mailto:eyueltk@gmail.com`}>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5  fill-current"
                  >
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </Link>
                <CardDescription>something</CardDescription>
              </CardDescription>
            </CardContent>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
