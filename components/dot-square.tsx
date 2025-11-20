export function DotSquare({
  className,
  gap = 4,
  col = 5,
  row = 5,
}: {
  className?: string;
  gap?: number;
  col?: number;
  row?: number;
}) {
  const size = 5; // 5x5 grid
  const dots = Array.from({ length: col * row });

  return (
    <div
      // need to send grid-cols-${col} using the className prop
      className={`absolute grid gap-${gap} w-fit p-2 ${className || ""}`}
    >
      {dots.map((_, i) => (
        <div
          key={i}
          className={`rounded-full bg-foreground`}
          style={{ width: 4, height: 4 }}
        />
      ))}
    </div>
  );
}
