"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import ContactMessageForm from "../components/contactMessageForm";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
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
          Send us a message and our team will reach out regarding platform
          previews, partnerships, and onboarding opportunities.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-16 max-w-3xl"
      >
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl md:p-10">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white">Send Us A Message</h2>

            <p className="mt-3 text-gray-400">
              Complete the form below. A security check is required before your
              message is sent.
            </p>
          </div>

          <ContactMessageForm />
        </div>
      </motion.div>
    </div>
  );
}
