import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Trust Care Diagnostics in Bhagalpur, Bihar. Call us at 9608759500 or visit our lab near Asarganj More, Shahkund.",
};

export default function ContactPage() {
  return <ContactClient />;
}
