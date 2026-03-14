import { RetryButton } from "./RetryButton";

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

      <RetryButton onClick={onRetry} />
    </div>
  );
}
