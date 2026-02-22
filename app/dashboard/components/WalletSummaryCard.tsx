type WalletSummaryCardProps = {
  available: number;
  escrow: number;
  equity: number;
  currency: string;
};

function formatAmount(value: number, currency: string) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency
  }).format(value);
}

export function WalletSummaryCard(props: WalletSummaryCardProps) {
  return (
    <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5">
      <header className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">
          Wallet and earnings
        </h2>
        <span className="text-xs text-[var(--color-text-secondary)]">
          Live preview
        </span>
      </header>

      <div className="mt-4 grid gap-3 text-xs text-[var(--color-text-secondary)] sm:grid-cols-3">
        <div className="rounded-xl bg-black/30 p-3">
          <p className="text-[10px] uppercase tracking-[0.18em]">
            Available
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--color-state-success)]">
            {formatAmount(props.available, props.currency)}
          </p>
        </div>
        <div className="rounded-xl bg-black/30 p-3">
          <p className="text-[10px] uppercase tracking-[0.18em]">
            Escrow
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--color-accent-blush)]">
            {formatAmount(props.escrow, props.currency)}
          </p>
        </div>
        <div className="rounded-xl bg-black/30 p-3">
          <p className="text-[10px] uppercase tracking-[0.18em]">
            Equity value
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--color-text-primary)]">
            {formatAmount(props.equity, props.currency)}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 text-xs sm:flex-row">
        <button
          type="button"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-[var(--color-accent-blush)] px-4 py-2 font-semibold text-black"
        >
          Withdraw
        </button>
        <button
          type="button"
          className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/10 bg-black/20 px-4 py-2 font-semibold text-[var(--color-text-primary)]"
        >
          Request MEG
        </button>
      </div>
    </section>
  );
}

