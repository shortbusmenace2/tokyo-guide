import { neighborhoods } from "@/lib/neighborhoods";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = neighborhoods.find((n) => n.slug === slug);
  if (!n) return {};
  return {
    title: `${n.name} — Tokyo, Unhurried`,
    description: n.teaser,
  };
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) notFound();

  const n = neighborhood;
  const currentIndex = neighborhoods.findIndex((nb) => nb.slug === slug);
  const next = neighborhoods[(currentIndex + 1) % neighborhoods.length];

  return (
    <main style={{ background: "var(--paper)", minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0, zIndex: 50,
        padding: "24px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--ash)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          ← Tokyo
        </Link>
        <span style={{
          fontFamily: "var(--font-japanese)",
          fontSize: "16px",
          color: n.color,
        }}>{n.nameJp}</span>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: "70vh",
        padding: "140px 48px 80px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}>
        {/* Background tone block */}
        <div style={{
          position: "absolute",
          top: 0, right: 0,
          width: "45%",
          height: "100%",
          background: "var(--paper-warm)",
          opacity: 0.5,
          zIndex: 0,
        }} />

        {/* Large background kanji */}
        <div style={{
          position: "absolute",
          bottom: "-60px",
          right: "24px",
          fontFamily: "var(--font-japanese)",
          fontSize: "clamp(140px, 22vw, 280px)",
          color: n.color,
          lineHeight: 1,
          userSelect: "none",
          zIndex: 0,
          opacity: 0.06,
          letterSpacing: "-0.02em",
        }}>
          {n.nameJp}
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: n.color,
            marginBottom: "24px",
          }}>
            {String(currentIndex + 1).padStart(2, '0')} of {neighborhoods.length} — {n.timeOfDay}
          </p>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 10vw, 120px)",
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: "-0.025em",
            color: "var(--ink)",
            marginBottom: "24px",
          }}>
            {n.name}
          </h1>

          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(20px, 2.5vw, 28px)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--ash)",
            lineHeight: 1.4,
            maxWidth: "480px",
          }}>
            {n.tagline}
          </p>
        </div>
      </section>

      {/* Mood Statement */}
      <section style={{
        padding: "80px 48px",
        maxWidth: "720px",
        margin: "0 auto",
      }}>
        <div style={{
          width: "48px",
          height: "1px",
          background: n.color,
          marginBottom: "48px",
        }} />

        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(20px, 2.5vw, 26px)",
          fontWeight: 400,
          lineHeight: 1.6,
          color: "var(--ink)",
          letterSpacing: "-0.01em",
        }}>
          {n.mood}
        </p>
      </section>

      {/* Who belongs here */}
      <section style={{
        padding: "0 48px 80px",
        maxWidth: "900px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "64px",
      }}>
        <div>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "10px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--stone)",
            marginBottom: "16px",
          }}>
            Who belongs here
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "var(--ink-soft)",
          }}>
            {n.persona}
          </p>
        </div>
        <div>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "10px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--stone)",
            marginBottom: "16px",
          }}>
            One detail
          </p>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(16px, 2vw, 21px)",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "var(--ink)",
          }}>
            {n.teaser}
          </p>
        </div>
      </section>

      {/* Placeholder content section */}
      <section style={{
        padding: "80px 48px",
        background: "var(--paper-warm)",
        borderTop: "1px solid var(--paper-warm)",
      }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--stone)",
            marginBottom: "32px",
          }}>
            The guide continues here
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "var(--ash)",
            fontStyle: "italic",
          }}>
            Full editorial content — specific places, honest observations,
            the kind of directions that include landmarks like "the umbrella
            shop with the orange awning, not the other one" — coming soon.
          </p>
        </div>
      </section>

      {/* Next neighborhood */}
      <section style={{ padding: "80px 48px" }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}>
          <Link href="/" style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ash)",
          }}>
            ← All neighborhoods
          </Link>
          <Link href={`/neighborhoods/${next.slug}`} style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontWeight: 300,
            color: "var(--ink)",
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
          }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--stone)" }}>
              Next →
            </span>
            {next.name}
            <span style={{ fontFamily: "var(--font-japanese)", fontSize: "14px", color: "var(--stone)" }}>
              {next.nameJp}
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
}
