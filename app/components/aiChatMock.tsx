"use client";

import { motion } from "framer-motion";
import { Bot, User, Sparkles } from "lucide-react";
import { platformTools } from "../lib/platformTools";

const chatMessages = [
  {
    role: "user" as const,
    text: "Which DoD cybersecurity solicitations fit our 8(a) profile this month?",
  },
  {
    role: "assistant" as const,
    text: "I reviewed SAM.gov notices against your profile and past performance. Three opportunities show strong alignment—here’s the top match and suggested next steps.",
    tools: ["profile", "discovery", "scoring", "analysis"],
    highlight:
      "Cybersecurity Infrastructure Support · DoD · High fit · Response in 18 days",
  },
  {
    role: "user" as const,
    text: "Draft a compliance checklist and outline for the top one.",
  },
  {
    role: "assistant" as const,
    text: "I can generate a compliance matrix outline and a 2-page capability statement structure. Say “generate draft” when you’re ready—demo preview only.",
    tools: ["compliance", "chat"],
  },
];

export default function AiChatMockSection() {
  return (
    <section
      id="assistant"
      className="relative w-full overflow-hidden border-t border-white/5 bg-[#040816] py-28 scroll-mt-24"
    >
      <motion.div
        className="pointer-events-none absolute right-[-10%] top-[15%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles className="h-4 w-4" />
            AI Capture Chat · demo
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            One Assistant Across Six Tools
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Ask about opportunities, compliance, and proposals—GovnBidAI routes
            your question across profile, SAM.gov discovery, scoring, analysis,
            and proposal workflows.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {platformTools.map((tool) => (
            <span
              key={tool.id}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
            >
              {tool.title}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1220] shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <Bot className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-medium text-white">
              GovnBidAI Capture Assistant
            </span>
            <span className="ml-auto text-xs text-gray-500">Preview</span>
          </div>

          <div className="space-y-5 p-5">
            {chatMessages.map((msg, i) => (
              <motion.div
                key={i}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                    msg.role === "user"
                      ? "bg-white/10"
                      : "bg-cyan-500/15 ring-1 ring-cyan-400/20"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User className="h-4 w-4 text-gray-300" />
                  ) : (
                    <Bot className="h-4 w-4 text-cyan-300" />
                  )}
                </div>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-cyan-500/15 text-gray-100"
                      : "border border-white/10 bg-white/[0.04] text-gray-300"
                  }`}
                >
                  <p>{msg.text}</p>
                  {"highlight" in msg && msg.highlight && (
                    <p className="mt-3 rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-200">
                      {msg.highlight}
                    </p>
                  )}
                  {msg.role === "assistant" && "tools" in msg && msg.tools && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {msg.tools.map((id) => {
                        const tool = platformTools.find((t) => t.id === id);
                        return tool ? (
                          <span
                            key={id}
                            className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-gray-400"
                          >
                            {tool.title}
                          </span>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-white/10 px-4 py-3">
            <p className="text-center text-xs text-gray-500">
              Illustrative conversation · not connected to live SAM.gov data
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
