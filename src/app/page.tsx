"use client";
import { usePokemonList } from "@/spec/pokemon/pokemon";

export default function Home() {
  const { data, isLoading, isError } = usePokemonList();
  const results = data?.data?.results;

  if (!results || isError) {
    return <div>Could not load pokemons.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">List of Pokemons</h1>
      <main>
        <ul className="list-inside list-disc">
          {results.map((pokemon) => (
            <li key={pokemon.url}>{pokemon.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
