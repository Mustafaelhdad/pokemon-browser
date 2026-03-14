export function PokemonDetailsImage({ sprite, name }: { sprite: string; name: string }) {
  return (
    <div className="flex h-60 w-60 items-center justify-center rounded-full bg-slate-100">
      {sprite ? (
        <img
          src={sprite}
          alt={name}
          className="h-56 w-56 object-contain"
        />
      ) : (
        <span className="text-slate-400">No image</span>
      )}
    </div>
  );
}
