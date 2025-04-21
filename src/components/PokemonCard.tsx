import { PokemonSummary } from "@/spec/model";

export function PokemonCard({ pokemon }: { pokemon: PokemonSummary }) {
  return (
    <div className="bg-gray-300 hover:bg-gray-200 cursor-pointer hover:-translate-y-1 transition-all p-6 border rounded-lg">
      {pokemon.name}
    </div>
  );
}
