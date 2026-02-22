"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatorStep3KycPage() {
  const router = useRouter();
  const [pan, setPan] = useState("");
  const [gst, setGst] = useState("");

  const handleNext = () => {
    router.push("/onboarding/creator/step-4-consent");
  };

  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center bg-[var(--color-background)] px-6 py-10"
    >
      <section className="w-full max-w-md space-y-6 rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-6 shadow-lg shadow-black/40">
        <header className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Step 3 of 5
          </p>
          <h1 className="text-xl font-semibold">
            Payout details
          </h1>
          <p className="text-xs text-[var(--color-text-secondary)]">
            These fields are optional. They help us prep for payouts when your deals go live.
          </p>
        </header>

        <div className="space-y-4 text-sm">
          <label className="block space-y-1">
            <span className="text-xs text-[var(--color-text-secondary)]">
              PAN
            </span>
            <input
              type="text"
              value={pan}
              onChange={event => setPan(event.target.value.toUpperCase())}
              maxLength={12}
              className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm uppercase outline-none focus:border-[var(--color-accent-blush)]"
            />
          </label>
          <label className="block space-y-1">
            <span className="text-xs text-[var(--color-text-secondary)]">
              GST
            </span>
            <input
              type="text"
              value={gst}
              onChange={event => setGst(event.target.value.toUpperCase())}
              maxLength={16}
              className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm uppercase outline-none focus:border-[var(--color-accent-blush)]"
            />
          </label>

          <p className="text-xs text-[var(--color-text-secondary)]">
            You can skip this for now and add full KYC when payouts are enabled.
          </p>

          <button
            type="button"
            onClick={handleNext}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-accent-blush)] px-4 py-2 text-sm font-semibold text-black"
          >
            Continue
          </button>
        </div>
      </section>
    </main>
  );
}

