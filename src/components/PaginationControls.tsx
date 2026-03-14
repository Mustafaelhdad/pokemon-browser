import { PAGE_SIZE } from "../pages/PokemonListPage";

type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

type PaginationItem = number | "ellipsis";

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function getPaginationItems(
  currentPage: number,
  totalPages: number,
): PaginationItem[] {
  if (totalPages <= 7) {
    return range(1, totalPages);
  }

  const items: PaginationItem[] = [1];

  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(totalPages - 1, currentPage + 1);

  if (startPage > 2) {
    items.push("ellipsis");
  }

  for (let page = startPage; page <= endPage; page += 1) {
    items.push(page);
  }

  if (endPage < totalPages - 1) {
    items.push("ellipsis");
  }

  items.push(totalPages);

  return items;
}

export function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  const items = getPaginationItems(currentPage, totalPages);

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
          <span aria-hidden="true">‹</span>
          <span>Previous</span>
        </button>

        {items.map((item, index) =>
          item === "ellipsis" ? (
            <span key={`ellipsis-${index}`} className="px-2 text-slate-500">
              ...
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              className={`rounded-md px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm font-medium transition cursor-pointer ${
                item === currentPage
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {item}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
          <span>Next</span>
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <p className="text-sm text-slate-500">
        Page {currentPage} of {totalPages} ({PAGE_SIZE} Pokémon shown)
      </p>
    </div>
  );
}
