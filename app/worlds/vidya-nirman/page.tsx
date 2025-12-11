import Glass from "@/components/Glass";

export default function VidyaNirmanPage() {
  return (
    <main className="min-h-screen px-6 py-16 flex justify-center">
      <Glass>
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">Vidya–Nirman</h1>
        <p className="text-lg font-semibold mb-6">
          Learn &amp; Make – The Engineering, Fabrication &amp; Innovation World of RoboValley
        </p>

        {/* Intro / Why */}
        <h2 className="text-2xl font-bold mt-6 mb-3">Why Vidya–Nirman Exists</h2>
        <p className="mb-4 leading-relaxed">
          Vidya–Nirman is the engineering and innovation world of Amaravati RoboValley, designed
          to develop hands-on robotics creators who can build, test, deploy, service and
          commercialize robotics solutions for future industries.
        </p>
        <p className="mb-4 leading-relaxed">
          Robots are entering every field—industry, healthcare, agriculture, logistics, retail,
          homes, education, and even defence and space. Robots without engineering depth become
          toys. Vidya–Nirman teaches how to:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>build and fabricate real robots</li>
          <li>test, calibrate and validate them</li>
          <li>program and integrate hardware &amp; software</li>
          <li>service and maintain robotic systems</li>
          <li>deploy robots in real environments</li>
          <li>meet quality and certification requirements</li>
          <li>commercialize and scale solutions</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Vidya–Nirman prepares future engineers and innovators for a truly robot–driven economy.
        </p>

        {/* Labs & Facilities */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Labs &amp; Facilities</h2>
        <p className="mb-4 leading-relaxed">
          Vidya–Nirman is not a single lab, but a complete ecosystem of specialized labs that
          cover every stage of robotics—from idea to product.
        </p>

        {/* 1. Fabrication */}
        <h3 className="text-xl font-semibold mt-6 mb-2">1. Fabrication &amp; Maker Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Mechanical building, industrial fabrication, prototyping benches and maker tools for
          creating strong, reliable robot structures and mechanisms.
        </p>

        {/* 2. Component & Electronics */}
        <h3 className="text-xl font-semibold mt-4 mb-2">2. Component &amp; Electronics Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Motors, drivers, controllers, batteries, wiring, power systems and electronics
          hardware for hands–on circuit building and integration.
        </p>

        {/* 3. Sensor & Vision */}
        <h3 className="text-xl font-semibold mt-4 mb-2">3. Sensor &amp; AI–Vision Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Work with LiDAR, cameras, radar, proximity sensors, IMUs and navigation sensors to
          give robots the ability to sense and understand the environment.
        </p>

        {/* 4. IoT & Automation */}
        <h3 className="text-xl font-semibold mt-4 mb-2">4. IoT &amp; Automation Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Wireless communication, cloud dashboards, automation systems and smart infrastructure
          to connect robots with larger digital systems.
        </p>

        {/* 5. Embedded */}
        <h3 className="text-xl font-semibold mt-4 mb-2">5. Embedded Systems Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Microcontrollers, firmware, PCB design and embedded robotics to control hardware at
          low level and build reliable robotic brains.
        </p>

        {/* 6. AI Lab */}
        <h3 className="text-xl font-semibold mt-4 mb-2">6. AI &amp; Machine Intelligence Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Computer vision, deep learning, reinforcement learning and intelligent decision–making
          for robots that can see, think and act autonomously.
        </p>

        {/* 7. Software Programming */}
        <h3 className="text-xl font-semibold mt-4 mb-2">7. Software Programming Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Python, C/C++, ROS, simulation tools and real–time control software for programming
          robots, digital twins and automation workflows.
        </p>

        {/* 8. Arduino Lab */}
        <h3 className="text-xl font-semibold mt-4 mb-2">8. Arduino &amp; Microcontroller Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Beginner–friendly electronics with Arduino and similar boards to learn sensor
          interfacing, motor control and basic robotics logic.
        </p>

        {/* 9. Raspberry Pi */}
        <h3 className="text-xl font-semibold mt-4 mb-2">
          9. Raspberry Pi &amp; Edge Computing Lab
        </h3>
        <p className="mb-3 text-sm leading-relaxed">
          Edge AI projects using Raspberry Pi and similar platforms for Linux robotics, computer
          vision and intelligent autonomous behaviour.
        </p>

        {/* 10. Branded Robots */}
        <h3 className="text-xl font-semibold mt-4 mb-2">10. Branded Robots Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Hands–on practice with real commercial robots such as Niryo, Dobot, Unitree, DJI
          robots, collaborative arms and industrial–grade platforms, so learners gain
          industry–relevant skills beyond DIY kits.
        </p>

        {/* 11. Service Lab */}
        <h3 className="text-xl font-semibold mt-4 mb-2">11. Robotics Service Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Installation, configuration, tuning, maintenance, fault–finding and field servicing of
          robots to prepare professional robotics service engineers.
        </p>

        {/* 12. Testing Lab */}
        <h3 className="text-xl font-semibold mt-4 mb-2">12. Robotics Testing Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Performance testing, accuracy checks, endurance testing, safety validation and
          reliability assessment to ensure robots meet real–world demands.
        </p>

        {/* 13. 3D Printing */}
        <h3 className="text-xl font-semibold mt-4 mb-2">
          13. 3D Printing &amp; Additive Manufacturing Lab
        </h3>
        <p className="mb-3 text-sm leading-relaxed">
          Rapid prototyping of robot parts, joints, frames and fixtures using 3D printers and
          additive manufacturing tools.
        </p>

        {/* 14. AR/VR/Hologram */}
        <h3 className="text-xl font-semibold mt-4 mb-2">14. AR / VR / Hologram Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Immersive learning using augmented reality, virtual reality, holographic displays and
          digital twins to visualise and simulate robotics systems.
        </p>

        {/* 15. Quality Control */}
        <h3 className="text-xl font-semibold mt-4 mb-2">
          15. Quality Control &amp; Certification Lab
        </h3>
        <p className="mb-3 text-sm leading-relaxed">
          Industrial quality practices, calibration, measurement and understanding of ISO/CE–like
          standards to prepare products for certification.
        </p>

        {/* 16. Project Library */}
        <h3 className="text-xl font-semibold mt-4 mb-2">16. Project Library</h3>
        <p className="mb-3 text-sm leading-relaxed">
          A curated repository of reference projects, circuits, codes, schematics, designs and
          documentation so learners can build on proven work instead of starting from zero.
        </p>

        {/* 17. Support & Incubation */}
        <h3 className="text-xl font-semibold mt-4 mb-2">17. Support &amp; Incubation Lab</h3>
        <p className="mb-3 text-sm leading-relaxed">
          Mentoring, expert guidance, prototype refinement, business thinking and commercialization
          support to turn student projects into real products and startups.
        </p>

        {/* 18. Documentation & Policy */}
        <h3 className="text-xl font-semibold mt-4 mb-2">
          18. Documentation, Regulation &amp; Policy Lab
        </h3>
        <p className="mb-3 text-sm leading-relaxed">
          A unique facility to guide startups and innovators through export/import regulations,
          certification, legal compliance, investment readiness, marketing strategy and global
          quality norms for robotics.
        </p>

        {/* 19. Rental Facility */}
        <h3 className="text-xl font-semibold mt-4 mb-2">19. Robotics Rental Facility</h3>
        <p className="mb-3 text-sm leading-relaxed">
          A rental system that allows schools, colleges, startups and research teams to access
          expensive robots, 3D printers and test equipment for short– or long–term use, without
          needing to purchase them upfront.
        </p>

        {/* 20. Re-Engineering */}
        <h3 className="text-xl font-semibold mt-4 mb-2">
          20. Re–Engineering &amp; Sustainability Lab
        </h3>
        <p className="mb-3 text-sm leading-relaxed">
          Reverse engineering old appliances, extracting useful components and building new robots
          from recycled hardware—combining deep technical understanding with sustainable practice.
        </p>

        {/* Additional Facilities */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          Student Accommodation &amp; Living Campus
        </h2>
        <p className="mb-4 leading-relaxed">
          Vidya–Nirman is supported by on–campus accommodation for local, national and
          international learners. It is suitable for one–day workshops, short bootcamps, long–term
          courses, internships, conferences, incubation programs and research visits—making
          RoboValley a complete live–learn–build environment.
        </p>

        {/* Future Expansion */}
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Future Expansion: Towards a Robotic University
        </h2>
        <p className="mb-4 leading-relaxed">
          Vidya–Nirman is the foundation for a future multi–domain Robotic University, with
          specialised tracks in industrial automation, medical robotics, defence and aerospace
          robotics, agriculture robotics, autonomous systems, drone and underwater robotics and
          AI–driven human–replica systems.
        </p>
        <p className="mb-4 leading-relaxed">
          Over time, this ecosystem can support advanced degrees, international collaborations,
          research schools, global certification programs and industry co–innovation centres.
        </p>

        {/* Closing line */}
        <p className="mt-4 font-semibold">
          Vidya–Nirman builds robotics engineers today while laying the foundation for India&apos;s
          future Robotic University – a global destination for learning, research and innovation.
        </p>
      </Glass>
    </main>
  );
}
