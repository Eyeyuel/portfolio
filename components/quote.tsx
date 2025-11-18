import React from "react";
import { Card, CardContent } from "./ui/card";
import { QuoteIcon, TextQuote } from "lucide-react";

const Quote = ({ text, by }: { text?: string; by?: string }) => {
  return (
    <Card className="border-none w-fit gap-0 flex flex-col bg-transparent">
      <CardContent className=" relative border p-6">
        <QuoteIcon
          className=" absolute -top-2.5 left-3 scale-x-[-1]"
          fill={"none"}
          stroke="currentcolor"
        />
        <QuoteIcon
          className=" absolute -bottom-2.5 right-3"
          fill={"none"}
          stroke="currentcolor"
        />
        {text}
      </CardContent>
      <CardContent className="self-end border p-6">{by}</CardContent>
    </Card>
  );
};

export default Quote;
