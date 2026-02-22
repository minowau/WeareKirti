"use client";

import { useMemo, useState } from "react";

type Holding = {
  id: string;
  startup: string;
  stakePercent: number;
  grantDate: string;
  vestingSchedule: string;
  fairValue: number;
  vestingCompletionProbability: number;
};

const holdings: Holding[] = [
  {
    id: "h1",
    startup: "Platinum Coffee Labs",
    stakePercent: 0.4,
    grantDate: "2024-06-01",
    vestingSchedule: "6m cliff, 30m monthly",
    fairValue: 280000,
    vestingCompletionProbability: 0.78
  },
  {
    id: "h2",
    startup: "Studio Fit Online",
    stakePercent: 0.25,
    grantDate: "2023-11-15",
    vestingSchedule: "3m cliff, 21m monthly",
    fairValue: 190000,
    vestingCompletionProbability: 0.66
  }
];

export default function PortfolioPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return holdings;
    const lowered = query.toLowerCase();
    return holdings.filter(holding => holding.startup.toLowerCase().includes(lowered));
  }, [query]);

  const csv = useMemo(() => {
    const header = "Startup,Stake (%),Grant date,Vesting,Fair value,Vesting completion probability";
    const rows = filtered.map(
      holding =>
        [
          holding.startup,
          holding.stakePercent.toString(),
          holding.grantDate,
          holding.vestingSchedule,
          holding.fairValue.toString(),
          holding.vestingCompletionProbability.toString()
        ].join(",")
    );
    return [header, ...rows].join("\n");
  }, [filtered]);

  const handleExport = () => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "kirti-equity-portfolio.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <header className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">
            Equity portfolio
          </h1>
          <p className="text-xs text-[var(--color-text-secondary)]">
            See stake, vesting, and fair value for each startup in one table.
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <button
            type="button"
            onClick={handleExport}
            className="inline-flex items-center rounded-full border border-white/15 bg-black/20 px-3 py-1.5 font-semibold text-[var(--color-text-primary)] hover:bg-black/40"
          >
            Export CSV
          </button>
        </div>
      </header>

      <section className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[var(--color-text-secondary)]">
            Filter by startup name and export a simple snapshot for your records.
          </p>
          <label className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em]">
              Filter
            </span>
            <input
              type="text"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search startup"
              className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs outline-none focus:border-[var(--color-accent-blush)]"
            />
          </label>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-[var(--color-text-secondary)]">
                <th scope="col" className="py-2 pr-4">
                  Startup
                </th>
                <th scope="col" className="py-2 pr-4">
                  Stake (%)
                </th>
                <th scope="col" className="py-2 pr-4">
                  Grant date
                </th>
                <th scope="col" className="py-2 pr-4">
                  Vesting schedule
                </th>
                <th scope="col" className="py-2 pr-4">
                  Fair value
                </th>
                <th scope="col" className="py-2 pr-4">
                  Vesting completion probability
                </th>
                <th scope="col" className="py-2 pr-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(holding => (
                <tr
                  key={holding.id}
                  className="border-b border-white/5 last:border-0"
                >
                  <td className="py-2 pr-4 text-[var(--color-text-primary)]">
                    {holding.startup}
                  </td>
                  <td className="py-2 pr-4">
                    {holding.stakePercent.toFixed(2)}
                  </td>
                  <td className="py-2 pr-4">
                    {holding.grantDate}
                  </td>
                  <td className="py-2 pr-4">
                    {holding.vestingSchedule}
                  </td>
                  <td className="py-2 pr-4">
                    ₹{holding.fairValue.toLocaleString("en-IN")}
                  </td>
                  <td className="py-2 pr-4">
                    {(holding.vestingCompletionProbability * 100).toFixed(0)}%
                  </td>
                  <td className="py-2 pr-4">
                    <div className="flex flex-wrap gap-1">
                      <button
                        type="button"
                        className="rounded-full bg-black/30 px-2 py-0.5 text-[10px] text-[var(--color-text-primary)]"
                      >
                        View grant
                      </button>
                      <button
                        type="button"
                        className="rounded-full bg-black/30 px-2 py-0.5 text-[10px] text-[var(--color-text-primary)]"
                      >
                        Export snippet
                      </button>
                      <button
                        type="button"
                        className="rounded-full bg-black/30 px-2 py-0.5 text-[10px] text-[var(--color-state-error)]"
                      >
                        Request cash out
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
