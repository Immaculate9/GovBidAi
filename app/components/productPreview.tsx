"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck, FileText } from "lucide-react";

export default function ProductPreviewSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#060B1A] py-28">
      {/* Background Effects */}
      <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute left-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Product Preview
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Procurement Intelligence Meets AI Automation
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Explore a preview of the GovBidAI platform experience, designed to
            help businesses identify, analyze, and pursue federal opportunities
            more strategically.
          </p>
        </motion.div>

        {/* Preview Layout */}
        <div className="space-y-10">
          {/* Top Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  AI Opportunity Intelligence Dashboard
                </h3>

                <p className="mt-2 text-gray-400">
                  Real-time procurement analysis and strategic contract
                  matching.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 px-4 py-3 text-sm text-cyan-300">
                <Sparkles className="h-4 w-4" />
                AI Processing Active
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Left Table */}
              <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-5 lg:col-span-2">
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="font-semibold text-white">
                    Recommended Opportunities
                  </h4>

                  <button className="text-sm text-cyan-300">View All</button>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Cybersecurity Infrastructure Support",
                      agency: "Department of Defense",
                      score: "94%",
                    },
                    {
                      title: "Cloud Migration Modernization",
                      agency: "U.S. Air Force",
                      score: "91%",
                    },
                    {
                      title: "Enterprise Data Analytics",
                      agency: "Department of Energy",
                      score: "89%",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h5 className="font-medium text-white">
                            {item.title}
                          </h5>

                          <p className="mt-1 text-sm text-gray-400">
                            {item.agency}
                          </p>
                        </div>

                        <div className="rounded-lg bg-cyan-500/10 px-3 py-2 text-sm font-semibold text-cyan-300">
                          {item.score}
                        </div>
                      </div>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          style={{ width: item.score }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Insights */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-cyan-300" />

                    <h4 className="font-semibold text-white">
                      Compliance Status
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {[
                      "NAICS Alignment",
                      "Capability Match",
                      "Past Performance",
                      "Socio-Economic Qualification",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        <span className="text-sm text-gray-300">{item}</span>

                        <span className="text-xs text-cyan-300">Verified</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-400/10 bg-cyan-500/10 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <FileText className="h-5 w-5 text-cyan-300" />

                    <h4 className="font-semibold text-white">
                      AI Proposal Insight
                    </h4>
                  </div>

                  <p className="text-sm leading-7 text-gray-300">
                    Historical agency procurement patterns indicate increased
                    alignment with your company profile and previous award
                    categories.
                  </p>

                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                    View Recommendation
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
