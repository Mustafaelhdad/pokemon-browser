import { useParams } from "react-router-dom";

export function PokemonDetailsPage() {
  const { id } = useParams();

  return (
    <main>
      <main>
        <h1>Pokemon Details</h1>
        <p>Pokemon ID: {id}</p>
      </main>
    </main>
  );
}
