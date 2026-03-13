import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../api/pokemon";
import { pokemonKeys } from "../lib/queryKeys";

export function usePokemonDetails(idOrName: string | number) {
  return useQuery({
    queryKey: pokemonKeys.detail(idOrName),
    queryFn: () => getPokemonDetails(idOrName),
  });
}
