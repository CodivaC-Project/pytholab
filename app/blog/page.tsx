import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Health tips, diagnostic insights, and wellness advice from Trust Care Diagnostics.",
};

export default function BlogPage() {
  return <BlogClient />;
}
