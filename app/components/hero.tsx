"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroOpportunityPulse from "./heroOpportunityPulse";

const timeline = [
  {
    title: "The Noise",
    description:
      "Manual searches across SAM.gov and portals—finding the right RFP is a needle in a haystack.",
  },
  {
    title: "The Signal",
    description:
      "AI agents analyze awards, agency spend, and competitor history to surface winnable contracts.",
  },
  {
    title: "The Edge",
    description:
      "Guided fit scoring plus automated compliance matrices and proposal drafts.",
  },
];

type HeroProps = {
  onRequestAccess?: () => void;
};

export default function HeroSection({ onRequestAccess }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden border-b border-white/5 py-12 lg:py-16">
      <motion.div
        className="pointer-events-none absolute left-[-10%] top-0 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-[-10%] h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:gap-16"
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Strategic Intelligence
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            GovnBidAI
          </h1>

          <p className="mt-3 max-w-lg text-lg text-gray-400">
            Government contracting is a data problem. We solved it.
          </p>

          <ol className="relative mt-10 space-y-8 border-l border-white/10 pl-8">
            {timeline.map((step) => (
              <li key={step.title} className="relative">
                <span
                  className="absolute -left-[2.125rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 ring-4 ring-[#050816]"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <h2 className="text-sm font-semibold text-white">
                  {step.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/#product"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-300"
            >
              Explore GovnBidAI
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={onRequestAccess}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Request Early Access
            </button>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Illustrative metrics for product preview.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-xl flex-1 lg:max-w-2xl"
        >
          <HeroOpportunityPulse />
        </motion.div>
      </motion.div>
    </section>
  );
}
