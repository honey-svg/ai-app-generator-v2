interface LoadingSkeletonProps {
  count?: number;
  height?: "sm" | "md" | "lg";
}

export default function LoadingSkeleton({
  count = 3,
  height = "md",
}: LoadingSkeletonProps) {
  const heightClass = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  }[height];

  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`${heightClass} bg-gray-200 rounded-lg animate-pulse`}
        />
      ))}
    </div>
  );
}
