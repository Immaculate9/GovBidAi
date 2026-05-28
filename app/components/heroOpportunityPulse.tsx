"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const STATS = [
  { label: "Win Probability", value: "94.2%" },
  { label: "Active Bids", value: "12" },
  { label: "Pipeline Value", value: "$4.2M" },
] as const;

/** 12 demo agencies — scores scaled to 80–100 (original hero bar heights). */
const AGENCY_SCORES = [
  { agency: "Department of Defense", score: 80 },
  { agency: "U.S. Air Force", score: 87 },
  { agency: "Department of Energy", score: 83 },
  { agency: "Department of Homeland Security", score: 93 },
  { agency: "NASA", score: 90 },
  { agency: "General Services Administration", score: 96 },
  { agency: "Department of Veterans Affairs", score: 85 },
  { agency: "U.S. Navy", score: 100 },
  { agency: "Department of Health and Human Services", score: 91 },
  { agency: "U.S. Army", score: 94 },
  { agency: "Department of State", score: 88 },
  { agency: "NOAA", score: 98 },
];

type TooltipPayload = { payload?: { agency: string; score: number } };

function ScoreTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
}) {
  if (!active || !payload?.[0]?.payload) return null;
  const { agency, score } = payload[0].payload;
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/95 px-3 py-2 text-xs text-white shadow-xl backdrop-blur-sm">
      {agency} score : {score}
    </div>
  );
}

export default function HeroOpportunityPulse() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-1 shadow-2xl backdrop-blur-2xl">
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">Opportunity Pulse</h3>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            GovnBidAI Analytics v2.0
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3"
            >
              <p className="text-xs text-slate-400">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/80 p-4">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-white">Probability of Win</p>
              <p className="text-xs text-slate-500">
                Hover bars for agency scores
              </p>
            </div>
            <span className="text-xs text-slate-500">Live update</span>
          </div>

          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={AGENCY_SCORES}
                margin={{ top: 8, right: 4, left: -12, bottom: 4 }}
                barCategoryGap="18%"
              >
                <defs>
                  <linearGradient id="heroBarGradient" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.06)"
                  vertical={false}
                />
                <XAxis dataKey="agency" hide />
                <YAxis
                  domain={[75, 100]}
                  ticks={[75, 80, 85, 90, 95, 100]}
                  tick={{ fill: "#64748b", fontSize: 10 }}
                  tickLine={false}
                  axisLine={false}
                  width={28}
                />
                <Tooltip
                  content={<ScoreTooltip />}
                  cursor={{ fill: "rgba(34, 211, 238, 0.1)" }}
                />
                <Bar
                  dataKey="score"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={20}
                  activeBar={{ fill: "url(#heroBarGradient)", opacity: 1 }}
                >
                  {AGENCY_SCORES.map((entry) => (
                    <Cell key={entry.agency} fill="url(#heroBarGradient)" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
