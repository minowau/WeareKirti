export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold">
          Settings and compliance
        </h1>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Manage consents, transparency, and data rights in one place.
        </p>
      </header>

      <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]">
        <h2 className="text-sm font-semibold">
          Consent center
        </h2>
        <ul className="mt-3 space-y-2">
          <li>
            <span className="font-semibold text-[var(--color-text-primary)]">
              Score computation
            </span>
            <p>
              Required so your Kirti score and insights can be shown to you.
            </p>
            <p className="mt-1 text-[10px]">
              Last updated 2025-01-03, version 1.2.
            </p>
          </li>
          <li>
            <span className="font-semibold text-[var(--color-text-primary)]">
              Model learning
            </span>
            <p>
              Optional. When enabled, anonymized signals improve fairness for similar creators.
            </p>
          </li>
          <li>
            <span className="font-semibold text-[var(--color-text-primary)]">
              Public profile card
            </span>
            <p>
              Controls whether a light profile with tier and niche appears to brands.
            </p>
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]">
        <h2 className="text-sm font-semibold">
          Data rights
        </h2>
        <p className="mt-2">
          You can export a human-readable summary of your data or request deletion where laws allow. In the full product, this area offers simple buttons to start each request with a short confirmation step.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-full bg-black/25 px-3 py-1.5 text-[10px] font-semibold text-[var(--color-text-primary)]"
          >
            Request data export
          </button>
          <button
            type="button"
            className="rounded-full bg-black/25 px-3 py-1.5 text-[10px] font-semibold text-[var(--color-state-error)]"
          >
            Request deletion
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]">
        <h2 className="text-sm font-semibold">
          Transparency and processing logs
        </h2>
        <p className="mt-2">
          The product keeps a short audit trail of key events such as score updates and payout releases. You can also see which fields are used for scoring and how long each type of data is stored.
        </p>
        <ul className="mt-3 space-y-1 text-[11px]">
          <li>
            Creator profile fields are used to personalise dashboards and are stored while your account is active.
          </li>
          <li>
            Campaign metrics and payout events are used for scoring and are kept for audit windows only.
          </li>
          <li>
            Optional model-learning signals are anonymized and cannot be traced back to you.
          </li>
        </ul>
      </section>
    </div>
  );
}

