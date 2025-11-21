const HomeTitle = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className="text-xl flex items-center gap-2 text-card-foreground">
      <span className="text-purple">#</span>
      {children}
      <div
        className={`h-0.5 w-[40%] bg-purple inline-block ${className}`}
      ></div>
    </div>
  );
};

export default HomeTitle;
