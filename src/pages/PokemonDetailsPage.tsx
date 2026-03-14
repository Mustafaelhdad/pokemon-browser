import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../hooks/usePokemonDetails";
import { ErrorState } from "../components/ErrorState";
import { DetailSkeleton } from "../components/PokemonDetails/DetailSkeleton";
import { BackButton } from "../components/PokemonDetails/BackButton";
import { PokemonDetailsBaseStats } from "../components/PokemonDetails/PokemonDetailsBaseStats";
import { PokemonDetailsHeader } from "../components/PokemonDetails/PokemonDetiailsHeader";
import { PokemonDetailsAbilities } from "../components/PokemonDetails/PokemonDetailsAbilities";
import { PokemonDetailsBaseExp } from "../components/PokemonDetails/PokemonDetailsBaseExp";
import { PokemonDetailsTypeBadge } from "../components/PokemonDetails/PokemonDetailsTypeBadge";
import { PokemonDetailsMeasurements } from "../components/PokemonDetails/PokemonDetailsMeasurements";
import { PokemonDetailsImage } from "../components/PokemonDetails/PokemonDetailsImage";

export function PokemonDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data: pokemon, isPending, isError, refetch } = usePokemonDetails(id!);

  if (isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-pink-50">
        <DetailSkeleton />
      </main>
    );
  }

  if (isError || !pokemon) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-pink-50 p-4">
        <ErrorState
          title="Pokemon not found"
          message="We couldn't load this Pokémon's details. Please try again."
          onRetry={() => refetch()}
        />
      </main>
    );
  }

  const sprite =
    pokemon.sprites.other?.["official-artwork"]?.front_default ??
    pokemon.sprites.front_default;

  return (
    <main className="min-h-screen px-4 py-8 bg-pink-50">
      <div className="mx-auto w-full max-w-6xl">
        <BackButton />

        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <PokemonDetailsHeader pokemon={pokemon} />

            <div className="grid gap-8 p-6 md:grid-cols-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <PokemonDetailsImage
                  sprite={sprite ?? ""}
                  name={pokemon.name ?? ""}
                />

                <PokemonDetailsTypeBadge pokemonTypes={pokemon.types} />

                <PokemonDetailsMeasurements
                  height={pokemon.height}
                  weight={pokemon.weight}
                />
              </div>

              <div className="flex flex-col gap-6">
                <PokemonDetailsBaseStats pokemonStats={pokemon.stats} />

                <PokemonDetailsAbilities abilities={pokemon.abilities} />

                <PokemonDetailsBaseExp baseExp={pokemon.base_experience ?? 0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
