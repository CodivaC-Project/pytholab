import type { Metadata } from "next";
import BookTestClient from "./BookTestClient";

export const metadata: Metadata = {
  title: "Book a Test",
  description:
    "Book your diagnostic test online at Trust Care Diagnostics. Quick, easy, and convenient booking.",
};

export default function BookTestPage() {
  return <BookTestClient />;
}
