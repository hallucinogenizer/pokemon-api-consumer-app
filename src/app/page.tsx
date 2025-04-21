"use client";
import { PokemonCard } from "@/components/PokemonCard";
import { PokemonLoadingCard } from "@/components/PokemonLoadingCard";
import { usePokemonList } from "@/spec/pokemon/pokemon";

export default function Home() {
  const { data, isLoading, isError } = usePokemonList();
  const results = data?.data?.results;

  if (isError) {
    return <div>Could not load pokemons.</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">List of Pokemons</h1>
      <main className="grid grid-cols-5 gap-x-6 gap-y-4">
        {isLoading || !results
          ? Array.from("x".repeat(15)).map((_, i) => (
              <PokemonLoadingCard key={i} />
            ))
          : results.map((pokemon) => (
              <PokemonCard key={pokemon.url} pokemon={pokemon} />
            ))}
      </main>
    </div>
  );
}
