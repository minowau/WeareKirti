export default function DealsPage() {
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold">
          Active deals
        </h1>
        <p className="text-xs text-[var(--color-text-secondary)]">
          See live campaigns, key terms, and simple risk hints.
        </p>
      </header>

      <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]">
        <p>
          This view will list every active campaign with brand, structure, duration, and payout estimates. Today it shows a compact preview in the home dashboard.
        </p>
      </section>
    </div>
  );
}

