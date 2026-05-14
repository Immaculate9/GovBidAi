"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  BrainCircuit,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: FileSearch,
    value: "50K+",
    label: "Federal Opportunities Analyzed",
    description:
      "AI-powered procurement analysis across multiple government sources.",
  },
  {
    icon: BrainCircuit,
    value: "94%",
    label: "Opportunity Match Accuracy",
    description:
      "Advanced multidimensional scoring based on procurement intelligence.",
  },
  {
    icon: ShieldCheck,
    value: "Automated",
    label: "Compliance Intelligence",
    description: "Generate compliance matrices and proposal insights faster.",
  },
  {
    icon: TrendingUp,
    value: "AI-Driven",
    label: "Procurement Insights",
    description:
      "Historical award analysis and competitor intelligence in real-time.",
  },
];

export default function StatsSection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-[#060B1A] py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Procurement Intelligence Platform
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Built for Modern Federal Contracting
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            GovBidAI combines procurement data, AI-driven analysis, and proposal
            intelligence into a unified platform designed to help SMBs compete
            more effectively in federal markets.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.07]"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20 transition group-hover:bg-cyan-500/20">
                  <Icon className="h-7 w-7 text-cyan-300" />
                </div>

                {/* Value */}
                <h3 className="text-4xl font-bold tracking-tight text-white">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="mt-3 text-lg font-medium text-white">
                  {item.label}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
