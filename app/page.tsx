import { DotSquare } from "@/components/dot-square";
import { IncompleteSquare } from "@/components/incomplete-square";
import Quote from "@/components/quote";

import AboutSection from "@/components/about-section";
import ContactsSection from "@/components/contact-section";
import Hero from "@/components/hero";
import ProjectsSection from "@/components/project-section";
import SkillsSection from "@/components/skills-section";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

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
        {/* <DotSquare col={3} row={5} className="top-[380vh] left-0 grid-cols-3" /> */}
      </div>

      {/* hero card */}

      <Hero />

      {/* <div className="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20">
        <DotPattern
          width={10}
          height={10}
          cx={1}
          cy={1}
          cr={1}
          // glow={true}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
          )}
        />
      </div> */}

      {/* Quote */}

      <div className="relative flex justify-center">
        <Quote
          text="With great power comes great electricity bill"
          by="- Dr. Who"
        />
      </div>
      {/* projects */}
      <ProjectsSection />

      {/* skills */}
      <SkillsSection />
      {/* about me */}
      <AboutSection />

      {/* contacts */}

      <ContactsSection />
    </div>
  );
};

export default page;
