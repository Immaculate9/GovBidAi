"use client";

import { useEffect } from "react";
import EarlyAccessForm from "./earlyAccessForm";

export default function MyModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-demo-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        onClick={closeModal}
        aria-label="Close dialog"
      />
      <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 text-gray-900 shadow-2xl">
        <div className="flex items-center justify-between pb-3">
          <h5 id="request-demo-title" className="text-xl font-semibold">
            Request Early Access
          </h5>
          <button
            type="button"
            onClick={closeModal}
            className="h-8 w-8 rounded font-bold text-gray-500 hover:text-gray-900"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <hr className="border-gray-200" />
        <EarlyAccessForm variant="modal" onSuccess={closeModal} />
      </div>
    </div>
  );
}
