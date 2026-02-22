import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Kirti.ai",
  description: "Creator score and deal dashboard"
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
        <a href="#main" className="sr-only">
          Skip to main content
        </a>
        {props.children}
      </body>
    </html>
  );
}

