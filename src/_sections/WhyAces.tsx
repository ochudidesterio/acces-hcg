"use client";
import { useSR, useBreakpoint } from "./hooks";
import { VALUES } from "./data";

const METRICS = [
  { n: "50+",  l: "Projects Delivered",      d: "Hotels, resorts, restaurants & apartments across East Africa" },
  { n: "7+",   l: "Years Industry Advisory",  d: "Deep operational and advisory knowledge since 2017" },
  { n: "5+",   l: "Countries of Operation",   d: "Kenya, Rwanda, Burundi and growing" },
  { n: "100%", l: "Tailored Engagements",     d: "Every project uniquely crafted for the client's context" },
];

const CASES = [
  {
    loc: "Kenya · Nairobi", cat: "Restaurant Profitability",
    title: "Luxury Restaurant — Operations Overhaul",
    pts: ["Reduced beverage wastage by 30%", "Redesigned menu engineering & pricing", "Increased average spend per cover", "Standardised kitchen operations"],
  },
  {
    loc: "Rwanda · Kigali", cat: "Hotel Market Repositioning",
    title: "Boutique Resort — Full Market Repositioning",
    pts: ["Complete brand repositioning strategy", "Service standards & SOP redesign", "Sales channel restructuring", "Pre-relaunch staff training programme"],
  },
];

function MetricCard({ s }: { s: (typeof METRICS)[0] }) {
  const ref = useSR();
  return (
    <div ref={ref} className="sr" style={{ background: "#0c0a07", padding: "40px 36px" }}>
      <p className="f-serif font-bold" style={{ fontSize: 46, lineHeight: 1, color: "var(--gl)", marginBottom: 12 }}>{s.n}</p>
      <p className="f-sans font-medium uppercase text-white" style={{ fontSize: 11, letterSpacing: "0.14em", marginBottom: 8 }}>{s.l}</p>
      <p className="f-sans font-light text-stone-500" style={{ fontSize: 13, lineHeight: 1.65 }}>{s.d}</p>
    </div>
  );
}

function CaseCard({ cs }: { cs: (typeof CASES)[0] }) {
  const ref = useSR();
  return (
    <div ref={ref} className="sr" style={{ background: "#0c0a07", padding: "40px 36px", flex: 1 }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <span className="f-sans font-medium uppercase" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--g)" }}>{cs.loc}</span>
        <span style={{ color: "#374151" }}>·</span>
        <span className="f-sans uppercase text-stone-600" style={{ fontSize: 10, letterSpacing: "0.14em" }}>{cs.cat}</span>
      </div>
      <h3 className="f-serif font-bold text-white" style={{ fontSize: 20, lineHeight: 1.3, marginBottom: 16 }}>{cs.title}</h3>
      <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {cs.pts.map((p) => (
          <li key={p} className="f-sans font-light text-stone-500" style={{ display: "flex", gap: 12, fontSize: 14 }}>
            <span style={{ color: "var(--gl)", flexShrink: 0 }}>→</span>{p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhyAces() {
  const h = useSR();
  const { isMobile, isTablet } = useBreakpoint();
  const narrow = isMobile || isTablet;
  const pad = isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px";
  const secPad = isMobile ? "64px 0" : isTablet ? "80px 0" : "96px 0";

  const metricsCols = isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr 1fr";

  return (
    <section id="why-aces" style={{ background: "#080604", padding: secPad }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: pad }}>

        {/* Header */}
        <div
          ref={h}
          className="sr"
          style={{
            display: "flex",
            flexDirection: narrow ? "column" : "row",
            alignItems: narrow ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            gap: 32,
            marginBottom: 64,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ display: "block", width: 32, height: 1, background: "var(--g)" }} />
              <span className="f-sans font-medium uppercase" style={{ fontSize: 10, letterSpacing: "0.35em", color: "var(--g)" }}>
                Why ACES
              </span>
            </div>
            <h2 className="f-serif font-bold text-white" style={{ fontSize: "clamp(32px,3.2vw,48px)", lineHeight: 1.1 }}>
              Why Leading Properties<br />
              <em className="not-italic" style={{ color: "var(--gl)" }}>Choose Us</em>
            </h2>
          </div>
          <blockquote
            className="f-serif italic text-stone-400"
            style={{ fontSize: 18, lineHeight: 1.65, maxWidth: narrow ? "100%" : 360, borderLeft: "2px solid var(--g)", paddingLeft: 24 }}
          >
            {"\"Access Africa's leading hospitality expertise — wherever you need it.\""}
          </blockquote>
        </div>

        {/* Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: metricsCols, gap: 2, marginBottom: 2 }}>
          {METRICS.map((s) => <MetricCard key={s.n} s={s} />)}
        </div>

        {/* Bottom row */}
        <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr", gap: 2 }}>

          {/* Core Values */}
          <div style={{ background: "#0c0a07", padding: isMobile ? "32px 24px" : "40px 36px" }}>
            <p className="f-sans font-medium uppercase" style={{ fontSize: 9, letterSpacing: "0.3em", color: "var(--g)", marginBottom: 32 }}>
              Core Values
            </p>
            <div>
              {VALUES.map((v, i) => (
                <div
                  key={v.n}
                  style={{ display: "flex", gap: 20, paddingTop: 20, paddingBottom: 20, borderTop: i > 0 ? "1px solid #1a1710" : "none" }}
                >
                  <span className="f-serif font-light" style={{ fontSize: 15, color: "var(--g)", flexShrink: 0, marginTop: 2 }}>{v.n}</span>
                  <div>
                    <p className="f-sans font-medium uppercase text-white" style={{ fontSize: 11, letterSpacing: "0.14em", marginBottom: 4 }}>{v.v}</p>
                    <p className="f-sans font-light text-stone-500" style={{ fontSize: 13, lineHeight: 1.65 }}>{v.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case studies */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {CASES.map((cs) => <CaseCard key={cs.title} cs={cs} />)}
          </div>

        </div>
      </div>
    </section>
  );
}
