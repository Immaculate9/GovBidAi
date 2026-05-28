import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: { title: string; bullets: string[] }[];
};

type Props = {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
  related?: { label: string; href: string };
};

export default function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
  related,
}: Props) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 pb-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <header className="mt-10 border-b border-white/10 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: {lastUpdated}</p>
      </header>

      <div className="prose-legal mt-10 space-y-10 text-gray-300">
        {intro.map((p) => (
          <p key={p.slice(0, 40)} className="leading-8 text-gray-400">
            {p}
          </p>
        ))}

        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>

            {section.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 leading-8">
                {p}
              </p>
            ))}

            {section.subsections?.map((sub) => (
              <div key={sub.title} className="mt-6">
                <h3 className="text-sm font-medium uppercase tracking-wider text-cyan-300/90">
                  {sub.title}
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-400">
                  {sub.bullets.map((b) => (
                    <li key={b.slice(0, 48)}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}

            {section.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-gray-400">
                {section.bullets.map((b) => (
                  <li key={b.slice(0, 48)}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {related && (
        <p className="mt-12 border-t border-white/10 pt-8 text-sm text-gray-500">
          See also{" "}
          <Link href={related.href} className="text-cyan-400 hover:text-cyan-300">
            {related.label}
          </Link>
          .
        </p>
      )}
    </article>
  );
}
