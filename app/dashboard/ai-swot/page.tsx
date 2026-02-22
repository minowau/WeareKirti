"use client";

import { useState } from "react";

type SwotItem = {
  label: string;
  value: string;
};

type Swot = {
  strength: SwotItem;
  weakness: SwotItem;
  opportunity: SwotItem;
  threat: SwotItem;
};

const initialSwot: Swot = {
  strength: {
    label: "Strength",
    value: "Steady conversions and high on-time delivery build trust with brands."
  },
  weakness: {
    label: "Weakness",
    value: "Limited experimentation outside your core niche can slow discovery."
  },
  opportunity: {
    label: "Opportunity",
    value: "Partner with brands that need patient storytelling in your home language."
  },
  threat: {
    label: "Threat",
    value: "Over-reliance on a single platform could hurt if algorithms change."
  }
};

const signalContributions = [
  {
    name: "Audience similarity",
    description: "How well your audience overlaps with the brief.",
    weight: 0.28
  },
  {
    name: "Style",
    description: "Tone, pacing, and visual style fit.",
    weight: 0.22
  },
  {
    name: "Authority",
    description: "History of deep, trusted content in the topic.",
    weight: 0.2
  },
  {
    name: "Authenticity",
    description: "Signal that content feels honest and consistent.",
    weight: 0.18
  },
  {
    name: "Brand safety",
    description: "Low risk of violations or conflicts for the brand.",
    weight: 0.12
  }
];

export default function AiSwotPage() {
  const [swot, setSwot] = useState<Swot>(initialSwot);
  const [isEditing, setIsEditing] = useState(false);

  const handleGenerate = () => {
    setSwot(initialSwot);
    setIsEditing(false);
  };

  const handleChange = (key: keyof Swot, value: string) => {
    setSwot(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        value
      }
    }));
  };

  return (
    <div className="space-y-4">
      <header className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">
            AI SWOT
          </h1>
          <p className="text-xs text-[var(--color-text-secondary)]">
            A short, explainable view of strengths, gaps, and low-risk moves.
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <button
            type="button"
            onClick={handleGenerate}
            className="inline-flex items-center rounded-full bg-[var(--color-accent-blush)] px-3 py-1.5 font-semibold text-black"
          >
            Generate SWOT
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(previous => !previous)}
            className="inline-flex items-center rounded-full border border-white/15 bg-black/20 px-3 py-1.5 font-semibold text-[var(--color-text-primary)]"
          >
            {isEditing ? "Stop editing" : "Copy-edit text"}
          </button>
        </div>
      </header>

      <section
        aria-label="SWOT analysis"
        className="grid gap-3 rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:grid-cols-2 sm:p-5 text-xs text-[var(--color-text-secondary)]"
      >
        {(["strength", "weakness", "opportunity", "threat"] as (keyof Swot)[]).map(key => (
          <article
            key={key}
            className="rounded-xl bg-black/25 p-3"
          >
            <h2 className="text-xs font-semibold text-[var(--color-text-primary)]">
              {swot[key].label}
            </h2>
            {isEditing ? (
              <textarea
                value={swot[key].value}
                onChange={event => handleChange(key, event.target.value)}
                className="mt-2 h-20 w-full resize-none rounded-lg border border-white/15 bg-black/30 px-2 py-1.5 text-xs outline-none focus:border-[var(--color-accent-blush)]"
                aria-label={swot[key].label}
              />
            ) : (
              <p className="mt-2">
                {swot[key].value}
              </p>
            )}
          </article>
        ))}
      </section>

      <section
        aria-label="SWOT explainability signals"
        className="rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-4 sm:p-5 text-xs text-[var(--color-text-secondary)]"
      >
        <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">
          Explainability signals
        </h2>
        <p className="mt-2">
          These five signals shape the SWOT suggestions. Each one is scored based on your profile and recent campaigns.
        </p>
        <ul className="mt-3 space-y-2">
          {signalContributions.map(signal => (
            <li
              key={signal.name}
              className="flex items-start justify-between gap-3 rounded-lg bg-black/25 p-3"
            >
              <div>
                <p className="text-xs font-semibold text-[var(--color-text-primary)]">
                  {signal.name}
                </p>
                <p className="mt-1">
                  {signal.description}
                </p>
              </div>
              <div className="flex items-center gap-1 text-[10px]">
                <span aria-hidden="true">●</span>
                <span>{Math.round(signal.weight * 100)}%</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
