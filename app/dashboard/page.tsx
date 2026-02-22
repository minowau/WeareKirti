import { KirtiScoreCard } from "./components/KirtiScoreCard";
import { TrustBreakdownGrid } from "./components/TrustBreakdownGrid";
import { WalletSummaryCard } from "./components/WalletSummaryCard";
import { DealsList } from "./components/DealsList";

const mockDimensions = [
  { name: "Sales conversion", weight: 35, score: 720 },
  { name: "Delivery timeliness", weight: 20, score: 690 },
  { name: "Audience authenticity", weight: 20, score: 705 },
  { name: "Contract adherence", weight: 10, score: 740 },
  { name: "Brand satisfaction", weight: 15, score: 710 }
];

const mockDeals = [
  {
    id: "1",
    brand: "Platinum Coffee",
    type: "rev-share" as const,
    duration: "3 months",
    projectedPayout: "₹1.8L",
    varLabel: "Medium VaR"
  }
];

export default function DashboardHomePage() {
  return (
    <div className="space-y-4">
      <header className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-semibold">
            Creator home
          </h1>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Calm, explainable view of your score, deals, and wallet.
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <a
            href="#"
            className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 hover:bg-white/5"
          >
            Generate SWOT
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 hover:bg-white/5"
          >
            Share score
          </a>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        <div className="space-y-4">
          <KirtiScoreCard score={712} tier="Platinum" confidence={18} lastUpdated="2 days ago" />
          <TrustBreakdownGrid dimensions={mockDimensions} />
        </div>
        <div className="space-y-4">
          <WalletSummaryCard available={82000} escrow={54000} equity={160000} currency="INR" />
          <DealsList deals={mockDeals} />
        </div>
      </section>
    </div>
  );
}

