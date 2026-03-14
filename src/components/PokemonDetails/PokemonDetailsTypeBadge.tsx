import type { PokemonType } from "../../types/pokemon";
import { formatName } from "../../utils/helpers";
import { TYPE_COLORS } from "../../types/pokemon";

export function PokemonDetailsTypeBadge({
  pokemonTypes,
}: {
  pokemonTypes: PokemonType[];
}) {
  return (
    <div className="flex gap-2">
      {pokemonTypes.map(({ type }) => (
        <span
          key={type.name}
          className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${TYPE_COLORS[type.name] ?? "bg-gray-400"}`}
        >
          {formatName(type.name)}
        </span>
      ))}
    </div>
  );
}
