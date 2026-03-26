"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-navy font-display">
          Something went wrong
        </h1>
        <p className="mt-4 text-muted-foreground text-md">
          We ran into an unexpected error while loading this page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary-blue px-5 py-2.5 text-white font-semibold"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
