"use client";

import { motion } from "framer-motion";
import { Building2, BrainCircuit, Target, FileText } from "lucide-react";

const workflow = [
  {
    icon: Building2,
    title: "Create Company Profile",
    description:
      "Upload business capabilities, certifications, NAICS codes, and past performance history.",
  },
  {
    icon: BrainCircuit,
    title: "AI Procurement Analysis",
    description:
      "GovBidAI analyzes procurement opportunities using multidimensional matching algorithms.",
  },
  {
    icon: Target,
    title: "P-Win Opportunity Scoring",
    description:
      "Receive intelligent contract recommendations with probability-of-win insights and strategic guidance.",
  },
  {
    icon: FileText,
    title: "Proposal Intelligence",
    description:
      "Generate proposal drafts, compliance matrices, and AI-assisted capture documentation.",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="features"
      className="relative w-full overflow-hidden bg-[#060B1A] py-28"
    >
      {/* Background Effects */}
      <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            The Solution
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            AI-Driven Procurement Intelligence
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            GovBidAI transforms fragmented procurement data into actionable
            intelligence, helping businesses identify high-probability contract
            opportunities faster and more efficiently.
          </p>
        </motion.div>

        {/* Workflow */}
        <div className="relative grid gap-10 lg:grid-cols-4">
          {/* Connecting Line */}
          <div className="absolute left-0 top-24 hidden h-[2px] w-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 lg:block" />

          {workflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-5 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0B1220] text-sm font-semibold text-cyan-300">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 pt-12 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]">
                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20 transition group-hover:bg-cyan-500/20">
                    <Icon className="h-8 w-8 text-cyan-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-center text-sm leading-7 text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
