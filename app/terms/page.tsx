import LegalDocument from "../components/legal/legalDocument";
import { termsIntro, termsSections } from "../lib/legalContent";
import { LEGAL_LAST_UPDATED } from "../lib/site";

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro={termsIntro}
      sections={termsSections}
      related={{ label: "Privacy Policy", href: "/privacy" }}
    />
  );
}
