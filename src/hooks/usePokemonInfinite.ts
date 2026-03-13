import { useInfiniteQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api/pokemon";
import { pokemonKeys } from "../lib/queryKeys";

export function usePokemonInfinite(limit: number) {
  return useInfiniteQuery({
    queryKey: pokemonKeys.loadMore({ limit }),
    initialPageParam: 0,
    queryFn: ({ pageParam }) => getPokemonList(limit, pageParam),
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;

      const nextUrl = new URL(lastPage.next);
      const nextOffset = nextUrl.searchParams.get("offset");

      return nextOffset ? parseInt(nextOffset) : undefined;
    },
  });
}
