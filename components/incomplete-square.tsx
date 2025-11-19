export function IncompleteSquare({
  missingSide,
  className,
}: {
  missingSide?: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute ${className} w-20 h-20 border-2 border-foreground border-${missingSide}-0`}
    />
  );
}
