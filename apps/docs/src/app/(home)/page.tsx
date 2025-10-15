import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col p-4 text-center">
      <section className="mb-4">
        <h1 className="text-fd-primary mb-1 text-4xl font-bold">ReactGIS</h1>
        <p className="text-fd-secondary-foreground">React wrapper for OpenLayers</p>
      </section>

      <section>
        <Link
          href="/docs"
          className="text-fd-foreground decoration-fd-primary w-48 text-lg font-semibold underline"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
