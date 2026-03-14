import { formatName } from "../../utils/helpers";
import type { PokemonDetails } from "../../types/pokemon";

export function PokemonDetailsHeader({ pokemon }: { pokemon: PokemonDetails }) {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-400 px-6 py-8 text-center text-white">
      <h1 className="text-2xl font-bold">⚡ {formatName(pokemon.name)}</h1>
      <p className="mt-1 text-sm text-white/80">
        #{String(pokemon.id).padStart(3, "0")}
      </p>
    </div>
  );
}
