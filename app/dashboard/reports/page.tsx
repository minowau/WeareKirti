export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold">
          Help and reports
        </h1>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Find a clear trail of key events and export simple summaries.
        </p>
      </header>

      <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]">
        <h2 className="text-sm font-semibold">
          Help and support
        </h2>
        <p className="mt-2">
          In the live product this page links to guides on how scores work, how payouts are handled, and what to do if a campaign goes off track.
        </p>
      </section>

      <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]">
        <h2 className="text-sm font-semibold">
          Light audit log
        </h2>
        <p className="mt-2">
          A simple chronological list of events such as new deals, score updates, and payout releases lives here in the full version. This preview keeps examples static and avoids any backend connections.
        </p>
      </section>
    </div>
  );
}

