"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowRight, BarChart3, ShieldCheck, Sparkles } from "lucide-react";

export default function HeroSection() {
  const contractData = [
    {
      title: "Cybersecurity Modernization Support",
      agency: "Department of Defense",
      score: 94,
      label: "94%",
    },
    {
      title: "Cloud Infrastructure Services",
      agency: "U.S. Air Force",
      score: 89,
      label: "89%",
    },
    {
      title: "Data Analytics Modernization",
      agency: "Department of Energy",
      score: 91,
      label: "91%",
    },
  ];

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-8 lg:flex-row">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
          <Sparkles className="h-4 w-4" />
          AI-Powered Federal Contract Intelligence
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Government Contracting is a{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Data Problem.
          </span>{" "}
          We Solved It.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          GovBidAI helps SMBs discover, track, and win federal opportunities by
          matching capability, past performance, and socio-economic signals to
          active RFPs.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold text-black transition hover:bg-cyan-400">
            Explore GovBidAI
          </button>
          <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm text-white transition hover:bg-white/10">
            Request Early Access
          </button>
        </div>

        {/* Mini Stats */}
        <div className="mt-12 flex flex-wrap gap-6">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            <div>
              <p className="text-sm font-medium">Compliance Ready</p>
              <p className="text-xs text-gray-400">AI-assisted matrices</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <BarChart3 className="h-5 w-5 text-cyan-400" />
            <div>
              <p className="text-sm font-medium">P-Win Scoring</p>
              <p className="text-xs text-gray-400">
                Intelligent opportunity ranking
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Analytics Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl flex-1"
      >
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Opportunity Pulse
              </h2>
            </div>

            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              GovBidAI Analytics v2.0
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm text-slate-400">Win Probability</p>
              <p className="mt-3 text-3xl font-semibold text-white">94.2%</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm text-slate-400">Active Bids</p>
              <p className="mt-3 text-3xl font-semibold text-white">12</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm text-slate-400">Pipeline Value</p>
              <p className="mt-3 text-3xl font-semibold text-white">$4.2M</p>
            </div>
          </div>

          <div className="mt-6 rounded-[32px] bg-slate-950/80 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Probability of Win</p>
                <p className="text-sm font-semibold text-white">
                  Contract score by agency
                </p>
              </div>
              <div className="text-xs text-slate-500">Live update</div>
            </div>

            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={contractData}
                  margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="scoreGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.9} />
                      <stop
                        offset="95%"
                        stopColor="#2563eb"
                        stopOpacity={0.2}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.08)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="agency"
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                  />
                  <YAxis
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[80, 100]}
                    width={32}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#0f172a",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 12,
                      color: "#e2e8f0",
                    }}
                    cursor={{ fill: "rgba(255,255,255,0.05)" }}
                  />
                  <Bar
                    dataKey="score"
                    radius={[20, 20, 0, 0]}
                    fill="url(#scoreGradient)"
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
