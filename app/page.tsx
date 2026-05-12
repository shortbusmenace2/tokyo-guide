import Link from "next/link";
import TokyoMap from "@/components/TokyoMap";
import NeighborhoodIndex from "@/components/NeighborhoodIndex";

export default function Home() {
  return (
    <main style={{ background: "var(--paper)", minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "24px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mixBlendMode: "multiply",
      }}>
        <span style={{
          fontFamily: "var(--font-japanese)",
          fontSize: "13px",
          letterSpacing: "0.08em",
          color: "var(--ink-soft)",
        }}>
          東京
        </span>
        <span style={{
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--ash)",
        }}>
          A Guide for the Unhurried
        </span>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 48px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background texture element */}
        <div style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "55%",
          height: "80%",
          background: "var(--paper-warm)",
          borderRadius: "2px",
          opacity: 0.6,
          zIndex: 0,
        }} />

        {/* Large background kanji */}
        <div style={{
          position: "absolute",
          bottom: "-40px",
          right: "48px",
          fontFamily: "var(--font-japanese)",
          fontSize: "clamp(180px, 25vw, 340px)",
          color: "var(--paper-warm)",
          lineHeight: 1,
          userSelect: "none",
          zIndex: 0,
          letterSpacing: "-0.02em",
        }}>
          東京
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "760px" }}>
          {/* Issue line */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--vermillion)",
            marginBottom: "32px",
          }}>
            Eight neighborhoods — One city
          </p>

          {/* Main headline */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 108px)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: "0",
          }}>
            Tokyo
          </h1>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 108px)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: "40px",
          }}>
            on foot.
          </h1>

          {/* Vermillion rule */}
          <div style={{
            width: "48px",
            height: "1px",
            background: "var(--vermillion)",
            marginBottom: "32px",
          }} />

          {/* Lead copy */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 1.6vw, 18px)",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--ink-soft)",
            maxWidth: "440px",
            marginBottom: "48px",
          }}>
            Not an itinerary. Not a checklist. A set of invitations
            into eight neighborhoods, each one best understood by
            arriving without a plan.
          </p>

          <Link
            href="#neighborhoods"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink)",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              paddingBottom: "4px",
              borderBottom: "1px solid var(--ink)",
            }}
          >
            Begin exploring
            <span style={{ fontSize: "14px" }}>↓</span>
          </Link>
        </div>
      </section>

      {/* Map + Intro Section */}
      <section
        id="neighborhoods"
        style={{
          padding: "120px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--stone)",
            marginBottom: "40px",
          }}>
            Navigate by place
          </p>
          <TokyoMap />
        </div>

        <div>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.4,
            color: "var(--ink)",
            marginBottom: "32px",
          }}>
            "Every neighborhood in Tokyo is a different agreement
             the city has made with itself."
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--ash)",
            marginBottom: "24px",
          }}>
            These eight were chosen not for their fame but for their
            distinctness — the quality each one has of being
            irreducibly itself. You cannot mistake Yanaka for Shibuya.
            You cannot mistake Shimokitazawa for Akihabara.
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--ash)",
          }}>
            Each guide was written at the time of day the neighborhood
            deserves, by someone who stayed too long on purpose.
          </p>
        </div>
      </section>

      {/* Neighborhood Index */}
      <section style={{
        padding: "80px 48px 120px",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "8px",
          paddingBottom: "20px",
          borderBottom: "1px solid var(--ink)",
        }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink)",
          }}>
            Neighborhoods
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--stone)",
          }}>
            Best hour
          </p>
        </div>

        <NeighborhoodIndex />
      </section>

      {/* Footer manifesto */}
      <footer style={{
        padding: "80px 48px",
        borderTop: "1px solid var(--paper-warm)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <div>
          <span style={{
            fontFamily: "var(--font-japanese)",
            fontSize: "24px",
            color: "var(--ink)",
            display: "block",
            marginBottom: "12px",
          }}>東京</span>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--stone)",
          }}>
            A Guide for the Unhurried
          </p>
        </div>
        <div>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "var(--ash)",
          }}>
            Written between 2023 and 2024. No restaurants
            accepted compensation. No experiences were optimized.
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "14px",
            fontStyle: "italic",
            color: "var(--ash)",
          }}>
            迷子になる — get lost
          </p>
        </div>
      </footer>

    </main>
  );
}
