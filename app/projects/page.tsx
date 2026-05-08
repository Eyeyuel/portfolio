import { DotSquare } from "@/components/dot-square";
import { IncompleteSquare } from "@/components/incomplete-square";
import ProjectCard from "@/components/project-card";
import SimpleCard from "@/components/simple-card";
import Title from "@/components/title";
import { CardDescription } from "@/components/ui/card";
import nestjslogo from "@/public/nestjsLogo.png";
import mekazino from "@/public/mekazino.png";

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
        <CardDescription className="pl-5 md:pl-0 text-card-foreground">
          List of my projects
        </CardDescription>
      </div>
      <div className="mt-20">
        <Title>Complete-apps</Title>
        {/* projects */}
        <div>
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
      </div>
      {/* <div>
        <Title>Small-Projects</Title>
        <div className=" grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(150px,300px))] gap-4 ">
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
      </div> */}
    </div>
  );
};

export default page;
