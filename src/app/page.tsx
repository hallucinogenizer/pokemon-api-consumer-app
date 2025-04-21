"use client";
import { PageNavigator } from "@/components/PageNavigator";
import { PokemonCard } from "@/components/PokemonCard";
import { PokemonLoadingCard } from "@/components/PokemonLoadingCard";
import { usePokemonList } from "@/spec/pokemon/pokemon";
import { useState } from "react";

const PAGE_SIZE = 20;

export default function Home() {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const { data, isLoading, isError } = usePokemonList({
    offset: pageIndex,
    limit: PAGE_SIZE,
  });
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
      <PageNavigator
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        pageSize={PAGE_SIZE}
        totalResults={data?.data.count}
      />
    </div>
  );
}
