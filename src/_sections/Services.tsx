"use client";
import { useSR, useBreakpoint } from "./hooks";
import { SERVICES } from "./data";

function ServiceCard({ s }: { s: (typeof SERVICES)[0] }) {
  const ref = useSR();
  return (
    <div
      ref={ref}
      className="svc sr"
      style={{
        background: "white",
        border: "1px solid rgba(168,132,58,.15)",
        padding: "40px 36px",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
        <span className="svc-num f-sans font-medium uppercase" style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--g)" }}>
          {s.n}
        </span>
        <span className="svc-line" style={{ display: "block", width: 32, height: 1, marginTop: 8, background: "var(--g)" }} />
      </div>
      <h3
        className="svc-h f-serif font-bold text-stone-800 whitespace-pre-line"
        style={{ fontSize: 22, lineHeight: 1.25, marginBottom: 16 }}
      >
        {s.title}
      </h3>
      <p className="svc-p f-sans font-light text-stone-400" style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 24, flexGrow: 1 }}>
        {s.body}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {s.tags.map((t) => (
          <span
            key={t}
            className="svc-tag f-sans font-medium uppercase"
            style={{
              fontSize: 10, letterSpacing: "0.14em",
              padding: "6px 12px",
              border: "1px solid rgba(168,132,58,.25)",
              color: "var(--g)", background: "var(--gp)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const INSIDE = [
  {
    label: "Inside the Organisation",
    items: [
      "Hotel & Restaurant Audits",
      "Concept Development",
      "Turn-Around Programs",
      "Staff Training Programs",
      "Menu Analysis & Development",
      "Profit Enhancement Plans",
      "Operations Assessment",
      "Guest Enhancement Programs",
    ],
  },
  {
    label: "Outside the Organisation",
    items: [
      "Web Design & Development",
      "Social Media Marketing",
      "Restaurant Branding",
      "Revenue Management Systems",
      "New Establishment Setup & Launch",
    ],
  },
];

function InsideCard({ cat }: { cat: (typeof INSIDE)[0] }) {
  const ref = useSR();
  return (
    <div
      ref={ref}
      className="sr"
      style={{
        background: "white",
        border: "1px solid rgba(168,132,58,.12)",
        padding: "40px 36px",
      }}
    >
      <p
        className="f-sans font-medium uppercase"
        style={{ fontSize: 9, letterSpacing: "0.3em", color: "var(--g)", marginBottom: 28 }}
      >
        {cat.label}
      </p>
      <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {cat.items.map((item) => (
          <li key={item} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ display: "block", width: 20, height: 1, flexShrink: 0, background: "var(--g)" }} />
            <span className="f-sans font-light text-stone-500" style={{ fontSize: 14 }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  const h = useSR();
  const { isMobile, isTablet } = useBreakpoint();
  const narrow = isMobile || isTablet;
  const pad = isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px";
  const secPad = isMobile ? "64px 0" : isTablet ? "80px 0" : "96px 0";

  return (
    <section id="services" style={{ background: "var(--cream)", padding: secPad }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: pad }}>

        {/* Section header */}
        <div
          ref={h}
          className="sr"
          style={{
            display: "flex",
            flexDirection: narrow ? "column" : "row",
            alignItems: narrow ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ display: "block", width: 32, height: 1, background: "var(--g)" }} />
              <span className="f-sans font-medium uppercase" style={{ fontSize: 10, letterSpacing: "0.35em", color: "var(--g)" }}>
                What We Do
              </span>
            </div>
            <h2 className="f-serif font-bold text-stone-800" style={{ fontSize: "clamp(32px,3.2vw,48px)", lineHeight: 1.1 }}>
              Advisory <em className="not-italic" style={{ color: "var(--g)" }}>Services</em>
            </h2>
          </div>
          <p className="f-sans font-light text-stone-400" style={{ fontSize: 14, lineHeight: 1.75, maxWidth: narrow ? "100%" : 320 }}>
            Flexible, client-focused services — wherever you are in the hospitality lifecycle.
          </p>
        </div>

        {/* Service cards: 1 col on mobile, 2 col otherwise */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 3, marginBottom: 3 }}>
          {SERVICES.map((s) => <ServiceCard key={s.n} s={s} />)}
        </div>

        {/* Inside/Outside cards */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 3 }}>
          {INSIDE.map((cat) => <InsideCard key={cat.label} cat={cat} />)}
        </div>

      </div>
    </section>
  );
}
