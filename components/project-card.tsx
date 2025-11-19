import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";

const ProjectCard = ({
  src,
  description,
  title,
  description2,
  btnText,
}: {
  src: string;
  description?: string;
  title: string;
  description2?: string;
  btnText: string;
}) => {
  return (
    <Card className="flex flex-col rounded-none bg-transparent h-fit gap-4">
      <CardContent className="border-b">
        <Image
          width={300} // in pixels
          height={200} // in pixels
          alt="face image"
          src={src}
        />
      </CardContent>
      <CardDescription className="border-b text-base pl-2">
        {description}
      </CardDescription>
      <CardContent className="flex flex-col gap-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description2}</CardDescription>
        <Button className="bg-transparent w-fit text-foreground rounded-none border border-purple">
          {btnText} &#x21ad;
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
