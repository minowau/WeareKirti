export default function WalletPage() {
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold">
          Wallet and payouts
        </h1>
        <p className="text-xs text-[var(--color-text-secondary)]">
          See available funds, escrow, and how money moves in and out.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <section
          aria-label="Wallet summary and escrow"
          className="space-y-4 rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]"
        >
          <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">
            Wallet summary
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-black/25 p-3">
              <p className="text-[10px] uppercase tracking-[0.18em]">
                Available
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-state-success)]">
                ₹82,000
              </p>
            </div>
            <div className="rounded-xl bg-black/25 p-3">
              <p className="text-[10px] uppercase tracking-[0.18em]">
                Escrow
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-accent-blush)]">
                ₹54,000
              </p>
            </div>
            <div className="rounded-xl bg-black/25 p-3">
              <p className="text-[10px] uppercase tracking-[0.18em]">
                Pending release
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-text-primary)]">
                ₹18,500
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="mt-4 text-xs font-semibold text-[var(--color-text-primary)]">
              Escrow flow
            </h3>
            <p>
              Brands fund campaigns into escrow through payment providers. Once revenue is verified, payouts are computed and released to your wallet.
            </p>
          </div>

          <div className="mt-3 space-y-2">
            <h3 className="text-xs font-semibold text-[var(--color-text-primary)]">
              Escrow timeline
            </h3>
            <ol className="space-y-2 text-[11px]">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0.5 text-[var(--color-accent-blush)]">
                  ●
                </span>
                <div>
                  <p className="font-semibold text-[var(--color-text-primary)]">
                    Funded
                  </p>
                  <p>Brand funds campaign into escrow at the start of the campaign.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0.5 text-[var(--color-text-primary)]">
                  ●
                </span>
                <div>
                  <p className="font-semibold text-[var(--color-text-primary)]">
                    Attributed
                  </p>
                  <p>Revenue events are tracked using links and payment webhooks.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0.5 text-[var(--color-state-success)]">
                  ●
                </span>
                <div>
                  <p className="font-semibold text-[var(--color-text-primary)]">
                    Released
                  </p>
                  <p>After checks and refund windows, funds flow into your wallet.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section
          aria-label="Transaction history and edge cases"
          className="space-y-4 rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]"
        >
          <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">
            History and edge cases
          </h2>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between rounded-lg bg-black/25 p-2">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-state-success)] text-[10px] text-black"
                >
                  ✓
                </span>
                <p>Release from escrow for campaign Coffee Q3.</p>
              </div>
              <span className="text-[10px] text-[var(--color-text-secondary)]">
                Completed
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-black/25 p-2">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-state-error)] text-[10px] text-black"
                >
                  !
                </span>
                <p>Refund adjustment for campaign Fit Sprint.</p>
              </div>
              <span className="text-[10px] text-[var(--color-text-secondary)]">
                Refund
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-black/25 p-2">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-accent-blush)] text-[10px] text-black"
                >
                  ?
                </span>
                <p>Dispute on attribution for campaign Indie Learn.</p>
              </div>
              <span className="text-[10px] text-[var(--color-text-secondary)]">
                In review
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-[var(--color-text-primary)]">
              How disputes and refunds work
            </h3>
            <p>
              When refunds happen, a small reserve is kept aside to handle adjustments. Disputes show up clearly with a reason and expected resolution time.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
