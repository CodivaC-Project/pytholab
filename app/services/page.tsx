import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive range of diagnostic services including CBC, Thyroid, Diabetes, Dengue, Vitamin D and 500+ pathology tests.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
