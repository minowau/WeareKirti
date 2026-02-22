"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ConsentState = {
  scoreComputation: boolean;
  modelTraining: boolean;
  publicProfile: boolean;
  emailMarketing: boolean;
};

export default function CreatorStep4ConsentPage() {
  const router = useRouter();
  const [consent, setConsent] = useState<ConsentState>({
    scoreComputation: true,
    modelTraining: false,
    publicProfile: false,
    emailMarketing: false
  });

  const toggle = (key: keyof ConsentState) => {
    setConsent(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNext = () => {
    if (!consent.scoreComputation) return;
    router.push("/onboarding/creator/step-5-preview");
  };

  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center bg-[var(--color-background)] px-6 py-10"
    >
      <section className="w-full max-w-md space-y-6 rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-6 shadow-lg shadow-black/40">
        <header className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Step 4 of 5
          </p>
          <h1 className="text-xl font-semibold">
            Consent and privacy
          </h1>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Choose where you are comfortable sharing data. You can change this later in settings.
          </p>
        </header>

        <div className="space-y-4 text-sm">
          <button
            type="button"
            onClick={() => toggle("scoreComputation")}
            className="flex w-full items-start justify-between rounded-xl border border-[var(--color-accent-blush)] bg-black/20 px-4 py-3 text-left"
            aria-pressed={consent.scoreComputation}
          >
            <div>
              <p className="font-semibold">
                Compute my Kirti score
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                Required so we can show your score and deal insights.
              </p>
            </div>
            <span className="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-accent-blush)] text-[10px]">
              {consent.scoreComputation ? "✓" : ""}
            </span>
          </button>

          <button
            type="button"
            onClick={() => toggle("modelTraining")}
            className="flex w-full items-start justify-between rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-left"
            aria-pressed={consent.modelTraining}
          >
            <div>
              <p className="font-semibold">
                Use data for model learning
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                Optional. We use anonymized signals to make scores fairer over time.
              </p>
            </div>
            <span className="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-[10px]">
              {consent.modelTraining ? "✓" : ""}
            </span>
          </button>

          <button
            type="button"
            onClick={() => toggle("publicProfile")}
            className="flex w-full items-start justify-between rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-left"
            aria-pressed={consent.publicProfile}
          >
            <div>
              <p className="font-semibold">
                Public profile card
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                Let brands see a light profile with your tier and niche.
              </p>
            </div>
            <span className="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-[10px]">
              {consent.publicProfile ? "✓" : ""}
            </span>
          </button>

          <button
            type="button"
            onClick={() => toggle("emailMarketing")}
            className="flex w-full items-start justify-between rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-left"
            aria-pressed={consent.emailMarketing}
          >
            <div>
              <p className="font-semibold">
                Product updates
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                Receive short emails when we ship new tools for creators.
              </p>
            </div>
            <span className="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-[10px]">
              {consent.emailMarketing ? "✓" : ""}
            </span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!consent.scoreComputation}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-accent-blush)] px-4 py-2 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue
          </button>
        </div>
      </section>
    </main>
  );
}

