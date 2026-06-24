import ContactsContent from "@/components/contacts-content";
import { DotSquare } from "@/components/dot-square";
import { IncompleteSquare } from "@/components/incomplete-square";
import SocialLinks from "@/components/social-links";
import Title from "@/components/title";

const page = () => {
  return (
    <div>
      <IncompleteSquare className="top-[30vh] right-0 h-30 w-[50px] border-r-0" />
      <DotSquare col={3} row={4} className="top-[50vh] left-2 grid-cols-3" />
      <DotSquare col={3} row={1} className="top-[117vh] right-0 grid-cols-3" />
      <Title symbol="/">contacts</Title>
      <ContactsContent />
      <Title>all-media</Title>
      <SocialLinks />
    </div>
  );
};

export default page;
