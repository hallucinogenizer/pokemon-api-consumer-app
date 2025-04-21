import { PokemonSummary } from "@/spec/model";
import Link from "next/link";

export function PokemonCard({ pokemon }: { pokemon: PokemonSummary }) {
  const splitPokemonUrl = pokemon.url.split("/");
  const pokemonId = splitPokemonUrl[splitPokemonUrl.length - 2];
  return (
    <Link
      href={`/pokemon/${pokemonId}`}
      className="bg-gray-300 hover:bg-gray-200 cursor-pointer hover:-translate-y-1 transition-all p-6 border rounded-lg"
    >
      {pokemon.name}
    </Link>
  );
}
