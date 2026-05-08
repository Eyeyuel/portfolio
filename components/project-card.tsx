import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

const ProjectCard = ({
  src,
  description,
  title,
  description2,
  btnText,
  url,
}: {
  src: string | StaticImageData;
  description?: string;
  title: string;
  description2?: string;
  btnText?: string;
  url?: string;
}) => {
  return (
    <Card className="flex h-fit flex-col gap-4 rounded-none bg-transparent">
      <CardContent className="border-b">
        <Image width={150} height={200} alt={title} src={src} />
      </CardContent>

      <CardDescription className="border-b pl-2 text-base">
        {description}
      </CardDescription>

      <CardContent className="flex flex-col gap-2">
        <CardTitle className="text-xl">{title}</CardTitle>

        <CardDescription className="text-base">{description2}</CardDescription>

        {btnText && url && (
          <Link href={url} target="_blank">
            <Button className="w-fit cursor-pointer rounded-none border border-purple bg-transparent text-foreground hover:bg-gray-800">
              {btnText} &#x21ad;
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
