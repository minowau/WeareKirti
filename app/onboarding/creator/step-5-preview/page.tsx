"use client";

import Link from "next/link";

const mockRange: [number, number] = [400, 520];

export default function CreatorStep5PreviewPage() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center bg-[var(--color-background)] px-6 py-10"
    >
      <section className="w-full max-w-md space-y-6 rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-6 shadow-lg shadow-black/40">
        <header className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Step 5 of 5
          </p>
          <h1 className="text-xl font-semibold">
            Preview your Kirti
          </h1>
          <p className="text-xs text-[var(--color-text-secondary)]">
            This is a private range only. The exact score appears after deeper checks.
          </p>
        </header>

        <div className="space-y-4 text-sm">
          <div className="rounded-xl bg-black/30 p-4 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
              Estimated Kirti range
            </p>
            <p className="mt-2 text-3xl font-semibold">
              {mockRange[0]}–{mockRange[1]}
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
              Scale 0–850
            </p>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Your score will update once we have verified connectors, more campaign data, and stronger signals.
          </p>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Recent campaigns have more weight than older work. You can always see why a score moved.
          </p>

          <Link
            href="/dashboard"
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-accent-blush)] px-4 py-2 text-sm font-semibold text-black"
          >
            Go to my dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}

