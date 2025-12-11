import Glass from "@/components/Glass";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 flex justify-center">
      <Glass>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact RoboValley</h1>
        <p className="text-sm md:text-base mb-6">
          Tell us how you would like to associate with Amaravati RoboValley – as a learner,
          institution, company, investor, partner or well–wisher.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT: Contact form */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Send us a message</h2>
            <p className="text-sm mb-4">
              Fill this form and our core team will get back to you with next steps.
            </p>

            <ContactForm />
          </section>

          {/* RIGHT: Info / Address / Social */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Reach us directly</h2>
            <p className="text-sm mb-4">
              You can also connect with the core Amaravati RoboValley team using the details below.
              (Update these as soon as emails and phone numbers are finalised.)
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p>info@robovalley.in</p>
                <p className="text-xs text-gray-300">
                  For general enquiries, collaborations and support.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                <p>+91-XXXXXXXXXX</p>
                <p className="text-xs text-gray-300">
                  Replace with official RoboValley contact once finalized.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p>Amaravati Region, Andhra Pradesh, India</p>
                <p className="text-xs text-gray-300">
                  Detailed campus address can be added after land / site finalization.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Follow &amp; Support Online</h3>
                <ul className="space-y-1 text-sm">
                  <li>LinkedIn: <span className="text-gray-300">RoboValley (coming soon)</span></li>
                  <li>YouTube: <span className="text-gray-300">RoboValley Channel (coming soon)</span></li>
                  <li>Instagram / X (Twitter): <span className="text-gray-300">handles to be announced</span></li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-3 mt-4">
                <h3 className="font-semibold mb-1">Typical Response Time</h3>
                <p className="text-sm">
                  We aim to respond to all genuine enquiries within{" "}
                  <span className="font-semibold">3–5 working days</span>, depending on the nature
                  of the request and availability of the core team.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Glass>
    </main>
  );
}
