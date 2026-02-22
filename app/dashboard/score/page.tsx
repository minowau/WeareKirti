const dimensions = [
  {
    name: "Sales conversion",
    weight: 35,
    mean: 0.82,
    alpha: 40,
    beta: 9,
    interval: [0.74, 0.88]
  },
  {
    name: "Delivery timeliness",
    weight: 20,
    mean: 0.79,
    alpha: 32,
    beta: 9,
    interval: [0.7, 0.86]
  },
  {
    name: "Audience authenticity",
    weight: 20,
    mean: 0.8,
    alpha: 36,
    beta: 9,
    interval: [0.71, 0.87]
  },
  {
    name: "Contract adherence",
    weight: 10,
    mean: 0.86,
    alpha: 28,
    beta: 5,
    interval: [0.76, 0.93]
  },
  {
    name: "Brand satisfaction",
    weight: 15,
    mean: 0.81,
    alpha: 30,
    beta: 7,
    interval: [0.72, 0.88]
  }
];

export default function ScoreDetailPage() {
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold">
          Kirti score detail
        </h1>
        <p className="text-xs text-[var(--color-text-secondary)]">
          See how your score is built and what to do next.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5">
            <h2 className="text-sm font-semibold">
              Overview
            </h2>
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
              Your current score is 712 on a 0–850 scale with a tight confidence band.
            </p>
          </section>

          <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5">
            <h2 className="text-sm font-semibold">
              Bayesian breakdown
            </h2>
            <div className="mt-3 space-y-3 text-xs text-[var(--color-text-secondary)]">
              {dimensions.map(dimension => (
                <div
                  key={dimension.name}
                  className="rounded-xl bg-black/25 p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {dimension.name}
                      </p>
                      <p className="mt-1 text-[11px]">
                        Weight {dimension.weight}% • mean {Math.round(dimension.mean * 100)}%
                      </p>
                      <p className="mt-1 text-[11px]">
                        α {dimension.alpha}, β {dimension.beta}, 95% interval {Math.round(dimension.interval[0] * 100)}%–{Math.round(dimension.interval[1] * 100)}%
                      </p>
                    </div>
                    <div className="w-24">
                      <div className="h-1.5 rounded-full bg-black/40">
                        <div
                          className="h-1.5 rounded-full bg-[var(--color-accent-blush)]"
                          style={{ width: `${dimension.mean * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-[11px]">
                    What you can do: focus on a few steady campaigns that deliver clean results instead of spikes.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]">
            <h2 className="text-sm font-semibold">
              Temporal discount
            </h2>
            <p className="mt-2">
              Recent campaigns count more than older ones. The default half-life is 12 months.
            </p>
            <p className="mt-2">
              Use this as a guide to focus on consistent work; one-off spikes fade with time.
            </p>
          </section>

          <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]">
            <h2 className="text-sm font-semibold">
              Score explainability
            </h2>
            <p className="mt-2">
              Top positive factors: timely delivery, steady conversions, high satisfaction on longer campaigns.
            </p>
            <p className="mt-2">
              Top negative factors: a few late deliveries and weak fit on niche for one brand.
            </p>
            <p className="mt-2">
              Your score aggregates five dimensions. Each one updates after each campaign using a probabilistic model so no single result overpowers your history.
            </p>
          </section>

          <section
            aria-label="Text-only score summary"
            className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]"
          >
            <h2 className="text-sm font-semibold">
              Text-only export
            </h2>
            <p className="mt-2">
              This text block summarises your current score in a way that can be copied into emails or reports without charts.
            </p>
            <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-black/40 p-3 text-[11px]">
Score 712 on a 0–850 scale with a tight confidence band.

Sales conversion, delivery timeliness, audience authenticity, contract adherence, and brand satisfaction are each tracked with Bayesian parameters (α and β) and a 95% interval.

Recent campaigns have more influence than older ones, and no single event can dominate your history.
            </pre>
          </section>
        </div>
      </section>
    </div>
  );
}
