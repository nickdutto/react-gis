import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col text-center">
      <section>
        <h1 className="mb-4 text-2xl font-bold">ReactGIS</h1>
        <p>React wrapper for OpenLayers</p>
      </section>

      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link href="/docs" className="text-fd-foreground font-semibold underline">
          /docs
        </Link>{" "}
        and see the documentation.
        <Link href="/docs">Getting Started</Link>
      </p>
    </main>
  );
}
