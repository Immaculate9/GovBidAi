import { NextResponse } from "next/server";
import { FORMSPREE_CONTACT_FORM_ID } from "../../lib/formspree";

type ContactBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  organizationType?: string;
  message?: string;
  turnstileToken?: string;
};

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    },
  );

  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

export async function POST(request: Request) {
  if (!FORMSPREE_CONTACT_FORM_ID) {
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 503 },
    );
  }

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const {
    firstName,
    lastName,
    email,
    company,
    organizationType,
    message,
    turnstileToken,
  } = body;

  if (
    !firstName?.trim() ||
    !lastName?.trim() ||
    !email?.trim() ||
    !company?.trim() ||
    !organizationType?.trim() ||
    !message?.trim()
  ) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!turnstileToken) {
    return NextResponse.json(
      { error: "Please complete the security check." },
      { status: 400 },
    );
  }

  const turnstileOk = await verifyTurnstile(turnstileToken);
  if (!turnstileOk) {
    return NextResponse.json(
      { error: "Security verification failed. Please try again." },
      { status: 403 },
    );
  }

  const formData = new FormData();
  formData.append("formType", "contact");
  formData.append("firstName", firstName.trim());
  formData.append("lastName", lastName.trim());
  formData.append("email", email.trim());
  formData.append("company", company.trim());
  formData.append("organizationType", organizationType.trim());
  formData.append("message", message.trim());
  formData.append(
    "_subject",
    `GovnBidAI contact — ${firstName.trim()} ${lastName.trim()}`,
  );

  const formspreeRes = await fetch(
    `https://formspree.io/f/${FORMSPREE_CONTACT_FORM_ID}`,
    {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    },
  );

  if (!formspreeRes.ok) {
    const data = await formspreeRes.json().catch(() => ({}));
    const err =
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof (data as { error: unknown }).error === "string"
        ? (data as { error: string }).error
        : "Could not send message.";
    return NextResponse.json({ error: err }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
