"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  //   Linkedin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Background Effects */}
      <div className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Top Nav */}
        <div className="mb-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Enterprise Preview Access
          </div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
            Let’s Discuss Your Procurement Strategy
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Request early access, schedule a platform walkthrough, or connect
            with the GovBidAI team to explore how AI-driven procurement
            intelligence can support your organization.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-24 grid gap-10 lg:grid-cols-5">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:col-span-2"
          >
            {/* Contact Cards */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-white">
                Contact Information
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Connect with our team for procurement intelligence, platform
                previews, and partnership discussions.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                    <Mail className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="mt-1 font-medium text-white">
                      contact@govbidai.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                    <Phone className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="mt-1 font-medium text-white">
                      +1 (000) 000-0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                    <MapPin className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="mt-1 font-medium text-white">United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                    {/* <Linkedin className="h-5 w-5 text-cyan-300" /> */}
                    <FaLinkedin className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <p className="mt-1 font-medium text-white">GovBidAI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="rounded-3xl border border-cyan-400/10 bg-cyan-500/10 p-8">
              <h3 className="text-xl font-semibold text-white">
                Enterprise Procurement Intelligence
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-300">
                GovBidAI is designed to help SMBs navigate federal procurement
                more strategically through AI-powered opportunity analysis,
                proposal automation, and procurement intelligence workflows.
              </p>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl md:p-10">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white">
                  Send Us A Message
                </h2>

                <p className="mt-3 text-gray-400">
                  Complete the form below and our team will reach out regarding
                  platform previews and onboarding opportunities.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-300">
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="John"
                      className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/30"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-300">
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/30"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-300">
                      Business Email
                    </label>

                    <input
                      type="email"
                      placeholder="company@email.com"
                      className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/30"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-300">
                      Company Name
                    </label>

                    <input
                      type="text"
                      placeholder="Company LLC"
                      className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Organization Type
                  </label>

                  <select className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none focus:border-cyan-400/30">
                    <option>Small Business</option>
                    <option>Government Contractor</option>
                    <option>Consulting Firm</option>
                    <option>Enterprise Organization</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your procurement goals or organization..."
                    className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/30"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-medium text-black transition hover:bg-cyan-400"
                >
                  Submit Request
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
