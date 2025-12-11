import Glass from "@/components/Glass";

export default function EducationPage() {
  return (
    <main className="min-h-screen px-6 py-16 flex justify-center">
      <Glass>
        {/* 1. Title */}
        <h1 className="text-4xl font-bold mb-2">School & College Engagement</h1>
        <p className="text-lg font-semibold mb-6">
          Building future-ready campuses inside the RoboValley ecosystem.
        </p>

        {/* 1️⃣ Why Engage */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          1️⃣ Why Engage with Amaravati RoboValley?
        </h2>
        <p className="mb-4 leading-relaxed">
          Amaravati RoboValley partners with institutions to build robotics labs,
          run continuous training programs, enable competitions, and create
          long-term robotics ecosystems. The engagement is not just workshops —
          it is a structured academic, innovation, and industry collaboration model
          designed for future careers in robotics and AI.
        </p>

        {/* 2️⃣ Partnership Offerings */}
        <h2 className="text-2xl font-bold mt-8 mb-3">2️⃣ Partnership Offerings</h2>
        <h3 className="text-lg font-semibold mb-2">For Schools</h3>
        <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>STEM & robotics curriculum</li>
          <li>Teacher training programs</li>
          <li>Project showcases</li>
          <li>School-level robotics challenges</li>
          <li>Certification pathways</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">For Colleges</h3>
        <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
          <li>Advanced robotics labs</li>
          <li>Autonomous & embedded systems</li>
          <li>Research projects and capstones</li>
          <li>Industry collaboration</li>
          <li>Incubation pathways</li>
        </ul>

        {/* 3️⃣ How Institutions Benefit */}
        <h2 className="text-2xl font-bold mt-8 mb-3">3️⃣ How Institutions Benefit</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Skill development & practical learning</li>
          <li>Institutional branding and admissions</li>
          <li>Career-building opportunities</li>
          <li>Access to experts and robotics professionals</li>
        </ul>

        {/* 4️⃣ Teacher Training */}
        <h2 className="text-2xl font-bold mt-8 mb-3">4️⃣ Training for Teachers</h2>
        <p className="mb-4 leading-relaxed">
          Teachers learn to run robotics classes, maintain labs, evaluate
          projects, guide competitions, and sustain robotics activity throughout
          the year.
        </p>

        {/* 5️⃣ Certification */}
        <h2 className="text-2xl font-bold mt-8 mb-3">5️⃣ Student Certification</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Beginner</li>
          <li>Intermediate</li>
          <li>Advanced robotics</li>
          <li>Autonomous robotics</li>
          <li>Industry level competency</li>
        </ul>

        {/* 6️⃣ Engagement Models */}
        <h2 className="text-2xl font-bold mt-8 mb-3">6️⃣ Engagement Models</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>School Engagement (STEM foundation)</li>
          <li>College Engagement (engineering and applied research)</li>
          <li>Advanced Innovation (startup & incubation)</li>
        </ul>

        {/* 7️⃣ Unique Engagement Features */}
        <h2 className="text-2xl font-bold mt-8 mb-3">7️⃣ Unique Engagement Features</h2>

        <h3 className="text-lg font-semibold mb-2">
          AR, VR & Holograms
        </h3>
        <p className="mb-4">
          Immersive STEM interaction using augmented reality, virtual robots, and holographic technologies.
        </p>

        <h3 className="text-lg font-semibold mb-2">
          World-class Fabrication Support
        </h3>
        <p className="mb-4">
          3D printing, rapid prototyping, fabrication tools, mechanical assembly, and laser cutting support.
        </p>

        <h3 className="text-lg font-semibold mb-2">
          Industry Interaction
        </h3>
        <p className="mb-4">
          Direct access to robot manufacturers, automation companies, and robotics service providers.
        </p>

        <h3 className="text-lg font-semibold mb-2">
          Gaming & Competition Ecosystem
        </h3>
        <p className="mb-4">
          Competitive robotics, hackathons, challenge-based learning, and arena-based competitions.
        </p>

        <h3 className="text-lg font-semibold mb-2">
          Re-engineering & Component Use
        </h3>
        <p className="mb-4">
          Students dismantle, recover, reuse and rebuild robots using components—true engineering mindset.
        </p>

        <h3 className="text-lg font-semibold mb-2">
          Experience Centers
        </h3>
        <p className="mb-4">
          Access to RoboValley's robotics galleries, AI experience zones, and interactive technology spaces.
        </p>

        {/* 8️⃣ Lab Setup */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          8️⃣ Lab Setup & Infrastructure
        </h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Robotics lab design & equipment selection</li>
          <li>Safety standards and maintenance guidance</li>
          <li>Programming tools and hardware kits</li>
        </ul>

        {/* 9️⃣ Institutional Impact */}
        <h2 className="text-2xl font-bold mt-8 mb-3">9️⃣ Institutional Impact</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Future-ready academic environment</li>
          <li>Better admissions and reputation</li>
          <li>Career-oriented skills</li>
          <li>Industry recognition</li>
        </ul>

        {/* 🔟 Ecosystem Vision */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          🔟 Long-term Ecosystem Vision
        </h2>
        <p className="mb-4 leading-relaxed">
          Amaravati RoboValley will help transform Andhra Pradesh into a robotics
          and AI education powerhouse by developing innovators, researchers,
          startups, and future engineers from school to university level.
        </p>
      </Glass>
    </main>
  );
}
