"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import Glass from "@/components/Glass";

type Status = "idle" | "submitting" | "success" | "error";

export default function StakeholdersSupportPage() {
  const searchParams = useSearchParams();

  // Defaults from query string (your long URL with orgName, contactPerson, etc.)
  const defaultOrgName = searchParams.get("orgName") ?? "";
  const defaultContactPerson = searchParams.get("contactPerson") ?? "";
  const defaultEmail = searchParams.get("email") ?? "";
  const defaultPhone = searchParams.get("phone") ?? "";
  const defaultStakeholderType = searchParams.get("stakeholderType") ?? "";
  const defaultMessage = searchParams.get("message") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const orgName = (formData.get("orgName") as string) || "";
    const contactPerson = (formData.get("contactPerson") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const stakeholderType = (formData.get("stakeholderType") as string) || "";
    const message = (formData.get("message") as string) || "";

    const collabAreas = formData.getAll("collab") as string[];

    // We will send this through the SAME /api/contact route
    // Map to the expected fields: name, email, phone, type, message
    const payload = {
      name: `${contactPerson || "Unknown contact"} (${orgName || "No organisation name"})`,
      email,
      phone,
      type: `Stakeholder: ${stakeholderType || "Not specified"}`,
      message: [
        `Organisation / Institution: ${orgName || "Not provided"}`,
        `Contact Person: ${contactPerson || "Not provided"}`,
        `Stakeholder Type: ${stakeholderType || "Not provided"}`,
        `Areas of Interest / Collaboration: ${
          collabAreas.length ? collabAreas.join(", ") : "Not specified"
        }`,
        "",
        "Brief Note / Proposal / Requirement:",
        message || "Not provided",
      ].join("\n"),
      website: "", // honeypot field (empty for humans)
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json?.error || "Failed to submit. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Stakeholder form error:", err);
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen px-4 py-10 flex justify-center">
      <Glass>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Stakeholder Enquiry Form
        </h1>
        <p className="text-sm md:text-base mb-6 max-w-2xl">
          Share your organisation details and how you would like to collaborate.
          The core team will review and respond with a suitable next step (intro call,
          meeting, proposal, etc.).
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          {/* Organisation Name */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="orgName">
              Organisation / Institution Name
            </label>
            <input
              id="orgName"
              name="orgName"
              type="text"
              defaultValue={defaultOrgName}
              className="w-full rounded-md border border-white/20 bg-white/80 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              placeholder="Company / Institute / Startup name"
              required
            />
          </div>

          {/* Contact Person */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="contactPerson">
              Contact Person
            </label>
            <input
              id="contactPerson"
              name="contactPerson"
              type="text"
              defaultValue={defaultContactPerson}
              className="w-full rounded-md border border-white/20 bg-white/80 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              placeholder="Your name & designation"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Official Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={defaultEmail}
              className="w-full rounded-md border border-white/20 bg-white/80 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              placeholder="you@organisation.com"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Work Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              defaultValue={defaultPhone}
              className="w-full rounded-md border border-white/20 bg-white/80 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              placeholder="+91 ..."
            />
          </div>

          {/* Stakeholder Type */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="stakeholderType">
              Stakeholder Type
            </label>
            <select
              id="stakeholderType"
              name="stakeholderType"
              defaultValue={defaultStakeholderType || ""}
              className="w-full rounded-md border border-white/20 bg-white/80 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option>School / College / University</option>
              <option>STEM / Robotics Education Company</option>
              <option>Startup / MSME</option>
              <option>Industry / Corporate</option>
              <option>Investor / Philanthropist</option>
              <option>Government / Policy Maker</option>
              <option>Other</option>
            </select>
          </div>

          {/* Areas of Interest */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Areas of Interest / Collaboration
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="collab" value="Labs & Experience Zones" />
                <span>Labs &amp; Experience Zones</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="collab" value="Pilot Projects / Demos" />
                <span>Pilot Projects / Demos</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="collab" value="Events / Conventions / RPL" />
                <span>Events / Conventions / RPL</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="collab" value="Training / Curriculum / Courses" />
                <span>Training / Curriculum / Courses</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="collab" value="Investment / Sponsorship" />
                <span>Investment / Sponsorship</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="collab" value="Research / Innovation / R&D" />
                <span>Research / Innovation / R&amp;D</span>
              </label>
            </div>
          </div>

          {/* Brief Note */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Brief Note / Proposal / Requirement
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              defaultValue={defaultMessage}
              className="w-full rounded-md border border-white/20 bg-white/80 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              placeholder="Share a short summary of your organisation, intent and proposed collaboration..."
              required
            />
          </div>

          {/* Status messages */}
          {error && (
            <p className="text-xs text-red-600">
              {error}
            </p>
          )}
          {status === "success" && (
            <p className="text-xs text-emerald-600">
              Thank you! Your stakeholder enquiry has been submitted to the Amaravati RoboValley core team.
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-white transition disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit Stakeholder Enquiry"}
          </button>
        </form>
      </Glass>
    </main>
  );
}
