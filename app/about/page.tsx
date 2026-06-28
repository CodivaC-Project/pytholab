import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} - leading pathology laboratory in Bhagalpur, Bihar with 10+ years of experience in accurate diagnostic services.`,
};

export default function AboutPage() {
  return <AboutClient />;
}
