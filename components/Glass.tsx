export default function Glass({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full max-w-4xl backdrop-blur-md bg-white/60 rounded-2xl shadow-lg p-8 text-gray-900">
      {children}
    </section>
  );
}
