"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatorStep2SocialPage() {
  const router = useRouter();
  const [platform, setPlatform] = useState("instagram");
  const [followers, setFollowers] = useState(0);
  const [engagement, setEngagement] = useState(2.5);

  const handleNext = () => {
    router.push("/onboarding/creator/step-3-kyc");
  };

  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center bg-[var(--color-background)] px-6 py-10"
    >
      <section className="w-full max-w-md space-y-6 rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-6 shadow-lg shadow-black/40">
        <header className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Step 2 of 5
          </p>
          <h1 className="text-xl font-semibold">
            Connect social data
          </h1>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Share a simple snapshot of your main channel so we can estimate your score.
          </p>
        </header>

        <div className="space-y-4 text-sm">
          <label className="block space-y-1">
            <span className="text-xs text-[var(--color-text-secondary)]">
              Main platform
            </span>
            <select
              value={platform}
              onChange={event => setPlatform(event.target.value)}
              className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-blush)]"
            >
              <option value="instagram">
                Instagram
              </option>
              <option value="youtube">
                YouTube
              </option>
              <option value="other">
                Other
              </option>
            </select>
          </label>

          <label className="block space-y-1">
            <span className="text-xs text-[var(--color-text-secondary)]">
              Followers
            </span>
            <input
              type="number"
              min={0}
              value={followers || ""}
              onChange={event => setFollowers(Number(event.target.value) || 0)}
              className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-blush)]"
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
              className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-blush)]"
            />
          </label>

          <button
            type="button"
            onClick={handleNext}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-accent-blush)] px-4 py-2 text-sm font-semibold text-black"
          >
            Continue
          </button>

          <div className="mt-4 rounded-lg bg-black/20 p-3 text-xs text-[var(--color-text-secondary)]">
            <p className="font-semibold text-[var(--color-text-primary)]">
              No direct connect yet
            </p>
            <p className="mt-1">
              This early preview uses a light snapshot only. Full scoring uses verified connectors and deeper metrics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

