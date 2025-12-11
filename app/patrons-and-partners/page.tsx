import Glass from "@/components/Glass";

export default function PatronsPartnersPage() {
  return (
    <main className="min-h-screen px-6 py-16 flex justify-center">
      <Glass>
        <h1 className="text-4xl font-bold mb-2">Patrons &amp; Partners</h1>
        <p className="text-lg font-semibold mb-6">
          Building Amaravati RoboValley Together
        </p>

        {/* Why We Need Partners */}
        <h2 className="text-2xl font-bold mt-6 mb-3">Why We Need Patrons &amp; Partners</h2>
        <p className="mb-4 leading-relaxed">
          Amaravati RoboValley is a national movement towards robotics, automation,
          AI, immersive technologies and next–generation engineering. To build this
          vision, we are inviting collaboration with individuals and organizations
          who believe in shaping India&apos;s technological future.
        </p>

        {/* What Partners Gain */}
        <h2 className="text-2xl font-bold mt-6 mb-3">What Partners Gain</h2>
        <p className="mb-4 leading-relaxed">
          Our partners become key stakeholders in building India&apos;s robotics
          future, shaping educational models, creating global competitiveness,
          enabling research and innovation, and empowering millions of youth.
        </p>

        {/* Who can become a partner */}
        <h2 className="text-2xl font-bold mt-6 mb-3">Who Can Become a Patron or Partner?</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">1. Universities &amp; Educational Institutions</h3>
        <p className="mb-3">
          To develop research collaborations, student projects, incubation ecosystems,
          and future engineering pipelines.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">2. Robotics &amp; Automation Companies</h3>
        <p className="mb-3">
          To collaborate in product development, commercial deployments,
          component access and skill development.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">3. Startups &amp; Innovators</h3>
        <p className="mb-3">
          To leverage fabrication labs, manufacturing support, component access,
          mentorship and incubation.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">4. Global Experts &amp; Researchers</h3>
        <p className="mb-3">
          To contribute through mentorship, curriculum support, advanced projects
          and international exposure.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">5. Government &amp; Agencies</h3>
        <p className="mb-3">
          To enable infrastructure, policy support, approvals, talent development
          and ecosystem building.
        </p>

        {/* Partnership Levels */}
        <h2 className="text-2xl font-bold mt-6 mb-3">Levels of Partnership</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Strategic Founding Partners</li>
          <li>Institutional Partners</li>
          <li>Technology Partners</li>
          <li>Innovation Partners</li>
          <li>Academic Partners</li>
          <li>Knowledge Partners</li>
          <li>Industry Partners</li>
          <li>Global Advisory</li>
        </ul>

        {/* How Patrons Contribute */}
        <h2 className="text-2xl font-bold mt-6 mb-3">How Patrons Contribute</h2>
        <p className="mb-4 leading-relaxed">
          Patrons are individuals who believe in this vision. They contribute through
          mentorship, guidance, advisory support, connections and shaping growth.
        </p>

        {/* Long Term Value */}
        <h2 className="text-2xl font-bold mt-6 mb-3">Long–Term Value</h2>
        <p className="mb-4 leading-relaxed">
          Every partner becomes part of India&apos;s robotics emergence, global robotics
          visibility, and a multi–decade innovation legacy.
        </p>

        {/* Invitation */}
        <h2 className="text-2xl font-bold mt-6 mb-3">Join Us</h2>
        <p className="mb-4 leading-relaxed">
          We invite educational institutions, experts, innovators, companies,
          professionals and visionaries to collaborate in building India&apos;s first
          Robotics City.
        </p>

        {/* One line */}
        <p className="mt-6 font-semibold text-lg">
          This is more than a partnership – this is a shared mission to shape the
          next century of technological advancement.
        </p>
      </Glass>
    </main>
  );
}
