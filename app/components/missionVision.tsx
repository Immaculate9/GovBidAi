"use client";

import { motion } from "framer-motion";
import { Target, Telescope } from "lucide-react";
import { MISSION_STATEMENT, VISION_STATEMENT } from "../lib/site";

export default function MissionVisionSection() {
  return (
    <section
      id="mission"
      className="relative w-full overflow-hidden border-y border-white/5 bg-[#060B1A] py-28 scroll-mt-24"
    >
      <div className="absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Our Purpose
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Mission &amp; Vision
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
              <Target className="h-7 w-7 text-cyan-300" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Mission</h3>
            <p className="mt-5 text-base leading-8 text-gray-300">
              {MISSION_STATEMENT}
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-400/20">
              <Telescope className="h-7 w-7 text-blue-300" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Vision</h3>
            <p className="mt-5 text-base leading-8 text-gray-300">
              {VISION_STATEMENT}
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
