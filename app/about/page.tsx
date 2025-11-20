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
              <div className="basis-[50%] flex flex-col items-start justify-between">
                <CardDescription>Hello, i&apos;m Eyuel!</CardDescription>
                <CardDescription>
                  I’m a self-taught front-end developer based in Kyiv, Ukraine.
                  I can develop responsive websites from scratch and raise them
                  into modern user-friendly web experiences.
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
      </div>
      <div>
        <Title>skills</Title>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,200px))] gap-4 ">
          <SimpleCard
            title="Languages"
            description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda slkdfal lasdfj asdlkf jsaldkfjasldk sa"
          />
          <SimpleCard
            title="Other"
            description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda slkdfal lasdfj asdlkf jsaldkfjasldk sa"
          />
          <SimpleCard
            title="Tools"
            description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda slkdfal lasdfj asdlkf jsaldkfjasldk sa"
          />
          <SimpleCard
            title="Database"
            description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda slkdfal lasdfj asdlkf jsaldkfjasldk sa"
          />
          <SimpleCard
            title="Frameworks"
            description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda slkdfal lasdfj asdlkf jsaldkfjasldk sa"
          />
        </div>
      </div>
      <div>
        <Title>my-fun-facts</Title>
        <div>
          <TextWithBorder>consectetur adipisicing elit.</TextWithBorder>
          <TextWithBorder>Lorem, ipsum dolor.</TextWithBorder>
          <TextWithBorder>Lorem ipsum dolor sit amet.</TextWithBorder>
          <TextWithBorder>
            Lorem ipsum dolor sit amet consectetur.
          </TextWithBorder>
          <TextWithBorder>Lorem, ipsum dolor.</TextWithBorder>
          <TextWithBorder>Lorem ipsum dolor sit.</TextWithBorder>
          <TextWithBorder>
            Lorem ipsum dolor sit amet consectetur.
          </TextWithBorder>
        </div>
      </div>
    </div>
  );
};

export default page;
