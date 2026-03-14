export function PokemonDetailsMeasurements({
  height,
  weight,
}: {
  height: number;
  weight: number;
}) {
  return (
    <div className="flex gap-8 text-center">
      <div className="flex flex-col items-center bg-slate-100 rounded-lg py-4 px-6">
        <p className="text-xs text-slate-500">📏 Height</p>
        <p className="text-lg font-bold text-slate-800">
          {(height / 10).toFixed(1)} m
        </p>
      </div>
      <div className="flex flex-col items-center bg-slate-100 rounded-lg py-4 px-6">
        <p className="text-xs text-slate-500">⚖ Weight</p>
        <p className="text-lg font-bold text-slate-800">
          {(weight / 10).toFixed(1)} kg
        </p>
      </div>
    </div>
  );
}
