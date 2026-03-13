import type { FallbackProps } from "react-error-boundary";

export const AppErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const message =
    error instanceof Error ? error.message : "An unexpected error occurred.";

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-red-600">Application error</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          The app hit an unexpected runtime error. Try again, or reload the
          page.
        </p>

        <div className="mt-4 rounded-xl bg-slate-100 p-3 text-sm text-slate-700">
          {message}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={resetErrorBoundary}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Try again
          </button>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Reload page
          </button>
        </div>
      </div>
    </div>
  );
};
