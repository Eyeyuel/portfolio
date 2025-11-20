import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

const SimpleCard = ({
  title,
  description,
  btnText,
  url,
}: {
  title: string;
  description: string;
  btnText?: string;
  url?: string;
}) => {
  return (
    <Card className="rounded-none bg-transparent h-fit p-0 gap-0">
      <CardTitle className="border-b p-2">{title}</CardTitle>
      <CardContent className="p-2 pb-5 space-y-6">
        <CardDescription className=" leading-relaxed">
          {description}
        </CardDescription>
        {btnText && (
          <Link
            href={url || "#"}
            className=" py-1 pr-5 pl-1 w-fit text-card-foreground text-sm border border-purple"
          >
            {btnText} &#x21ad;
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
