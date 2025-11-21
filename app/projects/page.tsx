import { DotSquare } from "@/components/dot-square";
import { IncompleteSquare } from "@/components/incomplete-square";
import ProjectCard from "@/components/project-card";
import SimpleCard from "@/components/simple-card";
import Title from "@/components/title";
import { CardDescription } from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <div className="space-y-16">
      <IncompleteSquare className="top-[33vh] right-0 h-30 w-[60px] border-r-0" />
      <IncompleteSquare className="top-[185vh] left-0 h-30 w-[50px] border-l-0" />
      <DotSquare col={4} row={4} className="top-[60vh] left-2 grid-cols-4" />
      <DotSquare col={4} row={5} className="top-[210vh] right-0 grid-cols-4" />
      <DotSquare col={3} row={5} className="top-[250vh] left-0 grid-cols-3" />

      <div>
        <Title symbol="/">projects</Title>
        <CardDescription className="text-card-foreground">
          List of my projects
        </CardDescription>
      </div>
      <div className="mt-20">
        <Title>Complete-apps</Title>
        {/* projects */}
        <div>
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
            <ProjectCard
              src="./vercel.svg"
              description="string"
              title="string"
              description2="string"
              btnText="string"
            ></ProjectCard>
          </div>
        </div>
      </div>
      <Title>Small-Projects</Title>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,300px))] gap-4 ">
        <SimpleCard
          title="languages"
          description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda slkdfal lasdfj asdlkf jsaldkfjasldk sa"
          btnText="Github"
          url="https://github.com/Eyeyuel"
        />
        <SimpleCard
          title="languages"
          description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda slkdfal lasdfj asdlkf jsaldkfjasldk sa"
          btnText="Github"
          url="https://github.com/Eyeyuel"
        />
        <SimpleCard
          title="languages"
          description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda slkdfal lasdfj asdlkf jsaldkfjasldk sa"
          btnText="Github"
          url="https://github.com/Eyeyuel"
        />
        <SimpleCard
          title="languages"
          description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda slkdfal lasdfj asdlkf jsaldkfjasldk sa"
          btnText="Github"
          url="https://github.com/Eyeyuel"
        />
        <SimpleCard
          title="languages"
          description="lorem lsadjflksd saldjf lskdjf asjdflskd flsd lksda slkdfal lasdfj asdlkf jsaldkfjasldk sa"
          btnText="Github"
          url="https://github.com/Eyeyuel"
        />
      </div>
    </div>
  );
};

export default page;
