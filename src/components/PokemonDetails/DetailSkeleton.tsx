export function DetailSkeleton() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="h-32 animate-pulse bg-gradient-to-r from-purple-300 to-pink-200" />
        <div className="grid gap-8 p-6 md:grid-cols-2">
          <div className="flex flex-col items-center gap-4">
            <div className="h-48 w-48 animate-pulse rounded-full bg-slate-200" />
            <div className="h-6 w-24 animate-pulse rounded bg-slate-200" />

            <div className="flex gap-8">
              <div className="h-12 w-16 animate-pulse rounded bg-slate-200" />
              <div className="h-12 w-16 animate-pulse rounded bg-slate-200" />
            </div>
          </div>

          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 animate-pulse rounded bg-slate-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
