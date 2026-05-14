"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, BarChart3 } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* ========================= */}
      {/* SECTION 1 — NAVBAR */}
      {/* ========================= */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 ring-1 ring-cyan-400/30">
              <Sparkles className="h-5 w-5 text-cyan-400" />
            </div>

            <div>
              <p className="text-lg font-semibold tracking-tight">GovBidAI</p>
              <p className="text-xs text-gray-400">Procurement Intelligence</p>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Features
            </Link>

            {/* <Link
              href="#product"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Product
            </Link> */}

            <Link
              href="#mission"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Mission
            </Link>

            <Link
              href="/contact"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-cyan-400"
          >
            Request Early Access
          </Link>
        </div>
      </header>

      {/* ========================= */}
      {/* SECTION 2 — HERO */}
      {/* ========================= */}

      <section className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-10 lg:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl flex-1"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles className="h-4 w-4" />
            AI-Powered Federal Contract Intelligence
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Government Contracting is a{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Data Problem.
            </span>{" "}
            We Solved It.
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            GovBidAI helps small and medium-sized businesses discover, qualify,
            and win federal opportunities using AI-driven procurement
            intelligence and proposal automation.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-medium text-black transition hover:bg-cyan-400">
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-medium text-white transition hover:bg-white/10">
              Join Waitlist
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

        {/* Right Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-cyan-500/10 blur-3xl" />

          {/* Dashboard Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl">
            {/* Top Bar */}
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-semibold">AI Opportunity Match</h3>
                <p className="text-sm text-gray-400">
                  Live procurement intelligence
                </p>
              </div>

              <div className="rounded-xl bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300">
                94% P-Win
              </div>
            </div>

            {/* Contract Cards */}
            <div className="space-y-4">
              {[
                {
                  title: "Cybersecurity Modernization Support",
                  agency: "Department of Defense",
                  score: "94%",
                },
                {
                  title: "Cloud Infrastructure Services",
                  agency: "U.S. Air Force",
                  score: "89%",
                },
                {
                  title: "Data Analytics Modernization",
                  agency: "Department of Energy",
                  score: "91%",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="mt-1 text-sm text-gray-400">
                        {item.agency}
                      </p>
                    </div>

                    <div className="rounded-lg bg-cyan-500/10 px-3 py-2 text-sm font-semibold text-cyan-300">
                      {item.score}
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ width: item.score }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom AI Insight */}
            <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-500/10 p-5">
              <p className="text-sm font-medium text-cyan-300">AI Insight</p>

              <p className="mt-2 text-sm leading-7 text-gray-300">
                Historical procurement data indicates strong alignment between
                your NAICS classification, agency spending patterns, and
                previous contract awards.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
