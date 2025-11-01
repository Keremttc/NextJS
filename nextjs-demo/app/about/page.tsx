import Link from "next/link";

export default function About() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>TEST</h1>
      <p>
        There’s nothing special about being born. Not a thing. Most of the universe is just death, nothing more. 
        In this universe of ours, the birth of a new life on some corner of our planet is nothing but a tiny, 
        insignificant flash. Death is a normal thing. So why live?</p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Terug naar home
      </Link>
    </main>
  );
}
