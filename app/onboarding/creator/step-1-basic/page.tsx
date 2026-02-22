"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatorStep1BasicPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const canContinue = name.trim().length > 1 && email.includes("@") && mobile.trim().length >= 8;

  const handleNext = () => {
    if (!canContinue) return;
    router.push("/onboarding/creator/step-2-social");
  };

  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center bg-[var(--color-background)] px-6 py-10"
    >
      <section className="w-full max-w-md space-y-6 rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-6 shadow-lg shadow-black/40">
        <header className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Step 1 of 5
          </p>
          <h1 className="text-xl font-semibold">
            Basic details
          </h1>
          <p className="text-xs text-[var(--color-text-secondary)]">
            We use this to set up your creator profile and secure your account.
          </p>
        </header>

        <form
          onSubmit={event => {
            event.preventDefault();
            handleNext();
          }}
          className="space-y-4 text-sm"
        >
          <label className="block space-y-1">
            <span className="text-xs text-[var(--color-text-secondary)]">
              Name
            </span>
            <input
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
              required
              maxLength={80}
              className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-blush)]"
            />
          </label>
          <label className="block space-y-1">
            <span className="text-xs text-[var(--color-text-secondary)]">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
              className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-blush)]"
            />
          </label>
          <label className="block space-y-1">
            <span className="text-xs text-[var(--color-text-secondary)]">
              Mobile
            </span>
            <input
              type="tel"
              value={mobile}
              onChange={event => setMobile(event.target.value)}
              required
              className="block w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-blush)]"
            />
          </label>

          <button
            type="submit"
            disabled={!canContinue}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-accent-blush)] px-4 py-2 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue
          </button>
        </form>
      </section>
    </main>
  );
}

