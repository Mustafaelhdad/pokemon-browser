import type { PokemonStat } from "../../types/pokemon";

export function PokemonDetailsBaseStats({
  pokemonStats,
}: {
  pokemonStats: PokemonStat[];
}) {
  const STAT_BAR_MAX = 150;

  function formatStatName(name: string) {
    const map: Record<string, string> = {
      hp: "HP",
      attack: "Attack",
      defense: "Defense",
      "special-attack": "Sp. Attack",
      "special-defense": "Sp. Defense",
      speed: "Speed",
    };
    return map[name] ?? name;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900">Base Stats</h2>

      <div className="mt-5 space-y-4">
        {pokemonStats.map(({ stat, base_stat }) => (
          <div key={stat.name} className="w-full">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-800">
                {formatStatName(stat.name)}
              </span>

              <span className="text-sm font-medium text-slate-500">
                {base_stat}
              </span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-slate-900 transition-all duration-300"
                style={{
                  width: `${Math.min((base_stat / STAT_BAR_MAX) * 100, 100)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
