"use client";

import { usePokemonRetrieve } from "@/spec/pokemon/pokemon";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PokemonDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data } = usePokemonRetrieve(id);

  return (
    <div className="flex flex-col gap-6">
      <Link href="/" className="text-primary underline" type="button">
        Back
      </Link>
      <h1 className="text-3xl">{data?.data.name}</h1>
      <main>
        <img
          src={data?.data.sprites.front_default}
          width="200px"
          height="200px"
        />

        <KeyValueDisplay keyName="Species" value={data?.data.species.name} />
        <KeyValueDisplay
          keyName="Base Stat"
          value={String(data?.data.stats?.[0].base_stat)}
        />
        <KeyValueDisplay
          keyName="Weight"
          value={data?.data.weight?.toString()}
        />
      </main>
    </div>
  );
}

const KeyValueDisplay = ({
  keyName,
  value,
}: {
  keyName: string;
  value: string | undefined;
}) => (
  <div className="flex items-center gap-2">
    <strong>{keyName}:</strong>
    <span>{value ?? "N/A"}</span>
  </div>
);
