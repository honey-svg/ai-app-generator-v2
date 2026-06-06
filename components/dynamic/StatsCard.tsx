interface StatsCardProps {
  title?: string;
  value?: number;
}

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-sm text-gray-500">
        {title || "Untitled"}
      </h2>

      <p className="mt-2 text-3xl font-bold">
        {value ?? 0}
      </p>
    </div>
  );
}