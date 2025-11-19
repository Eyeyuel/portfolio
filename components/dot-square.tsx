export function DotSquare({
  className,
  gap = 4,
}: {
  className?: string;
  gap?: number;
}) {
  const size = 5; // 5x5 grid
  const dots = Array.from({ length: size * size });

  return (
    <div
      className={`absolute grid grid-cols-5 gap-${gap} w-fit p-2 ${
        className || ""
      }`}
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
