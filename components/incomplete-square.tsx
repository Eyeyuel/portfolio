export function IncompleteSquare({
  className,
}: {
  missingSide?: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute w-5 h-5 lg:w-20 lg:h-20 border-2 border-foreground ${
        className || ""
      }`}
    />
  );
}
