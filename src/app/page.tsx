"use client";
import { usePokemonList } from "@/spec/pokemon/pokemon";

export default function Home() {
  const { data } = usePokemonList();

  console.log("data:", data);

  return <div>Hello World</div>;
}
