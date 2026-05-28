"use client";

import { motion } from "framer-motion";
import { SearchX, FileWarning, Clock3, BadgeDollarSign } from "lucide-react";

const problems = [
  {
    icon: SearchX,
    title: "Opportunity Overload",
    description:
      "Thousands of federal opportunities are released daily across fragmented procurement systems, making discovery difficult for SMBs.",
  },
  {
    icon: Clock3,
    title: "Manual Research",
    description:
      "Businesses spend countless hours manually reviewing RFPs, agency portals, and procurement databases.",
  },
  {
    icon: FileWarning,
    title: "Compliance Complexity",
    description:
      "Understanding solicitation requirements, compliance matrices, and proposal structures is often overwhelming.",
  },
  {
    icon: BadgeDollarSign,
    title: "High Consultant Costs",
    description:
      "Traditional bid consultants and capture management services are expensive and inaccessible for many small businesses.",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative w-full overflow-hidden bg-[#040816] py-28 scroll-mt-24"
    >
      {/* Glow */}
      <div className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
            The Problem
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            The Information Gap is Costing SMBs Contracts
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Large defense contractors maintain entire capture teams and
            procurement analysts. Small and medium-sized businesses often lack
            the resources, visibility, and automation required to compete
            effectively.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-red-400/20 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 ring-1 ring-red-400/20 transition group-hover:bg-red-500/20">
                  <Icon className="h-7 w-7 text-red-300" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {problem.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
