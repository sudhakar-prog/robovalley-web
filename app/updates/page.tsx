import Glass from "@/components/Glass";

export default function UpdatesPage() {
  return (
    <main className="min-h-screen px-6 py-16 flex justify-center">
      <Glass>
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">Updates &amp; News</h1>
        <p className="text-lg font-semibold mb-6">
          Tracking robotics &amp; intelligent systems worldwide.
        </p>

        {/* Global Robotics Developments */}
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Global Robotics Developments
        </h2>
        <p className="mb-4 leading-relaxed">
          Robotics is advancing rapidly across manufacturing, healthcare,
          autonomous mobility, space exploration, personal robotics, defence and
          industry automation. Amaravati RoboValley will highlight major
          developments shaping the future of automation and intelligent systems
          around the world.
        </p>
        <p className="mb-4 leading-relaxed">
          Robotics clusters are growing into major hubs of innovation. Many tech
          ecosystems now host thousands of robotics units, companies, startups,
          training centers and manufacturing facilities working together to form
          a complete robotics-based economy.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>humanoid and human-assist robots</li>
          <li>warehouse and logistics automation</li>
          <li>robotic service systems for homes and industry</li>
          <li>autonomous vehicles and mobility platforms</li>
          <li>AI–robotics integration for perception and control</li>
          <li>collaborative industrial robots (cobots)</li>
          <li>low-cost component and supply-chain ecosystems</li>
        </ul>

        {/* Examples of Initiatives */}
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Examples of Major Robotics Initiatives
        </h2>
        <p className="mb-4 leading-relaxed">
          Technology leaders and innovators across the world are working on
          large–scale humanoid and service robots capable of operating alongside
          humans, performing everyday tasks, and taking over work in dangerous,
          repetitive or inaccessible environments.
        </p>
        <p className="mb-4 leading-relaxed">
          Ambitions include home–assistant humanoids, highly automated
          warehouses, precision manufacturing robots, robotic healthcare support
          systems, autonomous drones and mobility solutions. Some robotics
          economies already operate tens of thousands of robotic units inside
          dedicated zones, demonstrating the scale and demand for
          robotics–driven cities.
        </p>

        {/* Domain-wise Robotics */}
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Robotics Across Domains
        </h2>

        <h3 className="text-lg font-semibold mt-4 mb-1">
          Industrial &amp; Manufacturing
        </h3>
        <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
          <li>factory automation and assembly lines</li>
          <li>collaborative robots working with human staff</li>
          <li>welding, painting and material–handling robots</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-1">
          Healthcare &amp; Medical Robotics
        </h3>
        <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
          <li>surgical assistance robots</li>
          <li>rehabilitation and physiotherapy robots</li>
          <li>nursing and patient–support systems</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-1">
          Agriculture &amp; Environment
        </h3>
        <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
          <li>field robots for seeding and weeding</li>
          <li>crop–monitoring and imaging platforms</li>
          <li>autonomous harvesting and sorting systems</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-1">
          Mobility &amp; Logistics
        </h3>
        <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
          <li>autonomous ground vehicles and carts</li>
          <li>warehouse robots for picking and packing</li>
          <li>delivery robots and drone logistics</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-1">
          Home &amp; Social Robotics
        </h3>
        <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
          <li>home assistant and companion robots</li>
          <li>elderly care and support systems</li>
          <li>personal AI–enabled robots</li>
        </ul>

        {/* Human–Replica Era */}
        <h2 className="text-2xl font-bold mt-6 mb-3">
          The Human–Replica Era is Beginning
        </h2>
        <p className="mb-4 leading-relaxed">
          The world is moving towards advanced humanoid and human–replica robots
          that can assist elderly people, support households, help at
          workplaces, operate in dangerous zones, support medical care and
          explore environments where humans cannot survive. Robots are evolving
          from tools into companions, assistants and collaborators.
        </p>

        {/* Leading Institutions */}
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Leading Robotics Ecosystems &amp; Institutions
        </h2>
        <p className="mb-4 leading-relaxed">
          Across the globe, advanced robotics research centres, AI labs,
          industrial automation institutes and innovation ecosystems are
          defining the direction of future robotics. India is building strong
          foundations in robotics and AI through its research institutions,
          emerging startups and automation initiatives.
        </p>
        <p className="mb-4 leading-relaxed">
          Amaravati RoboValley aims to become one of the most comprehensive
          robotics knowledge ecosystems in the country, connecting global
          developments with Indian innovation and talent.
        </p>

        {/* Why This Page */}
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Why These Updates Matter for Amaravati RoboValley
        </h2>
        <p className="mb-4 leading-relaxed">
          Continuous awareness of global robotics progress is essential for
          students, researchers, educators, innovators, industry leaders,
          investors and policy–makers. By tracking major developments worldwide,
          Amaravati RoboValley can align its education, research, incubation and
          deployment strategies with the real direction of robotics and
          intelligent systems.
        </p>

        {/* Closing Line */}
        <p className="mt-4 font-semibold">
          Robotics and AI are accelerating worldwide. Amaravati RoboValley aims
          to prepare India to lead the next era of robotics innovation.
        </p>
      </Glass>
    </main>
  );
}
