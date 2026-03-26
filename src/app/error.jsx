"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-navy font-display">
          Something went wrong
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page could not be rendered. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-full bg-navy px-5 py-2 text-white font-semibold hover:bg-primary-blue"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
