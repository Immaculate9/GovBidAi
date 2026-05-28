"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  BrainCircuit,
  ShieldCheck,
  TrendingUp,
  Lock,
  Database,
} from "lucide-react";

const stats = [
  {
    icon: FileSearch,
    value: "SAM.gov-ready",
    label: "Opportunity discovery",
    description:
      "Designed to align with federal notice workflows and your company profile.",
  },
  {
    icon: BrainCircuit,
    value: "Guided",
    label: "Match & scoring",
    description:
      "Multidimensional fit signals—not a guarantee of award outcomes.",
  },
  {
    icon: ShieldCheck,
    value: "Structured",
    label: "Compliance support",
    description:
      "Matrices and checklists to help teams review requirements faster.",
  },
  {
    icon: TrendingUp,
    value: "Informed",
    label: "Capture insights",
    description:
      "Historical award context and competitor patterns to support decisions.",
  },
];

const trustItems = [
  {
    icon: Database,
    text: "Built for SAM.gov-aligned procurement workflows (preview)",
  },
  {
    icon: Lock,
    text: "Encryption in transit · least-privilege access by design",
  },
  {
    icon: ShieldCheck,
    text: "Security & compliance roadmap for enterprise onboarding",
  },
];

export default function StatsSection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-[#060B1A] py-24">
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6">
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
            GovnBidAI combines procurement data, guided analysis, and proposal
            support for SMB teams—preview metrics below are illustrative.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20 transition group-hover:bg-cyan-500/20">
                  <Icon className="h-7 w-7 text-cyan-300" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {item.value}
                </h3>
                <p className="mt-3 text-lg font-medium text-white">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-center md:justify-between md:gap-8"
        >
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-start gap-3 text-sm text-gray-400"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
