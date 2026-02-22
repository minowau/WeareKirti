type Deal = {
  id: string;
  brand: string;
  type: "rev-share" | "equity";
  duration: string;
  projectedPayout: string;
  varLabel: string;
};

type DealsListProps = {
  deals: Deal[];
};

export function DealsList(props: DealsListProps) {
  return (
    <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5">
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold">
          Active deals
        </h2>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Live and upcoming campaigns
        </p>
      </header>
      <div className="space-y-3 text-xs text-[var(--color-text-secondary)]">
        {props.deals.length === 0 && (
          <p className="text-[var(--color-text-secondary)]">
            No active deals yet. Discover campaigns that match your niche and comfort.
          </p>
        )}
        {props.deals.map(deal => (
          <article
            key={deal.id}
            className="flex items-start justify-between rounded-xl bg-black/30 p-3"
          >
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                {deal.brand}
              </p>
              <p className="mt-1 text-[11px]">
                {deal.type === "rev-share" ? "Rev share" : "Equity linked"} • {deal.duration}
              </p>
              <p className="mt-1 text-[11px]">
                Projected {deal.projectedPayout}
              </p>
            </div>
            <div className="text-right text-[10px]">
              <p className="rounded-full bg-black/40 px-2 py-0.5 text-[var(--color-state-error)]">
                {deal.varLabel}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

