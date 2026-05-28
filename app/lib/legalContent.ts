import { PRIVACY_EMAIL, SECURITY_EMAIL } from "./site";
import type { LegalSection } from "../components/legal/legalDocument";

export const privacyIntro = [
  'GovnBidAI ("we," "our," or "us"), a wholly owned operating subsidiary of Deye Solutions, is committed to protecting the privacy and security of your data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use the GovnBidAI procurement platform and related services (the "Service").',
  "We follow data minimization: we only collect and process information reasonably necessary to provide our AI-driven procurement services.",
];

export const privacySections: LegalSection[] = [
  {
    title: "1. Information We Collect",
    subsections: [
      {
        title: "Enterprise and user-provided data",
        bullets: [
          "Account credentials: name, business email, corporate phone, password, and billing details (processed via Stripe).",
          "Corporate context: company profiles, NAICS codes, past performance, capability statements, and structural business documents uploaded to improve AI accuracy.",
          "Solicitation inputs: federal, state, or commercial RFPs, links, or text provided for parsing and match analysis.",
        ],
      },
      {
        title: "Automatically collected data",
        bullets: [
          "Usage logs: AI queries, proposal drafts, feature usage, and access timestamps.",
          "Device and network data: IP address, browser type, device identifiers, and OS attributes for integrity and audit logging.",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Data & AI Practices",
    bullets: [
      "We use data only to operate, maintain, and secure the Service.",
      "Zero-training guarantee: your corporate data, RFPs, and custom documents are never used to train, fine-tune, or feed public or multi-tenant foundational LLMs. Processing uses isolated infrastructure (including AWS Amplify Gen-2).",
      "Scope-bounded inference: data is used solely for context-aware recommendations, your P-Win metrics, and your automated proposal deliverables.",
      'Automated decision-making: algorithmic scoring of contract fit is advisory only and does not produce legally binding outcomes without human review ("human-in-the-loop").',
    ],
  },
  {
    title: "3. Data Retention",
    bullets: [
      "Account information and business profiles are kept for the life of your subscription.",
      "Compliance matrices and parsed text from RPA tools can be permanently purged on request via the admin dashboard.",
      "Security audit logs are retained as required for compliance, then compressed or deleted.",
    ],
  },
  {
    title: "4. How We Share Information",
    bullets: [
      "We do not sell, rent, or trade your personal or corporate data.",
      "Authorized providers (e.g., AWS, Stripe, Pinecone, Supabase) process data under confidentiality agreements and may not use it for independent purposes.",
      "We may disclose data when required by applicable U.S. federal or state law, court order, or enforceable administrative rule.",
      "In a merger, acquisition, or asset sale by Deye Solutions, data transfers remain subject to this Policy.",
    ],
  },
  {
    title: "5. Security & Compliance",
    bullets: [
      "Aligned with ISO/IEC 27001:2022 principles: administrative, technical, and physical safeguards.",
      "Encryption in transit (TLS 1.3) and at rest (AES-256).",
      "Role-based access control (RBAC) and mandatory MFA.",
      "Client-isolated vector indices; zero-training pipelines block leakage to public interfaces.",
    ],
  },
  {
    title: "6. Your Privacy Rights",
    paragraphs: [
      `Depending on your state (including CA, CO, CT, IN, NJ, DE, MD, and others), you may exercise rights to know/access, delete, correct, and opt out of automated profiling used for contract scoring. We honor Global Privacy Control (GPC) signals. Contact ${PRIVACY_EMAIL}. We do not discriminate or change pricing when you exercise these rights.`,
    ],
    bullets: [
      "Right to know and access — including technical inferences about your business context.",
      "Right to deletion and correction of your profile.",
      "Right to opt out of automated profiling for contract fitness scoring.",
    ],
  },
  {
    title: "7. International Boundaries",
    bullets: [
      "Processing occurs on U.S.-based cloud infrastructure. We restrict transfer of sensitive or government-adjacent data to foreign jurisdictions of concern, per applicable U.S. regulations.",
      "The Service is for adult business users only. We do not knowingly collect data from anyone under 18.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    paragraphs: [
      "We may update this Policy for AI governance, FTC guidance, and state privacy law. Material changes will be announced on the platform and reflected in the date above.",
    ],
  },
];

export const termsIntro = [
  'Welcome to GovnBidAI. These Terms of Service ("Terms") govern the GovnBidAI procurement platform and related features (the "Service"), owned and operated by Deye Solutions LLC, Chicago, Illinois.',
  "By using the Service, you agree to these Terms. If you act for an organization, you represent that you have authority to bind it. If you do not agree, do not use the Service.",
];

export const termsSections: LegalSection[] = [
  {
    title: "1. Eligibility & Accounts",
    bullets: [
      "Commercial use only — for businesses and professionals pursuing government contracting, not personal consumer use.",
      "Users must be at least 18 years old.",
      `Provide accurate registration information. You are responsible for account credentials and all activity under your account. Report unauthorized access to ${SECURITY_EMAIL}.`,
    ],
  },
  {
    title: "2. Service & AI Tools",
    bullets: [
      "We grant a limited, non-exclusive, non-transferable, revocable license per your subscription plan.",
      "The platform uses AI, vector retrieval, and RPA to match your documents against procurement sources (e.g., SAM.gov) and assist compliance parsing.",
      "P-Win scores and match metrics are advisory estimates only — we do not guarantee awards, bid accuracy, or agency acceptance.",
      "You must independently review and finalize all compliance matrices, pricing, and proposals before government submission.",
    ],
  },
  {
    title: "3. Data & Intellectual Property",
    subsections: [
      {
        title: "Your content",
        bullets: [
          "You retain ownership of capability statements, past performance, NAICS data, and RFPs you upload.",
          "We do not use your content to train public or multi-tenant LLMs; processing stays in client-isolated environments per our Privacy Policy.",
        ],
      },
      {
        title: "Our property",
        bullets: [
          "Interfaces, algorithms, RPA scripts, logos, and system architecture remain property of Deye Solutions LLC. You may not copy, reverse-engineer, or decompile the Service.",
        ],
      },
    ],
  },
  {
    title: "4. Fees & Subscriptions",
    bullets: [
      "Tiered monthly subscriptions are billed via Stripe. Pricing may change with 30 days' notice.",
      "Cancel anytime in your dashboard; cancellation stops renewal but does not refund the current billing cycle.",
      "Monthly AI credits expire each cycle. Top-up credits roll over only after 3 consecutive months of active subscription, per platform documentation.",
    ],
  },
  {
    title: "5. Acceptable Use",
    bullets: [
      "Do not violate procurement laws or compromise sensitive government data.",
      "No scrapers, bulk mining, or brute-force queries against platform data.",
      "Do not share one license across unregistered users or entities.",
      "Do not submit malware or logic intended to disrupt our infrastructure.",
      "We may suspend or terminate access immediately for violations.",
    ],
  },
  {
    title: "6. Privacy & Security",
    paragraphs: [
      "Use of the Service is governed by our Privacy Policy. We maintain AES-256 at rest, TLS 1.3 in transit, audit logging, and RBAC aligned with ISO/IEC 27001:2022 practices.",
    ],
  },
  {
    title: "7. Disclaimer of Warranties",
    paragraphs: [
      'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT UNINTERRUPTED, ERROR-FREE, OR COMPLETE PARSING OF EVERY FAR/DFARS CLAUSE.',
    ],
  },
  {
    title: "8. Limitation of Liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, DEYE SOLUTIONS LLC AND ITS AFFILIATES ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOST PROFITS, BIDS, OR GOODWILL) ARISING FROM USE OF THE SERVICE, OUTPUT ACCURACY, CONTRACT LOSSES, OR CLIENT-SIDE CREDENTIAL COMPROMISE.",
      "AGGREGATE LIABILITY IS LIMITED TO AMOUNTS YOU PAID FOR THE SERVICE IN THE TWELVE (12) MONTHS BEFORE THE CLAIM.",
    ],
  },
  {
    title: "9. Indemnification",
    paragraphs: [
      "You agree to defend and indemnify Deye Solutions LLC and its officers from claims arising from your misuse of the platform, bid submissions, or violation of third-party rights or federal acquisition rules.",
    ],
  },
  {
    title: "10. Governing Law & Disputes",
    bullets: [
      "These Terms are governed by Illinois law, without regard to conflict-of-law rules.",
      "Disputes shall be resolved by binding AAA Commercial Arbitration in Chicago, Illinois. Judgment on the award may be entered in any court with jurisdiction.",
    ],
  },
  {
    title: "11. Severability & Entire Agreement",
    paragraphs: [
      "If any provision is unenforceable, the remainder stays in effect. These Terms are the entire agreement regarding GovnBidAI and supersede prior informal understandings.",
    ],
  },
];
