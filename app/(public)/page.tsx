"use client";

import Link from "next/link";
import { useState } from "react";

type EstimateInputs = {
  followers: number;
  engagement: number;
  niche: string;
};

function estimateKirtiRange(values: EstimateInputs): [number, number] {
  const base = 300;
  const followerScore = Math.min(values.followers / 10000, 1) * 200;
  const engagementScore = Math.min(values.engagement / 10, 1) * 200;
  const nicheBoost = values.niche.length > 0 ? 50 : 0;
  const center = Math.min(base + followerScore + engagementScore + nicheBoost, 820);
  const spread = 40;
  return [Math.max(0, Math.round(center - spread)), Math.min(850, Math.round(center + spread))];
}

export default function LandingPage() {
  const [followers, setFollowers] = useState(0);
  const [engagement, setEngagement] = useState(2.5);
  const [niche, setNiche] = useState("");
  const [range, setRange] = useState<[number, number] | null>(null);

  const handleEstimate = () => {
    const nextRange = estimateKirtiRange({ followers, engagement, niche });
    setRange(nextRange);
  };

  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center bg-[radial-gradient(circle_at_top,_#17171c,_#0f0f12)] px-4 py-10 text-center sm:px-6"
    >
      <section className="w-full max-w-4xl space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Creator side
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            #whatsurkirti
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            See a calm, banking-grade view of your creator trust, deals, and payouts.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/onboarding/creator/step-1-basic"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-blush)] px-6 py-2 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Get my Kirti score
          </Link>
          <Link
            href="/(public)/for-brands"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent-blush)] px-6 py-2 text-sm font-semibold text-[var(--color-accent-blush)] hover:bg-[var(--color-surface-card)]"
          >
            For brands
          </Link>
        </div>

        <section className="grid gap-6 text-left text-xs text-[var(--color-text-secondary)] md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <section
            aria-label="Estimate my Kirti"
            className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-5 shadow-lg shadow-black/40"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold">
                  Estimate my Kirti
                </h2>
                <p className="mt-1 text-[11px] text-[var(--color-text-secondary)]">
                  Nano calculator using your main channel snapshot.
                </p>
              </div>
              <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-blush)]">
                Private
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block space-y-1">
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    Followers (main platform)
                  </span>
                  <input
                    type="number"
                    min={0}
                    value={followers || ""}
                    onChange={event => setFollowers(Number(event.target.value) || 0)}
                    className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none ring-0 focus:border-[var(--color-accent-blush)]"
                    aria-label="Follower count"
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    Avg engagement rate (%)
                  </span>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    step={0.1}
                    value={engagement}
                    onChange={event => setEngagement(Number(event.target.value) || 0)}
                    className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none ring-0 focus:border-[var(--color-accent-blush)]"
                    aria-label="Average engagement rate"
                  />
                </label>
              </div>

              <label className="block space-y-1">
                <span className="text-xs text-[var(--color-text-secondary)]">
                  Niche or category
                </span>
                <input
                  type="text"
                  maxLength={48}
                  value={niche}
                  onChange={event => setNiche(event.target.value)}
                  className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none ring-0 focus:border-[var(--color-accent-blush)]"
                  aria-label="Creator niche"
                />
              </label>

              <button
                type="button"
                onClick={handleEstimate}
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-accent-blush)] px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
              >
                Estimate my Kirti range
              </button>

              {range && (
                <div className="mt-3 rounded-lg bg-black/25 px-3 py-3 text-xs text-[var(--color-text-secondary)]">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">
                    Estimated range
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-[var(--color-text-primary)]">
                    {range[0]}–{range[1]}
                  </p>
                  <p className="mt-1">
                    Scale 0–850. This is a soft, private preview based on your inputs.
                  </p>
                </div>
              )}
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">
              How it works
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              The full Kirti score uses verified connectors, campaign outcomes, and a probabilistic model. This calculator only gives you a conservative starting range.
            </p>
            <div className="mt-2 space-y-2 text-xs text-[var(--color-text-secondary)]">
              <p>
                1. Enter your main platform reach and engagement.
              </p>
              <p>
                2. Add a short niche label so we can think about fit.
              </p>
              <p>
                3. Use the range as a private benchmark before sharing anything.
              </p>
            </div>
          </section>
        </section>

        <section className="grid gap-3 text-left text-xs text-[var(--color-text-secondary)] sm:grid-cols-3">
          <div className="rounded-xl bg-black/20 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-blush)]">
              Step 1
            </p>
            <p className="mt-1 font-semibold text-[var(--color-text-primary)]">
              Get scored
            </p>
            <p className="mt-1">
              Connect your accounts and see a clean trust score view.
            </p>
          </div>
          <div className="rounded-xl bg-black/20 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-blush)]">
              Step 2
            </p>
            <p className="mt-1 font-semibold text-[var(--color-text-primary)]">
              Get matched
            </p>
            <p className="mt-1">
              Unlock deals that fit your data, niche, and comfort level.
            </p>
          </div>
          <div className="rounded-xl bg-black/20 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-blush)]">
              Step 3
            </p>
            <p className="mt-1 font-semibold text-[var(--color-text-primary)]">
              Get paid
            </p>
            <p className="mt-1">
              Track earnings, escrow, and equity in one calm wallet.
            </p>
          </div>
        </section>

        <section className="space-y-2 text-xs text-[var(--color-text-secondary)]">
          <p className="font-semibold text-[var(--color-text-primary)]">
            Trust and compliance
          </p>
          <p>
            DPDPA-ready flows, Razorpay support, and simple legal templates built for India-first creators.
          </p>
        </section>
      </section>
    </main>
  );
}

