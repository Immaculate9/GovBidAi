"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden border-t border-white/10 bg-[#040816]"
    >
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-10%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                <Sparkles className="h-4 w-4" />
                Enterprise Preview Access
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Transform How Your Business Pursues Federal Contracts
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Join organizations leveraging AI-powered procurement
                intelligence to identify opportunities, streamline compliance,
                and improve proposal efficiency.
              </p>
            </div>

            {/* Right */}
            <div className="w-full max-w-md">
              <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
                <h3 className="text-xl font-semibold text-white">
                  Request Early Access
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Get notified about platform updates, previews, and private
                  beta availability.
                </p>

                {/* Form */}
                <div className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/30"
                  />

                  <input
                    type="email"
                    placeholder="Business Email"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/30"
                  />

                  <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-6 py-4 font-medium text-black transition hover:bg-cyan-400">
                    Request Access
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Secure */}
                <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
                  <ShieldCheck className="h-4 w-4 text-cyan-300" />
                  Enterprise-grade procurement intelligence platform
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FOOTER CONTENT */}
        <div className="mt-24 grid gap-16 border-t border-white/10 pt-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                <Sparkles className="h-6 w-6 text-cyan-300" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">GovBidAI</h3>

                <p className="text-sm text-gray-500">
                  Procurement Intelligence
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-gray-400">
              AI-powered procurement intelligence helping SMBs identify,
              qualify, and pursue federal opportunities with greater confidence
              and efficiency.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Features
            </h4>

            <ul className="mt-6 space-y-4">
              {[
                "AI Matching",
                "P-Win Scoring",
                "Proposal Automation",
                "Compliance Intelligence",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>

            <ul className="mt-6 space-y-4">
              {["About", "Mission", "Enterprise Preview", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Contact" ? "/contact" : "#solution"}
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 text-cyan-300" />
                contact@govbidai.com
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                {/* <Linkedin className="h-4 w-4 text-cyan-300" /> */}
                <FaLinkedin className="h-5 w-5 text-cyan-300" />
                LinkedIn
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GovBidAI. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
