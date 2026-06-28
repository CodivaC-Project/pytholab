import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a virtual tour of our state-of-the-art diagnostic laboratory at Trust Care Diagnostics.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
