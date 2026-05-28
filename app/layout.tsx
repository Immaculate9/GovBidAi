import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import AppShell from "./components/layout/appShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "GovnBidAI | AI Procurement Intelligence",
    template: "%s | GovnBidAI",
  },
  description:
    "Pre-release preview of GovnBidAI—SAM.gov-aligned discovery, P-Win scoring, compliance support, and AI capture chat for federal contractors.",
  keywords: [
    "GovnBidAI",
    "federal contracting",
    "SAM.gov",
    "procurement intelligence",
    "government bids",
  ],
  openGraph: {
    title: "GovnBidAI | AI Procurement Intelligence",
    description:
      "Discover, score, and pursue federal opportunities with AI-guided procurement workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppShell>
          <Navbar />
          {children}
        </AppShell>
      </body>
    </html>
  );
}
