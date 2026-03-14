type RetryButtonProps = {
  onClick: () => void;
  label?: string;
};

export function RetryButton({ onClick, label = "Retry" }: RetryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
    >
      {label}
    </button>
  );
}
