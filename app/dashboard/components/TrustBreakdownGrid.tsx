type TrustDimension = {
  name: string;
  weight: number;
  score: number;
};

type TrustBreakdownGridProps = {
  dimensions: TrustDimension[];
};

export function TrustBreakdownGrid(props: TrustBreakdownGridProps) {
  return (
    <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5">
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold">
          Trust breakdown
        </h2>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Weighted view across five dimensions
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2">
        {props.dimensions.map(dimension => {
          const percent = Math.round((dimension.score / 850) * 100);
          return (
            <div
              key={dimension.name}
              className="rounded-xl bg-black/30 p-3 text-xs text-[var(--color-text-secondary)]"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[var(--color-text-primary)]">
                  {dimension.name}
                </p>
                <span className="text-[10px]">
                  {dimension.weight}%
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="relative h-8 w-8 rounded-full border border-[var(--color-accent-blush)]">
                  <div
                    className="absolute inset-1 rounded-full bg-[var(--color-accent-blush)]/20"
                    style={{ clipPath: `inset(${100 - percent}% 0 0 0)` }}
                  />
                  <span className="relative flex h-full w-full items-center justify-center text-[10px] text-[var(--color-accent-blush)]">
                    {percent}%
                  </span>
                </div>
                <div className="flex-1">
                  <div className="h-1.5 rounded-full bg-black/40">
                    <div
                      className="h-1.5 rounded-full bg-[var(--color-accent-blush)]"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <p className="mt-1 text-[10px]">
                    Score {dimension.score} on a 0–850 scale.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

