import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Health Packages",
  description:
    "Affordable health checkup packages at Trust Care Diagnostics. Complete body checkup, diabetes screening, and wellness packages starting from ₹899.",
};

export default function PackagesPage() {
  return <PackagesClient />;
}
