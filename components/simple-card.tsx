import { Card, CardDescription, CardTitle } from "./ui/card";

const SimpleCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card className="rounded-none bg-transparent h-fit">
      <CardTitle className="border-b">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

export default SimpleCard;
