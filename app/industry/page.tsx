import Glass from "@/components/Glass";

export default function IndustryPage() {
  return (
    <main className="min-h-screen px-6 py-16 flex justify-center">
      <Glass>
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">Robotics Industry &amp; Services</h1>
        <p className="text-lg font-semibold mb-6">
          A dedicated interface for robot manufacturers, suppliers, integrators and
          service providers who want to be part of Amaravati RoboValley.
        </p>

        {/* Intro */}
        <h2 className="text-2xl font-bold mt-6 mb-3">Why This Page Exists</h2>
        <p className="mb-4 leading-relaxed">
          Amaravati RoboValley is being designed as a complete Robotics &amp; AI City.
          To build and sustain this ecosystem, we need strong collaboration with
          manufacturers, sellers, integrators, automation providers and
          service companies from India and across the world.
        </p>
        <p className="mb-4 leading-relaxed">
          This page acts as the entry point for robotics stakeholders who want to
          supply products, technologies, services and solutions to support the
          RoboCity vision.
        </p>

        {/* Who this is for */}
        <h2 className="text-2xl font-bold mt-6 mb-3">Who Should Connect Here?</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Robot manufacturers (industrial, service, collaborative, mobile)</li>
          <li>Component suppliers (motors, sensors, controllers, drives, power)</li>
          <li>System integrators &amp; automation solution providers</li>
          <li>Educational robotics kit &amp; lab solution providers</li>
          <li>Robotics software, AI, control and simulation platforms</li>
          <li>Robots-as-a-Service (RaaS) providers</li>
          <li>Maintenance, repair and refurbishment companies</li>
          <li>Testing, certification and safety service providers</li>
        </ul>

        {/* Categories we focus on */}
        <h2 className="text-2xl font-bold mt-6 mb-3">Robot &amp; Service Categories</h2>
        <p className="mb-3 leading-relaxed">
          RoboValley is interested in a wide range of robotics and intelligent systems
          for the city, institutions, industry partners and public experience centres:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-1">Industrial &amp; Collaborative Robots</h3>
            <ul className="list-disc list-inside text-sm space-y-1 mb-3">
              <li>6-axis arms, SCARA, gantry systems</li>
              <li>Collaborative robots (cobots) for safe human–robot workspaces</li>
              <li>Welding, painting, assembly and material handling systems</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Service &amp; Social Robots</h3>
            <ul className="list-disc list-inside text-sm space-y-1 mb-3">
              <li>Reception and visitor interaction robots</li>
              <li>Hospitality, retail and public engagement robots</li>
              <li>Educational and training robots</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Healthcare &amp; Medical Robotics</h3>
            <ul className="list-disc list-inside text-sm space-y-1 mb-3">
              <li>Surgical assistance platforms</li>
              <li>Rehabilitation and therapy robots</li>
              <li>Hospital logistics, delivery and disinfection robots</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">
              Agriculture, Logistics &amp; Field Robotics
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1 mb-3">
              <li>Farming and crop care robots</li>
              <li>Warehouse, picking and sorting robots</li>
              <li>Autonomous mobile robots and drones</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Educational &amp; Lab Solutions</h3>
            <ul className="list-disc list-inside text-sm space-y-1 mb-3">
              <li>STEM and educational kits</li>
              <li>University-level robotics platforms</li>
              <li>Lab packages for schools, colleges and research centres</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Software, AI &amp; Simulation</h3>
            <ul className="list-disc list-inside text-sm space-y-1 mb-3">
              <li>Robot control software and middleware</li>
              <li>Simulation, digital twin and testing tools</li>
              <li>AI, vision and perception platforms</li>
            </ul>
          </div>
        </div>

        {/* Information we expect to capture */}
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Information We Aim to Publish for Each Stakeholder
        </h2>
        <p className="mb-3 leading-relaxed">
          As the platform grows, we will create a structured directory of robotics
          companies relevant to the RoboCity ecosystem. For each stakeholder, we
          plan to capture fields such as:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Company / Brand Name</li>
          <li>Country / Region</li>
          <li>Type of Stakeholder (Manufacturer, Seller, Integrator, Service Provider)</li>
          <li>Robot Category (Industrial, Service, Educational, Medical, Agri, Logistics, etc.)</li>
          <li>Primary Purpose (factory automation, education, healthcare, public service, etc.)</li>
          <li>Key Products &amp; Solutions</li>
          <li>Service Models (sale, lease, Robots-as-a-Service, maintenance)</li>
          <li>Typical Customers (industry, hospitals, schools, city projects, etc.)</li>
          <li>Support &amp; Service Coverage</li>
          <li>Website / Contact Links</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Over time, this will allow institutions, industries and city planners to
          quickly discover which robotics partners best fit the needs of Amaravati
          RoboValley and the wider RoboCity vision.
        </p>

        {/* How to express interest */}
        <h2 className="text-2xl font-bold mt-6 mb-3">How Robotics Stakeholders Can Engage</h2>
        <p className="mb-4 leading-relaxed">
          If you represent a robotics company, startup, lab or service provider and
          would like to associate with Amaravati RoboValley, you will be able to:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>express interest in becoming a listed robotics partner</li>
          <li>offer products and services for RoboCity deployments</li>
          <li>propose joint pilot projects and demonstrations</li>
          <li>explore lab, testbed and experience–centre collaborations</li>
          <li>support education, training and talent pipelines</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          In the initial phase, interested organizations can reach out through the
          Contact section of this website or by direct communication with the
          RoboValley team. A dedicated partner registration workflow will be
          introduced as the ecosystem expands.
        </p>

        {/* Vision tie-in */}
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Why Being Part of RoboValley Matters
        </h2>
        <p className="mb-4 leading-relaxed">
          Amaravati RoboValley is envisioned as a long–term Robotics &amp; AI City
          with education, research, fabrication, deployment and public experience
          integrated into one ecosystem. Robotics stakeholders who join early can
          help shape standards, pilots, training models and deployment patterns for
          the RoboCity – and benefit from a concentrated, future–oriented cluster
          of learners, institutions and industry partners.
        </p>
        <p className="mt-4 font-semibold">
          If you build robots, components, platforms or services that can support a
          Robotics City, Amaravati RoboValley invites you to connect and grow with
          us.
        </p>
      </Glass>
    </main>
  );
}
