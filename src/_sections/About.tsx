"use client";
import { useSR, useBreakpoint } from "./hooks";

export default function About() {
  const left = useSR();
  const right = useSR("2");
  const { isMobile, isTablet } = useBreakpoint();
  const narrow = isMobile || isTablet;
  const pad = isMobile ? "64px 20px" : isTablet ? "80px 40px" : "96px 80px";

  return (
    <section id="about" style={{ background: "#fff" }}>
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: pad,
          display: "grid",
          gridTemplateColumns: narrow ? "1fr" : "1fr 1fr",
          gap: 0,
          alignItems: "stretch",
        }}
      >
        {/* ── LEFT: text content ──────────────────────────────── */}
        <div
          ref={left}
          className="sr"
          style={{
            paddingRight: narrow ? 0 : 80,
            paddingBottom: narrow ? 48 : 0,
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <span style={{ display: "block", width: 32, height: 1, background: "var(--g)" }} />
            <span className="f-sans font-medium uppercase" style={{ fontSize: 10, letterSpacing: "0.35em", color: "var(--g)" }}>
              About ACES HCG
            </span>
          </div>

          {/* Heading */}
          <h2
            className="f-serif font-bold text-stone-800"
            style={{ fontSize: "clamp(32px,3vw,48px)", lineHeight: 1.1, marginBottom: 24 }}
          >
            Hospitality Expertise<br />
            <em className="not-italic" style={{ color: "var(--g)" }}>Built From Operations</em>
          </h2>

          {/* Body */}
          <p className="f-sans font-light text-stone-500" style={{ fontSize: 15.5, lineHeight: 1.9, marginBottom: 20 }}>
            ACES Hotel Consultancy Group is an African hospitality advisory firm dedicated to
            helping hotels, resorts, restaurants and serviced apartments elevate performance,
            profitability and guest experience.
          </p>
          <p className="f-sans font-light text-stone-400" style={{ fontSize: 15, lineHeight: 1.9, marginBottom: 36 }}>
            Founded in 2017 and headquartered in Nairobi with a growing presence in Kigali,
            Rwanda, we pool independent industry experts to tailor every engagement to each
            client&apos;s unique ambitions.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Founded 2017", "Nairobi HQ", "Kigali Presence", "Independent Model"].map((tag) => (
              <span
                key={tag}
                className="f-sans font-medium uppercase"
                style={{
                  fontSize: 10, letterSpacing: "0.14em",
                  padding: "8px 16px",
                  border: "1px solid rgba(168,132,58,.3)",
                  color: "var(--g)", background: "var(--gp)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: 2×2 checkerboard ──────────────────────────── */}
        <div
          ref={right}
          className="sr sr-d2"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#e8e0d0" }}
        >
          {[
            { label: "Mission",   text: "Constantly improve what is essential in the food service industry through standards of excellence.", dark: true },
            { label: "Vision",    text: "To become market leaders by improving and redefining the hospitality industry across Africa.", dark: false },
            { label: "Expertise", text: "Professionalism, continuous learning and best-possible advice — always in the client's interest.", dark: false },
            { label: "Founded",   text: "Established 2017 · Parklands, Nairobi · Regional presence in Kigali, Rwanda.", dark: true },
          ].map((t) => (
            <div
              key={t.label}
              style={{
                background: t.dark ? "#18140E" : "var(--gp)",
                padding: narrow ? 24 : 36,
                minHeight: narrow ? 160 : 220,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}
            >
              <span
                className="f-sans font-medium uppercase"
                style={{ fontSize: 10, letterSpacing: "0.3em", color: t.dark ? "var(--gl)" : "var(--g)", display: "block", marginBottom: 16 }}
              >
                {t.label}
              </span>
              <p className="f-sans font-light" style={{ fontSize: 13, lineHeight: 1.75, color: t.dark ? "#a09080" : "#6b5f4a" }}>
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
