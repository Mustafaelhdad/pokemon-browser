import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="mb-6 flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-slate-900 cursor-pointer bg-white px-4 py-2 rounded-md"
    >
      ← Back to List
    </button>
  );
}
