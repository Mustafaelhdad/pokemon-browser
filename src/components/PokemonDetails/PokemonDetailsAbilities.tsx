import type { PokemonAbility } from "../../types/pokemon";
import { formatName } from "../../utils/helpers";

export function PokemonDetailsAbilities({
  abilities,
}: {
  abilities: PokemonAbility[];
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-slate-800">Abilities</h2>

      <ul className="mt-2 flex flex-col items-start gap-2">
        {abilities.map(({ ability, is_hidden }) => (
          <li
            key={ability.name}
            className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium ${
              is_hidden
                ? "bg-slate-200 text-slate-500"
                : "bg-white text-slate-800 shadow-sm ring-1 ring-slate-200"
            }`}
          >
            {formatName(ability.name)}
            {is_hidden && (
              <span className="text-xs text-slate-400">(Hidden)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
