import { Link } from "react-router-dom";
import type { PokemonListItem } from "../types/pokemon";

type PokemonCardProps = {
  pokemon: PokemonListItem;
};

function getPokemonIdFromUrl(url: string) {
  const segments = url.split("/").filter(Boolean);
  return segments[segments.length - 1];
}

function getPokemonImageUrl(id: string) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

function formatPokemonName(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const pokemonId = getPokemonIdFromUrl(pokemon.url);
  const imageUrl = getPokemonImageUrl(pokemonId);

  return (
    <Link
      to={`/pokemon/${pokemonId}`}
      className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <article className="flex flex-col items-center text-center">
        <div className="flex h-28 w-full items-center justify-center rounded-lg bg-slate-100">
          <img
            src={imageUrl}
            alt={pokemon.name}
            className="h-24 w-24 object-contain"
            loading="lazy"
          />
        </div>

        <h2 className="mt-3 text-sm font-semibold text-slate-900">
          {formatPokemonName(pokemon.name)}
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          #{pokemonId.padStart(3, "0")}
        </p>
      </article>
    </Link>
  );
}
