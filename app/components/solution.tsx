"use client";

import { motion } from "framer-motion";
import { platformTools } from "../lib/platformTools";

export default function SolutionSection() {
  return (
    <section
      id="features"
      className="relative w-full overflow-hidden bg-[#060B1A] py-28 scroll-mt-24"
    >
      <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            The Solution
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Six Tools, One Procurement Workflow
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            GovnBidAI connects SAM.gov discovery, scoring, compliance, and
            proposal support—guided by an AI capture assistant.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platformTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-cyan-400/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {tool.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {tool.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
