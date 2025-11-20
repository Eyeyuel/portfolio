import { ReactNode } from "react";

const Title = ({
  children,
  symbol = "#",
}: {
  children: ReactNode;
  symbol?: string;
}) => {
  return (
    <span className=" text-card-foreground text-3xl font-semibold flex items-center pb-6">
      <span className="text-purple-500">{symbol}</span>
      {children}
    </span>
  );
};

export default Title;
