import { useNavigate } from "react-router-dom";

export function BackButton({ label = "Back", className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={`inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground hover:border-navy ${className}`}
    >
      <span aria-hidden="true">←</span>
      {label}
    </button>
  );
}
