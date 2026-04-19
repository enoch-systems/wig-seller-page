export default function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="relative overflow-hidden mb-4 rounded-2xl bg-gray-200">
        <div className="w-full h-[350px] bg-gray-200" />
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-6 bg-gray-200 rounded w-1/4" />
      </div>
    </div>
  );
}
