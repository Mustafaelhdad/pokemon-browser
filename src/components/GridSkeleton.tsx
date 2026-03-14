type GridSkeletonProps = {
  count?: number;
};

export function GridSkeleton({ count = 10 }: GridSkeletonProps) {
  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="h-28 w-full animate-pulse rounded-lg bg-slate-200" />
          <div className="mt-3 h-4 w-3/4 animate-pulse rounded bg-slate-200" />
          <div className="mt-2 h-3 w-1/3 animate-pulse rounded bg-slate-200" />
        </div>
      ))}
    </section>
  );
}
