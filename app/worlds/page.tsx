import Glass from "@/components/Glass";

export default function WorldsPage() {
  return (
    <main className="min-h-screen px-6 py-16 flex justify-center">
      <Glass>
        <h1 className="text-4xl font-bold mb-4">Three Worlds of RoboValley</h1>

        <p className="text-lg mb-8">
          Amaravati RoboValley is built around three interconnected worlds that
          take a learner from curiosity to creation, experience, and competition.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Vidya–Nirman */}
          <a
            href="/worlds/vidya-nirman"
            className="border border-gray-200 rounded-xl p-5 bg-white hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold mb-1">Vidya–Nirman</h2>
            <p className="text-sm font-medium mb-2">Learn &amp; Make</p>
            <p className="text-sm">
              Learning, making, prototyping, and startup incubation. The engine
              for creators, students, and innovators.
            </p>
          </a>

          {/* Anubhav–Lok */}
          <a
            href="/worlds/anubhav-lok"
            className="border border-gray-200 rounded-xl p-5 bg-white hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold mb-1">Anubhav–Lok</h2>
            <p className="text-sm font-medium mb-2">Experience Center</p>
            <p className="text-sm">
              Public experience center with robotics exhibits, VR, AR, and
              immersive galleries for all age groups.
            </p>
          </a>

          {/* Kreeda–Mandap */}
          <a
            href="/worlds/kreeda-mandap"
            className="border border-gray-200 rounded-xl p-5 bg-white hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold mb-1">Kreeda–Mandap</h2>
            <p className="text-sm font-medium mb-2">
              Gaming &amp; Competition
            </p>
            <p className="text-sm">
              Competitive robotics, leagues, robo-sports, and gaming arenas that
              attract youth and teams from everywhere.
            </p>
          </a>
        </div>
      </Glass>
    </main>
  );
}
