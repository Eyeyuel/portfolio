import AboutPageContent from "@/components/about-page-content";
import { DotSquare } from "@/components/dot-square";
import { IncompleteSquare } from "@/components/incomplete-square";
import SimpleCard from "@/components/simple-card";
import TextWithBorder from "@/components/text-with-border";
import Title from "@/components/title";

const page = () => {
  return (
    <div className="space-y-16">
      <IncompleteSquare className="top-[33vh] right-0 h-30 w-[60px] border-r-0" />
      <IncompleteSquare className="top-[130vh] left-0 h-30 w-[50px] border-l-0" />
      <DotSquare col={3} row={4} className="top-[50vh] left-2 grid-cols-3" />
      <DotSquare col={3} row={5} className="top-[90vh] right-0 grid-cols-3" />
      <DotSquare col={4} row={5} className="top-[170vh] right-0 grid-cols-4" />
      <AboutPageContent />
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
