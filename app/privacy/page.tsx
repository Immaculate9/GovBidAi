import LegalDocument from "../components/legal/legalDocument";
import { privacyIntro, privacySections } from "../lib/legalContent";
import { LEGAL_LAST_UPDATED } from "../lib/site";

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro={privacyIntro}
      sections={privacySections}
      related={{ label: "Terms of Service", href: "/terms" }}
    />
  );
}
