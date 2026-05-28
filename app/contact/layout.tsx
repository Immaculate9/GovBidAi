import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request early access to GovnBidAI or schedule a platform walkthrough.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
