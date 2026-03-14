import type { PokemonListItem } from "../types/pokemon";
import { PokemonCard } from "./PokemonCard";

type PokemonGridProps = {
  pokemonList: PokemonListItem[];
};

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </section>
  );
}
