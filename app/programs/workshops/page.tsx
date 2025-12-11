import Glass from "@/components/Glass";

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen px-6 py-16 flex justify-center">
      <Glass>
        {/* Title & Intro */}
        <h1 className="text-4xl font-bold mb-2">Workshops &amp; Training</h1>
        <p className="text-lg font-semibold mb-6">
          Professional, hands-on robotics and AI training led by experts from
          reputed institutes, robot manufacturers, and certified professionals.
        </p>

        <p className="mb-4 leading-relaxed">
          Amaravati RoboValley conducts research-driven, immersive, hands-on
          workshops designed to build practical robotics capability for students,
          educators, researchers, and professionals. These are not classroom-only
          theory sessions—participants design, assemble, program, test,
          troubleshoot, and showcase working robots inside a real robotics
          development environment.
        </p>

        {/* Why Unique */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          Why Our Workshops Are Unique
        </h2>
        <p className="mb-3 leading-relaxed">
          Unlike typical training centers, RoboValley integrates multi-disciplinary
          robotics labs, industry-grade equipment, and access to real robotic
          platforms. Participants build actual robots, not just simulations.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Multi-disciplinary robotics and automation labs</li>
          <li>Industry-grade components, sensors, and controllers</li>
          <li>Access to real robotic platforms and test arenas</li>
          <li>Structured, project-based learning with clear outcomes</li>
        </ul>

        {/* Expert Trainers */}
        <h2 className="text-2xl font-bold mt-8 mb-3">Expert Trainers</h2>
        <p className="mb-3 leading-relaxed">
          Workshops are delivered by professionals who are actively working in
          robotics, automation, and AI:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Experts from reputed institutes and technical universities</li>
          <li>Engineers from leading robot manufacturers and automation firms</li>
          <li>Certified robotics and embedded systems professionals</li>
          <li>Startup founders and hands-on innovators</li>
          <li>Industry specialists with real project experience</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Learning comes directly from people who build and deploy real robotic
          systems, not just textbook trainers.
        </p>

        {/* Program Categories */}
        <h2 className="text-2xl font-bold mt-8 mb-3">Program Categories</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">For Students</h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Beginner robotics and STEM foundations</li>
              <li>Hands-on kits, sensors, and simple robots</li>
              <li>Coding for robots and basic automation</li>
              <li>Fun challenges and mini competitions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              For Educators &amp; Schools
            </h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Teacher-training and lab orientation</li>
              <li>Guidance on equipment and kit selection</li>
              <li>Methodology to integrate robotics into curriculum</li>
              <li>Assessment and project-evaluation frameworks</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              For Colleges &amp; Universities
            </h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Advanced robotics and embedded design</li>
              <li>ROS fundamentals and autonomous systems</li>
              <li>Integration with research and final-year projects</li>
              <li>Industry-aligned capstone project guidance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">For Industry</h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Industrial automation and robotics applications</li>
              <li>AI, computer vision, and inspection systems</li>
              <li>Robotics for Industry 4.0 and smart factories</li>
              <li>Custom training for teams and corporate programs</li>
            </ul>
          </div>
        </div>

        {/* What Participants Learn */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          What Participants Will Learn
        </h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Fundamentals of robotics and mechatronics</li>
          <li>Electronics + mechanical integration for robots</li>
          <li>Arduino / Raspberry Pi–based control</li>
          <li>Working with sensors, actuators, and motor drivers</li>
          <li>Embedded programming and control logic</li>
          <li>Designing and 3D printing simple mechanical parts</li>
          <li>Hardware–software integration and testing</li>
          <li>Demonstration and documentation of working robots</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Every batch is structured so that participants complete at least one
          working prototype that they can demonstrate with confidence.
        </p>

        {/* Outcomes */}
        <h2 className="text-2xl font-bold mt-8 mb-3">Learning Outcomes</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Ability to build and modify basic robotic systems independently</li>
          <li>Confidence in configuring and using real sensors and actuators</li>
          <li>Experience writing and debugging embedded code</li>
          <li>Understanding of how robots are designed, tested and improved</li>
          <li>Improved teamwork, problem-solving and project ownership</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Participants receive workshop recognition, project documentation
          support, and performance-based feedback that can be used for academic
          or professional portfolios.
        </p>

        {/* Who Can Join */}
        <h2 className="text-2xl font-bold mt-8 mb-3">Who Can Join</h2>
        <p className="mb-3 leading-relaxed">
          The programs are designed for a wide range of participants:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>School students (Grade 5–12)</li>
          <li>Engineering and diploma students</li>
          <li>Teachers, mentors, and lab in-charges</li>
          <li>Hobbyists and robotics enthusiasts</li>
          <li>Researchers and innovators</li>
          <li>Industry professionals and startup founders</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          No prior robotics experience is mandatory for beginner tracks. Advanced
          tracks are available for those with prior exposure.
        </p>

        {/* Method & Environment */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          Training Method &amp; Environment
        </h2>
        <p className="mb-3 leading-relaxed">
          Every workshop follows a complete innovation cycle:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Learn the core concepts</li>
          <li>Build and assemble real hardware</li>
          <li>Test and debug step-by-step</li>
          <li>Improve design and performance</li>
          <li>Demonstrate and explain the solution</li>
          <li>Document the project for future use</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Training happens inside a real robotics development ecosystem with
          electronics benches, mechanical workspaces, programming stations,
          fabrication tools, and testing arenas.
        </p>

        {/* Registration */}
        <h2 className="text-2xl font-bold mt-8 mb-3">Registration</h2>
        <p className="mb-2 leading-relaxed">
          Online registration and scheduling will be announced soon. Batch sizes
          are intentionally limited to ensure hands-on interaction and personal
          mentoring for each participant.
        </p>
        <p className="text-sm text-gray-700">
          Stay tuned through our official website and social media channels for
          session dates, detailed agendas, and registration links.
        </p>
      </Glass>
    </main>
  );
}
