"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (status === "success") {
      setShowToast(true);
      const timeout = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setStatus("error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setError(null);
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 800);
  }

  return (
    <section id="contact" className="relative bg-slate-950">
      <div className="section-container grid gap-10 md:grid-cols-[1.1fr,1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-300">
            Contact
          </p>
          <h2 className="heading-md mt-2">Tell us about your project</h2>
          <p className="mt-4 max-w-md text-sm text-slate-300">
            Share a few details and we&apos;ll respond within one business day
            with next steps and a ballpark timeline.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            <li>Email: deepakharidass1@gmail.com</li>
            <li>Phone: +91 6383059912</li>
            <li>Timezone: IST (UTC+5:30)</li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card space-y-4 bg-slate-900/70"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-slate-200"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none ring-brand-500/40 placeholder:text-slate-500 focus:ring-2"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none ring-brand-500/40 placeholder:text-slate-500 focus:ring-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-slate-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none ring-brand-500/40 placeholder:text-slate-500 focus:ring-2"
              placeholder="Tell us about your product, goals, and timeline."
            />
          </div>

          {error && (
            <p className="text-xs text-red-400" aria-live="polite">
              {error}
            </p>
          )}
          {status === "success" && (
            <p className="text-xs text-emerald-400" aria-live="polite">
              Thanks! We&apos;ll get back to you shortly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Sending..." : "Submit message"}
          </button>
        </form>
      </div>
      {showToast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-4 flex justify-center px-4">
          <div className="pointer-events-auto flex max-w-sm items-center gap-3 rounded-full border border-emerald-500/40 bg-slate-900/95 px-4 py-2 text-xs text-emerald-100 shadow-lg shadow-emerald-500/25">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
              ✓
            </span>
            <p>Your message has been sent. We&apos;ll get back to you soon.</p>
          </div>
        </div>
      )}
    </section>
  );
}

