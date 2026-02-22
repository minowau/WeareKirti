import type { ReactNode } from "react";
import { DashboardShell } from "./components/DashboardShell";

export default function DashboardLayout(props: { children: ReactNode }) {
  return <DashboardShell>{props.children}</DashboardShell>;
}

