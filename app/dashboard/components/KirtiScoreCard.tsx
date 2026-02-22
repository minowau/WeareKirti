type KirtiScoreCardProps = {
  score: number;
  tier: string;
  confidence: number;
  lastUpdated: string;
};

export function KirtiScoreCard(props: KirtiScoreCardProps) {
  const rangeLow = Math.max(0, Math.round(props.score - props.confidence));
  const rangeHigh = Math.min(850, Math.round(props.score + props.confidence));

  return (
    <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5">
      <header className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Kirti score
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <p className="text-3xl font-semibold">
              {props.score}
            </p>
            <span className="rounded-full bg-[var(--color-accent-platinum)]/15 px-2 py-0.5 text-xs font-semibold text-[var(--color-accent-platinum)]">
              {props.tier}
            </span>
          </div>
        </div>
        <div className="text-right text-xs text-[var(--color-text-secondary)]">
          <p>
            ±{props.confidence} range
          </p>
          <p className="mt-1">
            {rangeLow}–{rangeHigh}
          </p>
          <p className="mt-1 text-[10px]">
            Updated {props.lastUpdated}
          </p>
        </div>
      </header>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
          <span>Score band</span>
          <span>0–850</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-black/40">
          <div
            className="h-2 rounded-full bg-[var(--color-accent-blush)]"
            style={{ width: `${(props.score / 850) * 100}%` }}
          />
        </div>
        <button
          type="button"
          className="mt-3 text-xs font-semibold text-[var(--color-accent-blush)]"
        >
          Why this changed
        </button>
      </div>
    </section>
  );
}

