import Glass from "@/components/Glass";

export default function StakeholdersSupportPage() {
  return (
    <main className="min-h-screen px-6 py-16 flex justify-center">
      <Glass>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Contact &amp; Support for Stakeholders
        </h1>
        <p className="text-sm md:text-base mb-6">
          This page is dedicated to organisations and professionals who want to associate
          with Amaravati RoboValley as partners, suppliers, investors, collaborators or
          ecosystem contributors.
        </p>

        {/* Intro */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Who is this page for?</h2>
          <p className="text-sm leading-relaxed mb-3">
            Use this channel if you represent a company, institution or formal group and want
            to explore structured engagement with RoboValley – including robotics
            manufacturers, solution providers, education institutions, startups, investors,
            government bodies and global partners.
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Robot / automation / component manufacturers and distributors</li>
            <li>STEM &amp; robotics education companies and content providers</li>
            <li>Colleges, universities, schools and training institutes</li>
            <li>Startups and MSMEs in robotics, AI, 3D printing and related fields</li>
            <li>Investors, CSR heads and philanthropic foundations</li>
            <li>Government departments, agencies and policy makers</li>
            <li>International partners, clusters and associations</li>
          </ul>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT: Stakeholder contact form */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Stakeholder Enquiry Form</h2>
            <p className="text-sm mb-4">
              Share your organisation details and how you would like to collaborate. The core
              team will review and respond with a suitable next step (intro call, meeting,
              proposal etc.).
            </p>

            <form className="space-y-4">
              {/* Organisation name */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="orgName">
                  Organisation / Institution Name
                </label>
                <input
                  id="orgName"
                  name="orgName"
                  type="text"
                  className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-blue-400"
                  placeholder="Company / Institute / Startup name"
                  required
                />
              </div>

              {/* Contact person */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="contactPerson">
                  Contact Person
                </label>
                <input
                  id="contactPerson"
                  name="contactPerson"
                  type="text"
                  className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-blue-400"
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
                  className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-blue-400"
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
                  className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-blue-400"
                  placeholder="+91 ..."
                />
              </div>

              {/* Stakeholder type */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="stakeholderType">
                  Stakeholder Type
                </label>
                <select
                  id="stakeholderType"
                  name="stakeholderType"
                  className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-blue-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Robot / Automation Manufacturer</option>
                  <option>Components / Sensors / Tools Supplier</option>
                  <option>STEM / Robotics Education Company</option>
                  <option>School / College / University</option>
                  <option>Startup / MSME</option>
                  <option>Corporate / Enterprise</option>
                  <option>Investor / CSR / Foundation</option>
                  <option>Government / Agency / Association</option>
                  <option>International Partner</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Areas of collaboration */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Areas of Interest / Collaboration
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="collab" value="labs" />
                    <span>Labs &amp; Experience Zones</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="collab" value="pilots" />
                    <span>Pilot Projects / Demos</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="collab" value="events" />
                    <span>Events / Conventions / RPL</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="collab" value="education" />
                    <span>Training / Curriculum / Courses</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="collab" value="investment" />
                    <span>Investment / Sponsorship</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="collab" value="research" />
                    <span>Research / Innovation / R&amp;D</span>
                  </label>
                </div>
              </div>

              {/* Message / proposal */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Brief Note / Proposal / Requirement
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-blue-400"
                  placeholder="Share a short summary of your organisation, intent and proposed collaboration..."
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-white transition"
              >
                Submit Stakeholder Enquiry
              </button>

              <p className="text-[11px] text-gray-300 mt-2">
                This form is currently a UI placeholder. Later you can connect it to an API, CRM
                or email workflow specifically for RoboValley stakeholder relations.
              </p>
            </form>
          </section>

          {/* RIGHT: Support info & lanes */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Dedicated Support Lanes</h2>
            <p className="text-sm mb-4">
              As RoboValley evolves, dedicated support channels can be created for different
              stakeholder categories. Below is a suggested structure you can refine over time.
            </p>

            <div className="space-y-4 text-sm">
              {/* Manufacturers / Solution Providers */}
              <div>
                <h3 className="font-semibold mb-1">
                  1. Robot Manufacturers &amp; Solution Providers
                </h3>
                <p className="mb-1">
                  For companies building industrial robots, service robots, drones, components,
                  sensors or software platforms.
                </p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Lab installation &amp; demo partnerships</li>
                  <li>Experience zone and showroom opportunities</li>
                  <li>Robo Premier League &amp; competition sponsorships</li>
                  <li>Distributor / service network collaboration</li>
                </ul>
              </div>

              {/* Institutes */}
              <div>
                <h3 className="font-semibold mb-1">
                  2. Schools, Colleges &amp; Universities
                </h3>
                <p className="mb-1">
                  For academic institutions looking to connect with RoboValley for curriculum,
                  labs, tours and joint programs.
                </p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Academic MoUs &amp; joint skill programs</li>
                  <li>Student tours to Vidya–Nirman &amp; Anubhav–Lok</li>
                  <li>Hosting Kreeda–Mandap qualifying events</li>
                  <li>Faculty training and content co-development</li>
                </ul>
              </div>

              {/* Startups & MSMEs */}
              <div>
                <h3 className="font-semibold mb-1">3. Startups &amp; MSMEs</h3>
                <p className="mb-1">
                  For early-stage companies working in robotics, AI, automation, 3D printing and
                  related domains.
                </p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Incubation &amp; co-working in RoboValley</li>
                  <li>Access to labs, testing and demo space</li>
                  <li>Investor connects and pitch events</li>
                  <li>Participation in conventions and expos</li>
                </ul>
              </div>

              {/* Investors & CSR */}
              <div>
                <h3 className="font-semibold mb-1">4. Investors, CSR &amp; Foundations</h3>
                <p className="mb-1">
                  For those exploring strategic, social or philanthropic investments into robotics
                  education and ecosystems.
                </p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Cluster-level investments into RoboValley</li>
                  <li>Scholarship and fellowship programs</li>
                  <li>STEM outreach and rural inclusion projects</li>
                  <li>Naming rights for labs, arenas and events</li>
                </ul>
              </div>

              {/* Govt / Associations */}
              <div>
                <h3 className="font-semibold mb-1">5. Government &amp; Associations</h3>
                <p className="mb-1">
                  For departments, councils and associations working on industry, education,
                  skilling and technology policy.
                </p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Policy pilots and model cluster development</li>
                  <li>Skill development and job creation initiatives</li>
                  <li>International delegation visits and tech diplomacy</li>
                  <li>Joint conventions and flagship events</li>
                </ul>
              </div>

              {/* Direct contact block */}
              <div className="border-t border-white/10 pt-3 mt-4">
                <h3 className="font-semibold mb-1">Direct Stakeholder Contact</h3>
                <p className="text-sm">
                  You can create a dedicated email ID like{" "}
                  <span className="font-semibold">stakeholders@robovalley.in</span> or{" "}
                  <span className="font-semibold">partners@robovalley.in</span> and route
                  enquiries from this page to a core team member responsible for ecosystem
                  building.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Glass>
    </main>
  );
}
