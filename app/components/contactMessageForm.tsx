"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { FORMSPREE_CONTACT_FORM_ID } from "../lib/formspree";

const field =
  "w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/30";

const submitBtn =
  "flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-medium text-black transition hover:bg-cyan-400 disabled:opacity-60";

function FormNotConfigured() {
  return (
    <p className="rounded-2xl border border-amber-400/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
      Contact form is not configured. Add{" "}
      <code className="text-amber-100">
        NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID
      </code>{" "}
      and Turnstile keys to <code className="text-amber-100">.env.local</code>{" "}
      (see .env.example).
    </p>
  );
}

export default function ContactMessageForm() {
  const router = useRouter();
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

  if (!FORMSPREE_CONTACT_FORM_ID) return <FormNotConfigured />;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) {
      setError("Please complete the security check before submitting.");
      return;
    }

    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const payload = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement)
        .value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      organizationType: (
        form.elements.namedItem("organizationType") as HTMLSelectElement
      ).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : "Could not send message.",
        );
      }
      router.push("/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-3 block text-sm font-medium text-gray-300">
            First Name
          </label>
          <input
            name="firstName"
            required
            placeholder="John"
            className={field}
          />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-gray-300">
            Last Name
          </label>
          <input name="lastName" required placeholder="Doe" className={field} />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-3 block text-sm font-medium text-gray-300">
            Business Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="company@email.com"
            className={field}
          />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-gray-300">
            Company Name
          </label>
          <input
            name="company"
            required
            placeholder="Company LLC"
            className={field}
          />
        </div>
      </div>
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-300">
          Organization Type
        </label>
        <select
          name="organizationType"
          required
          className={field}
          defaultValue="Small Business"
        >
          <option value="Small Business">Small Business</option>
          <option value="Government Contractor">Government Contractor</option>
          <option value="Consulting Firm">Consulting Firm</option>
          <option value="Enterprise Organization">
            Enterprise Organization
          </option>
        </select>
      </div>
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us about your procurement goals..."
          className={field}
        />
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-gray-300">
          Security check
        </p>
        {siteKey ? (
          <Turnstile
            ref={turnstileRef}
            siteKey={siteKey}
            onSuccess={setTurnstileToken}
            onExpire={() => setTurnstileToken(null)}
            onError={() => setTurnstileToken(null)}
            options={{ theme: "dark", size: "flexible" }}
          />
        ) : (
          <p className="rounded-2xl border border-amber-400/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
            Captcha is not configured. Add{" "}
            <code className="text-amber-100">
              NEXT_PUBLIC_TURNSTILE_SITE_KEY
            </code>{" "}
            to <code className="text-amber-100">.env.local</code>.
          </p>
        )}
      </div>

      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting || !siteKey || !turnstileToken}
        className={submitBtn}
      >
        {submitting ? "Sending…" : "Submit Request"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
