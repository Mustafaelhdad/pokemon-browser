import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ErrorState } from "../components/ErrorState";
import { GridSkeleton } from "../components/GridSkeleton";
import { PaginationControls } from "../components/PaginationControls";
import { PokemonGrid } from "../components/PokemonGrid";
import { usePokemonInfinite } from "../hooks/usePokemonInfinite";
import { usePokemonPage } from "../hooks/usePokemonPage";
import { LoadMoreSection } from "../components/LoadMoreSection";

export const PAGE_SIZE = 20;

type ViewMode = "pagination" | "load-more";

export function PokemonListPage() {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentView = (searchParams.get("view") as ViewMode) || "pagination";

  const { data, isPending, isError, refetch } = usePokemonPage(page, PAGE_SIZE);

  const {
    data: infiniteData,
    isPending: isInfinitePending,
    isError: isInfiniteError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetchNextPageError,
    refetch: refetchInfinite,
  } = usePokemonInfinite(PAGE_SIZE);

  const totalPages = useMemo(() => {
    if (!data) return 0;
    return Math.ceil(data.count / PAGE_SIZE);
  }, [data]);

  const allPokemon = useMemo(() => {
    if (!infiniteData) return [];

    const seen = new Set<string>();
    return infiniteData.pages.flatMap((page) =>
      page.results.filter((pokemon) => {
        if (seen.has(pokemon.name)) return false;
        seen.add(pokemon.name);
        return true;
      }),
    );
  }, [infiniteData]);

  function handleChangeView(view: ViewMode) {
    setSearchParams({ view });
  }

  function handlePageChange(nextPage: number) {
    if (nextPage < 1 || nextPage > totalPages) return;
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main
      className={`min-h-screen px-4 py-8 ${
        currentView === "pagination" ? "bg-slate-100" : "bg-emerald-50"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">⚡️ Pokédex</h1>
          <p className="mt-2 text-sm text-slate-600">
            Discover and explore Pokémon with page controls
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => handleChangeView("pagination")}
              disabled={currentView === "pagination"}
              className={`rounded-md px-4 py-2 text-sm font-medium transition cursor-pointer ${
                currentView === "pagination"
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              Page Controls
            </button>

            <button
              type="button"
              onClick={() => handleChangeView("load-more")}
              disabled={currentView === "load-more"}
              className={`rounded-md px-4 py-2 text-sm font-medium transition cursor-pointer ${
                currentView === "load-more"
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              Infinite Scroll
            </button>
          </div>
        </header>

        {currentView === "load-more" ? (
          isInfinitePending ? (
            <GridSkeleton count={10} />
          ) : isInfiniteError && !infiniteData ? (
            <ErrorState onRetry={() => refetchInfinite()} />
          ) : (
            <>
              <PokemonGrid pokemonList={allPokemon} />
              <LoadMoreSection
                onLoadMore={() => fetchNextPage()}
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                isFetchNextPageError={isFetchNextPageError}
              />
            </>
          )
        ) : isPending ? (
          <GridSkeleton count={10} />
        ) : isError ? (
          <ErrorState onRetry={() => refetch()} />
        ) : data ? (
          <>
            <PokemonGrid pokemonList={data.results} />

            <PaginationControls
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : null}
      </div>
    </main>
  );
}
