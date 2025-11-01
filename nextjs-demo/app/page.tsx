import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Welkom bij mijn Next.js project!</h1>
      <p>Dit is mijn kleine onderzoek in VSCode</p>
      <Link href="/about" style={{ color: "blue", textDecoration: "underline" }}>
        Lees meer over dit project</Link>
    </main>
  );
}
