import type { PokemonDetails, PokemonListResponse } from "../types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(
  limit: number,
  offset: number,
): Promise<PokemonListResponse> {
  const response = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch pokemon list");
  }

  const data: PokemonListResponse = await response.json();

  return data;
}

export async function getPokemonDetails(
  idOrName: string | number,
): Promise<PokemonDetails> {
  const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`);

  if (!response.ok) {
    throw new Error("Failed to fetch pokemon details");
  }

  const data: PokemonDetails = await response.json();

  return data;
}
