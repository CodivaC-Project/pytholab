import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AgentationWrapper from "@/components/AgentationWrapper";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trust Care Diagnostics | Where Accuracy Meets Trust",
    template: "%s | Trust Care Diagnostics",
  },
  description:
    "Accurate, reliable and timely pathology services using modern laboratory technology in Bhagalpur, Bihar. 500+ tests, same-day reports, home collection available.",
  keywords: [
    "diagnostics",
    "pathology",
    "lab tests",
    "blood test",
    "CBC",
    "sugar test",
    "thyroid",
    "dengue",
    "vitamin D",
    "Bhagalpur",
    "Bihar",
    "Trust Care Diagnostics",
  ],
  openGraph: {
    title: "Trust Care Diagnostics | Where Accuracy Meets Trust",
    description:
      "Accurate, reliable and timely pathology services in Bhagalpur, Bihar.",
    url: "https://trustcarediagnostics.online",
    siteName: "Trust Care Diagnostics",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <AgentationWrapper />
        <WhatsAppButton />
      </body>
    </html>
  );
}
