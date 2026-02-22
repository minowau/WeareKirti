"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type DashboardShellProps = {
  children: ReactNode;
};

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Home" },
  { href: "/dashboard/discover", label: "Discover" },
  { href: "/dashboard/deals", label: "Deals" },
  { href: "/dashboard/portfolio", label: "Portfolio" },
  { href: "/dashboard/settings", label: "Profile" }
];

export function DashboardShell(props: DashboardShellProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)] text-sm text-[var(--color-text-primary)]">
      <header className="flex items-center justify-between border-b border-white/5 px-4 py-3 sm:px-6">
        <Link href="/dashboard" className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-blush)] text-xs text-black">
            K
          </span>
          <span>Kirti</span>
        </Link>
        <div className="flex items-center gap-3 text-xs text-[var(--color-text-secondary)]">
          <button
            type="button"
            className="hidden items-center rounded-full bg-white/5 px-3 py-1.5 hover:bg-white/10 sm:inline-flex"
          >
            Search
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
          >
            ●
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        <nav className="hidden w-48 flex-shrink-0 flex-col border-r border-white/5 px-3 py-4 text-xs text-[var(--color-text-secondary)] sm:flex">
          {navItems.map(item => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "mb-1 flex items-center rounded-lg px-3 py-2 hover:bg-white/5 " +
                  (active ? "bg-white/10 text-[var(--color-accent-blush)]" : "")
                }
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <main id="main" className="flex-1 px-4 py-4 sm:px-6 sm:py-6">
          {props.children}
        </main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-[var(--color-background)] px-4 py-2 text-xs text-[var(--color-text-secondary)] sm:hidden">
        {navItems.map(item => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                "flex flex-1 flex-col items-center gap-0.5 px-1 " +
                (active ? "text-[var(--color-accent-blush)]" : "")
              }
            >
              <span className="text-base">•</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
