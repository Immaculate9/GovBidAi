/**
 * Formspree form IDs — create forms at https://formspree.io
 * and set each form's notification email in the Formspree dashboard:
 *   - Contact form → contact.govnbidai@deyesolutions.com
 *   - Access form  → access.govnbidai@deyesolutions.com
 */
export const FORMSPREE_CONTACT_FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID ?? "";

export const FORMSPREE_ACCESS_FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_ACCESS_FORM_ID ??
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ??
  "";
