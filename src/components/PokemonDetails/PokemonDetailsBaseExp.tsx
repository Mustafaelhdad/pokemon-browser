export function PokemonDetailsBaseExp({ baseExp }: { baseExp: number }) {
  return (
    <>
      {baseExp !== null && (
        <div>
          <h2 className="text-lg font-bold text-slate-800">Base Experience</h2>
          <p className="mt-1 text-xl font-bold text-purple-600">{baseExp} XP</p>
        </div>
      )}
    </>
  );
}
