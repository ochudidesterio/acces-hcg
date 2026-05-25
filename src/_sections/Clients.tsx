"use client";
import { useSR, useBreakpoint } from "./hooks";
import { CLIENTS } from "./data";

const PARTNERS = ["Abacus", "HotelTime Systems", "Cultiva", "IATA / UFTAA"];

function ClientCard({ c, i }: { c: string; i: number }) {
  const ref = useSR();
  return (
    <div
      ref={ref}
      className="sr group"
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 16, padding: "48px 24px",
        cursor: "default",
        background: i % 3 === 1 ? "var(--gp)" : "var(--cream)",
        transition: "transform .3s, background .3s",
      }}
    >
      <div
        style={{
          width: 48, height: 48, borderRadius: "50%",
          border: "1px solid rgba(168,132,58,.3)", background: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <span className="f-serif font-bold" style={{ fontSize: 20, lineHeight: 1, color: "var(--g)" }}>{c[0]}</span>
      </div>
      <span
        className="f-sans font-medium uppercase text-stone-500 text-center"
        style={{ fontSize: 10, letterSpacing: "0.12em", lineHeight: 1.4 }}
      >
        {c}
      </span>
    </div>
  );
}

export default function Clients() {
  const h = useSR();
  const { isMobile, isTablet } = useBreakpoint();
  const narrow = isMobile || isTablet;
  const pad = isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px";
  const secPad = isMobile ? "64px 0" : isTablet ? "80px 0" : "96px 0";

  return (
    <section id="clients" style={{ background: "white", padding: secPad }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: pad }}>

        {/* Header — centered */}
        <div ref={h} className="sr" style={{ textAlign: "center", marginBottom: narrow ? 48 : 80 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 20 }}>
            <span style={{ display: "block", width: 32, height: 1, background: "var(--g)" }} />
            <span className="f-sans font-medium uppercase" style={{ fontSize: 10, letterSpacing: "0.35em", color: "var(--g)" }}>
              Client Portfolio
            </span>
            <span style={{ display: "block", width: 32, height: 1, background: "var(--g)" }} />
          </div>
          <h2 className="f-serif font-bold text-stone-800" style={{ fontSize: "clamp(34px,3.5vw,52px)", lineHeight: 1.1 }}>
            Brands We&apos;ve <em className="not-italic" style={{ color: "var(--g)" }}>Elevated</em>
          </h2>
        </div>

        {/* Client grid: 2 cols on mobile/tablet, 4 on desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: narrow ? "1fr 1fr" : "1fr 1fr 1fr 1fr",
            gap: 1, background: "#e8e4dc", marginBottom: 1,
          }}
        >
          {CLIENTS.map((c, i) => <ClientCard key={c} c={c} i={i} />)}
        </div>

        {/* Partners row */}
        <div style={{ borderTop: "1px solid #e8e4dc", paddingTop: 56, textAlign: "center" }}>
          <p className="f-sans font-medium uppercase text-stone-400" style={{ fontSize: 10, letterSpacing: "0.35em", marginBottom: 32 }}>
            Technology &amp; Industry Partners
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {PARTNERS.map((p) => (
              <span
                key={p}
                className="f-sans font-medium uppercase text-stone-400"
                style={{ fontSize: 10, letterSpacing: "0.16em", padding: "12px 24px", border: "1px solid rgba(168,132,58,.2)", background: "var(--gp)" }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
