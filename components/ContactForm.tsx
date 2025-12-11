"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("submitting");
  setError(null);

  // 🔹 Save the form element NOW, before awaiting
  const form = e.currentTarget;

  const formData = new FormData(form);

  const payload = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    type: formData.get("type") as string,
    message: formData.get("message") as string,
    website: formData.get("website") as string, // honeypot
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error || "Failed to submit. Please try again.");
      setStatus("error");
      return;
    }

    setStatus("success");

    // 🔹 Use the saved form reference, NOT e.currentTarget
    form.reset();
  } catch (err) {
    console.error("FETCH FAILED:", err);
    setError("Network error. Please try again.");
    setStatus("error");
  }
}
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Honeypot field: hidden from users, bots may fill it */}
      <div className="hidden">
        <label htmlFor="website">Do not fill this field</label>
        <input id="website" name="website" type="text" autoComplete="off" />
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-blue-400"
          placeholder="Your name"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-blue-400"
          placeholder="you@example.com"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="phone">
          Mobile / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-blue-400"
          placeholder="+91 ..."
        />
      </div>

      {/* Type */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="type">
          I am / We are
        </label>
        <select
          id="type"
          name="type"
          className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-blue-400"
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          <option>Student</option>
          <option>Parent</option>
          <option>Teacher / Professor</option>
          <option>School / College / University</option>
          <option>Company / Startup</option>
          <option>Investor / Philanthropist</option>
          <option>Government / Policy Maker</option>
          <option>Well–wisher / Volunteer</option>
          <option>Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          Message / Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-blue-400"
          placeholder="Share a brief note about your interest, requirement or idea..."
          required
        />
      </div>

      {/* Status messages */}
      {error && (
        <p className="text-xs text-red-300">
          {error}
        </p>
      )}
      {status === "success" && (
        <p className="text-xs text-emerald-300">
          Thank you! Your message has been submitted.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-white transition disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
