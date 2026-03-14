import { ErrorState } from "./ErrorState";
import { GridSkeleton } from "./GridSkeleton";

type LoadMoreSectionProps = {
  onLoadMore: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isFetchNextPageError?: boolean;
};

export function LoadMoreSection({
  onLoadMore,
  hasNextPage,
  isFetchingNextPage,
  isFetchNextPageError = false,
}: LoadMoreSectionProps) {
  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      {hasNextPage ? (
        <button
          type="button"
          onClick={onLoadMore}
          disabled={isFetchingNextPage}
          className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      ) : (
        <p className="text-sm text-slate-500">
          You have reached the end of the list.
        </p>
      )}

      {isFetchingNextPage ? (
        <GridSkeleton count={10} />
      ) : isFetchNextPageError ? (
        <ErrorState
          message="Failed to load more Pokémon. Please try again."
          onRetry={onLoadMore}
        />
      ) : null}
    </div>
  );
}
