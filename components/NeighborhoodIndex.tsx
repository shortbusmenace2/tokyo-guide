"use client";
import { useState } from "react";
import Link from "next/link";
import { neighborhoods } from "@/lib/neighborhoods";

export default function NeighborhoodIndex() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full">
      {neighborhoods.map((n, i) => (
        <Link
          key={n.slug}
          href={`/neighborhoods/${n.slug}`}
          onMouseEnter={() => setHovered(n.slug)}
          onMouseLeave={() => setHovered(null)}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "24px",
            padding: "20px 0",
            borderBottom: "1px solid var(--paper-warm)",
            transition: "all 0.3s ease",
            opacity: hovered && hovered !== n.slug ? 0.35 : 1,
          }}
        >
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            color: "var(--stone)",
            letterSpacing: "0.08em",
            minWidth: "20px",
          }}>
            {String(i + 1).padStart(2, '0')}
          </span>

          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            color: hovered === n.slug ? n.color : "var(--ink)",
            transition: "color 0.3s ease",
            flex: 1,
          }}>
            {n.name}
          </span>

          <span style={{
            fontFamily: "var(--font-japanese)",
            fontSize: "14px",
            color: "var(--ash)",
            letterSpacing: "0.05em",
            display: "none",
          }}
          className="md-show">
            {n.nameJp}
          </span>

          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "var(--ash)",
            fontStyle: "italic",
            flex: 2,
            display: hovered === n.slug ? "block" : "none",
          }}>
            {n.tagline}
          </span>

          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            color: "var(--stone)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            display: hovered === n.slug ? "block" : "none",
          }}>
            {n.timeOfDay}
          </span>
        </Link>
      ))}
    </div>
  );
}
