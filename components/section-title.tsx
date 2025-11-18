import { Link } from "lucide-react";
import React from "react";

const SectionTitle = () => {
  return (
    <span className=" text-xl flex items-center gap-2 pb-6 pt-6">
      <span className="text-purple-500">#</span>
      skills
      <div className="h-0.5 w-[40%] bg-purple"></div>
      <Link className="text-base ml-auto" href={"/projects"}>
        View all ⟿
      </Link>
    </span>
  );
};

export default SectionTitle;
