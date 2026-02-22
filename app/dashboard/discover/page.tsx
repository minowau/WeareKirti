"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Deal = {
  id: string;
  brand: string;
  language: string;
  niche: string;
  tierRequired: string;
  revShare: number;
  equityOffered: number;
  varMax: number;
  duration: string;
  matchScore: number;
  predictedPayout: string;
};

const allDeals: Deal[] = [
  {
    id: "d1",
    brand: "Platinum Coffee",
    language: "English",
    niche: "Food",
    tierRequired: "Gold",
    revShare: 15,
    equityOffered: 0,
    varMax: 25,
    duration: "3 months",
    matchScore: 88,
    predictedPayout: "₹1.8L"
  },
  {
    id: "d2",
    brand: "Studio Fit",
    language: "English",
    niche: "Fitness",
    tierRequired: "Silver",
    revShare: 12,
    equityOffered: 0.5,
    varMax: 30,
    duration: "6 months",
    matchScore: 81,
    predictedPayout: "₹2.4L + equity"
  },
  {
    id: "d3",
    brand: "Indie Learning",
    language: "Hindi",
    niche: "Education",
    tierRequired: "Gold",
    revShare: 10,
    equityOffered: 1.2,
    varMax: 20,
    duration: "4 months",
    matchScore: 76,
    predictedPayout: "₹1.2L + equity"
  }
];

type Filters = {
  language: string;
  niche: string;
  tier: string;
  maxRevShare: string;
  maxEquity: string;
  maxVar: string;
  duration: string;
};

const initialFilters: Filters = {
  language: "",
  niche: "",
  tier: "",
  maxRevShare: "",
  maxEquity: "",
  maxVar: "",
  duration: ""
};

export default function DiscoverPage() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [expressionComplete, setExpressionComplete] = useState(false);
  const router = useRouter();

  const filteredDeals = useMemo(() => {
    return allDeals.filter(deal => {
      if (filters.language && deal.language !== filters.language) return false;
      if (filters.niche && deal.niche !== filters.niche) return false;
      if (filters.tier && deal.tierRequired !== filters.tier) return false;
      if (filters.maxRevShare && deal.revShare > Number(filters.maxRevShare)) return false;
      if (filters.maxEquity && deal.equityOffered > Number(filters.maxEquity)) return false;
      if (filters.maxVar && deal.varMax > Number(filters.maxVar)) return false;
      if (filters.duration && deal.duration !== filters.duration) return false;
      return true;
    });
  }, [filters]);

  const openDeal = (deal: Deal) => {
    setSelectedDeal(deal);
    setExpressionComplete(false);
  };

  const closeDeal = () => {
    setSelectedDeal(null);
    setExpressionComplete(false);
  };

  const handleExpressInterest = () => {
    setExpressionComplete(true);
  };

  const handleSimulate = () => {
    router.push("/dashboard/deals/simulator");
  };

  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold">
          Discover campaigns
        </h1>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Filter active campaigns by fit, risk, and upside.
        </p>
      </header>

      <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs">
        <h2 className="text-sm font-semibold">
          Filters
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <label className="space-y-1">
            <span className="text-[var(--color-text-secondary)]">
              Language
            </span>
            <select
              value={filters.language}
              onChange={event => setFilters(prev => ({ ...prev, language: event.target.value }))}
              className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
            >
              <option value="">
                Any
              </option>
              <option value="English">
                English
              </option>
              <option value="Hindi">
                Hindi
              </option>
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-[var(--color-text-secondary)]">
              Niche
            </span>
            <select
              value={filters.niche}
              onChange={event => setFilters(prev => ({ ...prev, niche: event.target.value }))}
              className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
            >
              <option value="">
                Any
              </option>
              <option value="Food">
                Food
              </option>
              <option value="Fitness">
                Fitness
              </option>
              <option value="Education">
                Education
              </option>
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-[var(--color-text-secondary)]">
              ICS tier required
            </span>
            <select
              value={filters.tier}
              onChange={event => setFilters(prev => ({ ...prev, tier: event.target.value }))}
              className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
            >
              <option value="">
                Any
              </option>
              <option value="Gold">
                Gold
              </option>
              <option value="Silver">
                Silver
              </option>
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-[var(--color-text-secondary)]">
              Max rev share (%)
            </span>
            <input
              type="number"
              value={filters.maxRevShare}
              onChange={event => setFilters(prev => ({ ...prev, maxRevShare: event.target.value }))}
              className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
            />
          </label>

          <label className="space-y-1">
            <span className="text-[var(--color-text-secondary)]">
              Max equity offered (%)
            </span>
            <input
              type="number"
              value={filters.maxEquity}
              onChange={event => setFilters(prev => ({ ...prev, maxEquity: event.target.value }))}
              className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
            />
          </label>

          <label className="space-y-1">
            <span className="text-[var(--color-text-secondary)]">
              Max VaR (%)
            </span>
            <input
              type="number"
              value={filters.maxVar}
              onChange={event => setFilters(prev => ({ ...prev, maxVar: event.target.value }))}
              className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
            />
          </label>

          <label className="space-y-1">
            <span className="text-[var(--color-text-secondary)]">
              Duration
            </span>
            <select
              value={filters.duration}
              onChange={event => setFilters(prev => ({ ...prev, duration: event.target.value }))}
              className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[var(--color-accent-blush)]"
            >
              <option value="">
                Any
              </option>
              <option value="3 months">
                3 months
              </option>
              <option value="4 months">
                4 months
              </option>
              <option value="6 months">
                6 months
              </option>
            </select>
          </label>
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs">
        <h2 className="text-sm font-semibold">
          Matches
        </h2>
        {filteredDeals.length === 0 && (
          <p className="text-[var(--color-text-secondary)]">
            No campaigns match these filters yet. Loosen one or two filters to see more options.
          </p>
        )}
        <div className="grid gap-3 lg:grid-cols-2">
          {filteredDeals.map(deal => (
            <button
              key={deal.id}
              type="button"
              onClick={() => openDeal(deal)}
              className="flex flex-col items-start rounded-xl border border-white/10 bg-black/25 p-3 text-left hover:border-[var(--color-accent-blush)]"
            >
              <div className="flex w-full items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {deal.brand}
                  </p>
                  <p className="mt-1 text-[11px] text-[var(--color-text-secondary)]">
                    {deal.niche} • {deal.language} • {deal.duration}
                  </p>
                </div>
                <div className="text-right text-[10px]">
                  <p className="rounded-full bg-black/40 px-2 py-0.5 text-[var(--color-accent-blush)]">
                    Match {deal.matchScore}%
                  </p>
                  <p className="mt-1 text-[var(--color-text-secondary)]">
                    {deal.predictedPayout}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1 text-[10px] text-[var(--color-text-secondary)]">
                <span className="rounded-full bg-black/40 px-2 py-0.5">
                  Rev share {deal.revShare}%
                </span>
                {deal.equityOffered > 0 && (
                  <span className="rounded-full bg-black/40 px-2 py-0.5">
                    Equity {deal.equityOffered}%
                  </span>
                )}
                <span className="inline-flex items-center rounded-full bg-black/40 px-2 py-0.5">
                  <span aria-hidden="true">●</span>
                  <span className="ml-1">
                    VaR max {deal.varMax}%
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedDeal && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="deal-detail-title"
        >
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[var(--color-surface-card)] p-5 text-xs text-[var(--color-text-secondary)] shadow-xl shadow-black/60">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2
                  id="deal-detail-title"
                  className="text-sm font-semibold text-[var(--color-text-primary)]"
                >
                  {selectedDeal.brand}
                </h2>
                <p className="mt-1">
                  Rev share {selectedDeal.revShare}%{" "}
                  {selectedDeal.equityOffered > 0 ? "with equity upside" : "cash only"} •{" "}
                  {selectedDeal.duration}
                </p>
              </div>
              <button
                type="button"
                onClick={closeDeal}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-[var(--color-text-secondary)] hover:bg-black/60"
                aria-label="Close deal details"
              >
                ×
              </button>
            </div>

            <div className="mt-3 space-y-3">
              <div>
                <p className="text-[11px] font-semibold text-[var(--color-text-primary)]">
                  Offer summary
                </p>
                <p className="mt-1">
                  Revenue share on attributed sales with clear duration and caps. Equity, when present, is a small stake linked to performance milestones.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-[var(--color-text-primary)]">
                  Attribution method
                </p>
                <p className="mt-1">
                  UTM links and payment provider webhooks are used together to attribute revenue. The creator always sees what is counted for this campaign.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-[var(--color-text-primary)]">
                  Minimum guarantee (MEG)
                </p>
                <p className="mt-1">
                  Some campaigns provide a small minimum payout if agreed milestones are reached. When active, this appears as a reserved amount in escrow.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-[var(--color-text-primary)]">
                  Legal snapshot
                </p>
                <p className="mt-1">
                  The contract summary highlights key obligations, timelines, and cure periods. Full text is always available before you sign.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={handleExpressInterest}
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-[var(--color-accent-blush)] px-4 py-2 text-xs font-semibold text-black"
              >
                Express interest
              </button>
              <button
                type="button"
                onClick={handleSimulate}
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/15 bg-black/20 px-4 py-2 text-xs font-semibold text-[var(--color-text-primary)]"
              >
                Simulate
              </button>
              <button
                type="button"
                onClick={closeDeal}
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/15 bg-black/10 px-4 py-2 text-xs font-semibold text-[var(--color-text-secondary)]"
              >
                Decline
              </button>
            </div>

            {expressionComplete && (
              <div className="mt-3 rounded-lg bg-black/30 p-3 text-[11px] text-[var(--color-text-secondary)]">
                <p className="font-semibold text-[var(--color-text-primary)]">
                  Interest recorded
                </p>
                <p className="mt-1">
                  A short draft agreement is prepared in the background for the brand to review. You will see it in your deals view once both sides confirm.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

