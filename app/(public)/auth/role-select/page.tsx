import Link from "next/link";

export default function RoleSelectPage() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-background)] px-6 py-10"
    >
      <section className="w-full max-w-md space-y-6 rounded-2xl border border-white/5 bg-[var(--color-surface-card)] p-6 text-center shadow-lg shadow-black/40">
        <h1 className="text-2xl font-semibold">
          Choose your role
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Tell us how you use Kirti so we can configure your experience.
        </p>
        <div className="space-y-3 text-left text-sm">
          <Link
            href="/onboarding/creator/step-1-basic"
            className="block rounded-xl border border-[var(--color-accent-blush)] bg-black/20 px-4 py-3 hover:bg-black/40"
          >
            <p className="font-semibold">
              I am a creator
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Get a Kirti score, see deals, and manage payouts in one view.
            </p>
          </Link>
          <Link
            href="/(public)/for-brands"
            className="block rounded-xl border border-white/10 bg-black/10 px-4 py-3 hover:bg-black/30"
          >
            <p className="font-semibold">
              I represent a brand
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              See how Kirti scores help you work with creators more safely.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

