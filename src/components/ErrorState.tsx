type ErrorStateProps = {
  title?: string;
  message?: string;
  onRetry: () => void;
};

export function ErrorState({
  title = "Something went wrong",
  message = "We couldn’t load the Pokémon list. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
      <h2 className="text-lg font-semibold text-red-700">{title}</h2>
      <p className="mt-2 text-sm text-red-600">{message}</p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
      >
        Retry
      </button>
    </div>
  );
}
