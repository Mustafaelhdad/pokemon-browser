import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api/pokemon";
import { pokemonKeys } from "../lib/queryKeys";

export function usePokemonPage(page: number, limit: number) {
  const offset = (page - 1) * limit;

  return useQuery({
    queryKey: pokemonKeys.list({ page, limit }),
    queryFn: () => getPokemonList(limit, offset),
  });
}
