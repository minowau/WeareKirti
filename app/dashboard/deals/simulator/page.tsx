"use client";

import { useMemo, useState } from "react";

type Inputs = {
  reach: number;
  conversionRate: number;
  durationMonths: number;
  equityPercent: number;
  postMoneyValuation: number;
};

function computeOutputs(values: Inputs) {
  const conversions = values.reach * (values.conversionRate / 100);
  const baseValuePerConversion = 80;
  const p50 = conversions * baseValuePerConversion;
  const p10 = p50 * 0.6;
  const p90 = p50 * 1.4;
  const var005 = p50 - p10;
  let equityFairValue = 0;
  if (values.equityPercent > 0 && values.postMoneyValuation > 0) {
    equityFairValue = (values.postMoneyValuation * values.equityPercent) / 100;
  }
  const suggestedRevShare = Math.min(25, 10 + values.durationMonths * 1.2);
  return {
    p50,
    p10,
    p90,
    var005,
    equityFairValue,
    suggestedRevShare
  };
}

export default function DealSimulatorPage() {
  const [reach, setReach] = useState(50000);
  const [conversionRate, setConversionRate] = useState(1.5);
  const [durationMonths, setDurationMonths] = useState(3);
  const [equityPercent, setEquityPercent] = useState(0.5);
  const [postMoneyValuation, setPostMoneyValuation] = useState(50000000);

  const result = useMemo(
    () =>
      computeOutputs({
        reach,
        conversionRate,
        durationMonths,
        equityPercent,
        postMoneyValuation
      }),
    [reach, conversionRate, durationMonths, equityPercent, postMoneyValuation]
  );

  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold">
          Deal simulator
        </h1>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Run a quick, private what-if before you say yes to a campaign.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]">
          <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">
            Inputs
          </h2>
          <div className="mt-3 space-y-3">
            <label className="block space-y-1">
              <span>Expected reach</span>
              <input
                type="number"
                min={0}
                value={reach}
                onChange={event => setReach(Number(event.target.value) || 0)}
                className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
              />
            </label>
            <label className="block space-y-1">
              <span>Expected conversion (%)</span>
              <input
                type="number"
                min={0}
                max={100}
                step={0.1}
                value={conversionRate}
                onChange={event => setConversionRate(Number(event.target.value) || 0)}
                className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
              />
            </label>
            <label className="block space-y-1">
              <span>Campaign duration (months)</span>
              <input
                type="number"
                min={1}
                max={24}
                value={durationMonths}
                onChange={event => setDurationMonths(Number(event.target.value) || 1)}
                className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
              />
            </label>
            <label className="block space-y-1">
              <span>Equity offered (%)</span>
              <input
                type="number"
                min={0}
                max={10}
                step={0.1}
                value={equityPercent}
                onChange={event => setEquityPercent(Number(event.target.value) || 0)}
                className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
              />
            </label>
            <label className="block space-y-1">
              <span>Post-money valuation (₹)</span>
              <input
                type="number"
                min={0}
                value={postMoneyValuation}
                onChange={event => setPostMoneyValuation(Number(event.target.value) || 0)}
                className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
              />
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <section
            aria-label="Projected earnings"
            className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]"
          >
            <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">
              Projected earnings
            </h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-black/25 p-3">
                <p className="text-[10px] uppercase tracking-[0.18em]">
                  p10
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--color-text-primary)]">
                  ₹{Math.round(result.p10).toLocaleString("en-IN")}
                </p>
              </div>
              <div className="rounded-xl bg-black/25 p-3">
                <p className="text-[10px] uppercase tracking-[0.18em]">
                  p50
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--color-text-primary)]">
                  ₹{Math.round(result.p50).toLocaleString("en-IN")}
                </p>
              </div>
              <div className="rounded-xl bg-black/25 p-3">
                <p className="text-[10px] uppercase tracking-[0.18em]">
                  p90
                </p>
                <p className="mt1 text-sm font-semibold text-[var(--color-text-primary)]">
                  ₹{Math.round(result.p90).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
            <p className="mt-3">
              VaR 5% band (downside from p50) is about ₹{Math.round(result.var005).toLocaleString("en-IN")}.
            </p>
          </section>

          <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]">
            <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">
              Equity and rev share guidance
            </h2>
            <p className="mt-2">
              Suggested rev share for your tier and this risk band is around {Math.round(result.suggestedRevShare)}%.
            </p>
            {result.equityFairValue > 0 && (
              <p className="mt-2">
                The implied fair value of the offered equity, at this post-money valuation, is about ₹{Math.round(result.equityFairValue).toLocaleString("en-IN")}.
              </p>
            )}
            <p className="mt-2">
              Vesting is usually staged with a short cliff then monthly unlocks. The final product will show a clear schedule before you agree.
            </p>
          </section>
        </section>
      </section>
    </div>
  );
}
