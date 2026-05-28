import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Search,
  BrainCircuit,
  Target,
  FileText,
  MessageSquare,
} from "lucide-react";

export type PlatformTool = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const platformTools: PlatformTool[] = [
  {
    id: "profile",
    icon: Building2,
    title: "Company Profile",
    description:
      "Capabilities, NAICS, certifications, and past performance in one capture-ready profile.",
  },
  {
    id: "discovery",
    icon: Search,
    title: "SAM.gov Discovery",
    description:
      "Monitor federal notices and filter opportunities aligned to your business profile.",
  },
  {
    id: "scoring",
    icon: Target,
    title: "P-Win Scoring",
    description:
      "Probability-of-win insights from agency history, set-asides, and competitive signals.",
  },
  {
    id: "analysis",
    icon: BrainCircuit,
    title: "Procurement Analysis",
    description:
      "AI agents synthesize RFP requirements, awards data, and competitor patterns.",
  },
  {
    id: "compliance",
    icon: FileText,
    title: "Compliance & Proposals",
    description:
      "Compliance matrices, proposal outlines, and capture documentation assistance.",
  },
  {
    id: "chat",
    icon: MessageSquare,
    title: "AI Capture Chat",
    description:
      "Ask questions in plain language—get next steps tied to your pipeline and solicitations.",
  },
];
