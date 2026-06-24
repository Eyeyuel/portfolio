import { DotSquare } from "@/components/dot-square";
import { IncompleteSquare } from "@/components/incomplete-square";
import ProjectCard from "@/components/project-card";
import SimpleCard from "@/components/simple-card";
import Title from "@/components/title";
import WorkTitle from "@/components/work-title";
import mekazino from "@/public/mekazino.png";
import nestjslogo from "@/public/nestjsLogo.png";

const page = () => {
  return (
    <div className="space-y-16">
      <IncompleteSquare className="top-[33vh] right-0 h-30 w-[60px] border-r-0" />
      <DotSquare col={4} row={4} className="top-[60vh] left-2 grid-cols-4" />
      {/* <IncompleteSquare className="top-[185vh] left-0 h-30 w-[50px] border-l-0" /> */}
      {/* <DotSquare col={4} row={5} className="top-[210vh] right-0 grid-cols-4" /> */}
      {/* <DotSquare col={3} row={5} className="top-[250vh] left-0 grid-cols-3" /> */}

      <WorkTitle />
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
        <Title>Unfinished-projects</Title>
        <div>
          <Title>Small-Projects</Title>
          <div className=" grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(150px,300px))] gap-4 ">
            <SimpleCard
              title="Hirehub"
              description="A job board and recruitment platform connecting employers with top talent. Built with Next.js and NestJS, featuring real-time messaging and role-based dashboards."
              btnText="Github"
              url="https://github.com/Eyeyuel"
            />
            <SimpleCard
              title="fitness"
              description="A fitness management platform for gyms and trainers to assign clients, create workout schedules, and track progress – all in one place."
              btnText="Github"
              url="https://github.com/Eyeyuel"
            />
            {/* <SimpleCard
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
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

{
  /* <div>
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
      </div> */
}
