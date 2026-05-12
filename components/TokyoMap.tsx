"use client";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { neighborhoods, type Neighborhood } from "@/lib/neighborhoods";

// Schematic coordinates based on real relative positions
// Yamanote line is the organizing spine — an oval running through the city
// All coords are in a 600x520 viewBox

const YAMANOTE: [number, number][] = [
  [210, 60],  // Tabata (north)
  [255, 48],  // Nishi-Nippori
  [300, 44],  // Nippori — near Yanaka
  [345, 52],  // Uguisudani
  [385, 68],  // Ueno — near Akihabara
  [410, 100], // Akihabara
  [418, 138], // Kanda
  [408, 172], // Tokyo
  [390, 204], // Yurakucho
  [368, 232], // Shinbashi
  [340, 255], // Hamamatsucho
  [308, 272], // Tamachi
  [272, 282], // Shinagawa
  [234, 272], // Osaki
  [198, 252], // Meguro — near Nakameguro
  [172, 222], // Ebisu — near Nakameguro
  [158, 188], // Shibuya
  [148, 155], // Harajuku/Yoyogi
  [148, 120], // Shinjuku
  [152, 88],  // Shin-Okubo
  [170, 66],  // Takadanobaba
  [190, 56],  // Mejiro
  [210, 60],  // back to Tabata (close loop)
];

// Neighborhood map positions, calibrated to Yamanote
const MAP_POSITIONS: Record<string, { x: number; y: number }> = {
  shinjuku:      { x: 142, y: 118 },
  shimokitazawa: { x: 96,  y: 165 },
  yanaka:        { x: 296, y: 60  },
  akihabara:     { x: 400, y: 112 },
  shibuya:       { x: 150, y: 186 },
  harajuku:      { x: 144, y: 158 },
  nakameguro:    { x: 164, y: 222 },
  asakusa:       { x: 438, y: 78  },
};

// Sumida river — runs roughly north-south east of center
const SUMIDA: [number, number][] = [
  [430, 30],
  [442, 70],
  [448, 110],
  [440, 150],
  [428, 190],
  [410, 230],
  [395, 270],
];

// Tokyo Bay suggestion
const BAY_PATH = "M 272 282 C 290 300, 320 320, 360 335 C 400 348, 450 345, 490 330 C 530 315, 560 290, 580 260";

function buildPolyline(pts: [number, number][]) {
  return pts.map(([x, y]) => `${x},${y}`).join(" ");
}

const TOOLTIP_W = 272;
const OFFSET = 14;

export default function TokyoMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const hoveredNeighborhood = hovered
    ? neighborhoods.find((n) => n.slug === hovered)
    : null;

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const fromRight = rect.width - x;
    const left = fromRight < TOOLTIP_W + OFFSET * 2 ? x - TOOLTIP_W - OFFSET : x + OFFSET;
    setTooltipPos({ x: left, y: y - 20 });
  }, []);

  return (
    <div ref={wrapRef} onMouseMove={handleMouseMove} style={{ position: "relative", width: "100%" }}>
      <svg
        viewBox="0 0 600 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", display: "block" }}
        aria-label="Schematic map of Tokyo neighborhoods"
      >
        {/* Ground */}
        <rect width="600" height="360" fill="var(--paper)" />

        {/* Tokyo Bay */}
        <path
          d={BAY_PATH}
          stroke="var(--stone)"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
        <text x="470" y="322" fontSize="8" fill="var(--stone)" opacity="0.5"
          fontFamily="var(--font-body)" letterSpacing="0.08em">
          Tokyo Bay
        </text>

        {/* Sumida River */}
        <polyline
          points={buildPolyline(SUMIDA)}
          stroke="var(--stone)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.25"
        />
        <text x="454" y="128" fontSize="7.5" fill="var(--stone)" opacity="0.4"
          fontFamily="var(--font-body)" fontStyle="italic" letterSpacing="0.04em">
          Sumida
        </text>

        {/* Yamanote Line */}
        <polyline
          points={buildPolyline(YAMANOTE)}
          stroke="var(--stone)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />

        {/* Yamanote label */}
        <text x="308" y="296" fontSize="7.5" fill="var(--stone)" opacity="0.45"
          fontFamily="var(--font-body)" letterSpacing="0.08em" textAnchor="middle">
          Yamanote Line
        </text>

        {/* Neighborhood markers */}
        {neighborhoods.map((n) => {
          const pos = MAP_POSITIONS[n.slug];
          if (!pos) return null;
          const isHovered = hovered === n.slug;
          const isDimmed = hovered && !isHovered;

          return (
            <g
              key={n.slug}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHovered(n.slug)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => router.push(`/neighborhoods/${n.slug}`)}
              opacity={isDimmed ? 0.2 : 1}
            >
              {/* Pulse ring on hover */}
              {isHovered && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="18"
                  fill={n.color}
                  opacity="0.1"
                />
              )}
              {isHovered && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="11"
                  fill={n.color}
                  opacity="0.15"
                />
              )}

              {/* Dot */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isHovered ? 5 : 3.5}
                fill={isHovered ? n.color : "var(--ash)"}
                style={{ transition: "all 0.15s ease" }}
              />

              {/* Name label */}
              <text
                x={pos.x + 9}
                y={pos.y + 4}
                fontSize={isHovered ? "10.5" : "9.5"}
                fill={isHovered ? n.color : "var(--ash)"}
                fontWeight={isHovered ? "500" : "400"}
                fontFamily="var(--font-body)"
                letterSpacing="0.02em"
                style={{ transition: "all 0.15s ease" }}
              >
                {n.name}
              </text>

              {/* Japanese name — always visible, small */}
              <text
                x={pos.x + 9}
                y={pos.y + 15}
                fontSize="8"
                fill={isHovered ? n.color : "var(--stone)"}
                opacity={isHovered ? 0.8 : 0.6}
                fontFamily="var(--font-japanese)"
                style={{ transition: "all 0.15s ease" }}
              >
                {n.nameJp}
              </text>
            </g>
          );
        })}

        {/* Compass */}
        <g transform="translate(566, 32)">
          <circle cx="0" cy="0" r="13" stroke="var(--stone)" strokeWidth="0.5" fill="none" opacity="0.35"/>
          <line x1="0" y1="-6" x2="0" y2="-11" stroke="var(--vermillion)" strokeWidth="1" opacity="0.6"/>
          <line x1="0" y1="6" x2="0" y2="11" stroke="var(--stone)" strokeWidth="0.8" opacity="0.35"/>
          <text x="0" y="3" textAnchor="middle" fontSize="7" fill="var(--ash)"
            fontFamily="var(--font-body)" letterSpacing="0.06em">N</text>
        </g>
      </svg>

      {/* Cursor tooltip */}
      {hoveredNeighborhood && (
        <div
          style={{
            position: "absolute",
            left: tooltipPos.x,
            top: tooltipPos.y,
            width: TOOLTIP_W,
            background: "var(--paper)",
            border: "1px solid var(--paper-warm)",
            padding: "14px 16px",
            pointerEvents: "none",
            zIndex: 20,
            display: "flex",
            gap: "12px",
          }}
        >
          <div style={{
            width: "2px",
            height: "64px",
            background: hoveredNeighborhood.color,
            flexShrink: 0,
          }} />
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 400,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
              }}>
                {hoveredNeighborhood.name}
              </span>
              <span style={{
                fontFamily: "var(--font-japanese)",
                fontSize: "12px",
                color: "var(--ash)",
              }}>
                {hoveredNeighborhood.nameJp}
              </span>
            </div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "9px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--stone)",
              margin: "0 0 6px",
            }}>
              {hoveredNeighborhood.timeOfDay}
            </p>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              fontStyle: "italic",
              color: "var(--ash)",
              lineHeight: 1.5,
              margin: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}>
              {hoveredNeighborhood.tagline} — {hoveredNeighborhood.teaser}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
