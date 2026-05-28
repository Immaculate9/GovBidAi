"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { FORMSPREE_ACCESS_FORM_ID } from "../lib/formspree";
import { ACCESS_EMAIL } from "../lib/site";

type Variant = "footer" | "modal";

type Props = {
  variant: Variant;
  onSuccess?: () => void;
};

const fieldFooter =
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/30";

const fieldModal =
  "mt-1 w-full rounded-md border p-2 text-sm outline-none focus:border-primary";

function FormNotConfigured() {
  return (
    <p className="rounded-2xl border border-amber-400/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
      Early access form is not configured. Add{" "}
      <code className="text-amber-100">
        NEXT_PUBLIC_FORMSPREE_ACCESS_FORM_ID
      </code>{" "}
      to <code className="text-amber-100">.env.local</code> (see .env.example).
    </p>
  );
}

async function postToFormspree(form: HTMLFormElement) {
  const res = await fetch(
    `https://formspree.io/f/${FORMSPREE_ACCESS_FORM_ID}`,
    {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    },
  );
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(
      typeof data.error === "string" ? data.error : "Could not send request.",
    );
  }
}

function EarlyAccessFormFields({ variant, onSuccess }: Props) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await postToFormspree(e.currentTarget);
      onSuccess?.();
      router.push("/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const errorBlock = error ? (
    <p className="text-sm text-red-400" role="alert">
      {error}
    </p>
  ) : null;

  const submitBtn =
    "flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-6 py-4 font-medium text-black transition hover:bg-cyan-400 disabled:opacity-60";

  if (variant === "footer") {
    return (
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <input type="hidden" name="formType" value="early-access-footer" />
        <input type="hidden" name="_subject" value="GovnBidAI early access request" />
        <input
          type="hidden"
          name="recipient"
          value={ACCESS_EMAIL}
        />
        <input
          name="name"
          required
          placeholder="Full Name"
          className={fieldFooter}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Business Email"
          className={fieldFooter}
        />
        <input
          type="hidden"
          name="message"
          value="Early access request (homepage footer)."
        />
        {errorBlock}
        <button type="submit" disabled={submitting} className={submitBtn}>
          {submitting ? "Sending…" : "Request Access"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 pt-5">
      <input type="hidden" name="formType" value="early-access-modal" />
      <input type="hidden" name="_subject" value="GovnBidAI early access request" />
      <input type="hidden" name="recipient" value={ACCESS_EMAIL} />
      <div>
        <label htmlFor="modal-name" className="text-sm opacity-60">
          Full Name
        </label>
        <input id="modal-name" name="name" required className={fieldModal} />
      </div>
      <div>
        <label htmlFor="modal-email" className="text-sm opacity-60">
          Email
        </label>
        <input
          id="modal-email"
          name="email"
          type="email"
          required
          className={fieldModal}
        />
      </div>
      <div>
        <label htmlFor="modal-message" className="text-sm opacity-60">
          Message
        </label>
        <textarea
          id="modal-message"
          name="message"
          required
          rows={4}
          className={fieldModal}
        />
      </div>
      {errorBlock}
      <button
        type="submit"
        disabled={submitting}
        className="rounded-md bg-primary p-3 text-white disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request Early Access"}
      </button>
    </form>
  );
}

export default function EarlyAccessForm(props: Props) {
  if (!FORMSPREE_ACCESS_FORM_ID) return <FormNotConfigured />;
  return <EarlyAccessFormFields {...props} />;
}
