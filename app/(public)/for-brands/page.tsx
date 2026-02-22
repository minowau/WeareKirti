export default function ForBrandsPage() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center bg-[var(--color-background)] px-6 py-10 text-center"
    >
      <section className="max-w-2xl space-y-6">
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Brands on Kirti
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Discover verified creators with explainable trust scores, clear deal terms, and banking-style reporting.
        </p>
        <div className="grid gap-3 text-left text-xs text-[var(--color-text-secondary)] sm:grid-cols-3">
          <div className="rounded-xl bg-black/20 p-3">
            <p className="font-semibold text-[var(--color-text-primary)]">
              Explainable scores
            </p>
            <p className="mt-1">
              Understand how each campaign and signal influences creator trust.
            </p>
          </div>
          <div className="rounded-xl bg-black/20 p-3">
            <p className="font-semibold text-[var(--color-text-primary)]">
              Safer payouts
            </p>
            <p className="mt-1">
              Use escrow-linked payouts and simple templates to reduce risk.
            </p>
          </div>
          <div className="rounded-xl bg-black/20 p-3">
            <p className="font-semibold text-[var(--color-text-primary)]">
              Transparent deals
            </p>
            <p className="mt-1">
              Track performance, disputes, and satisfaction in one view.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

