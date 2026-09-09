"use client";
import Image from "next/image";
import { useSR, useBreakpoint } from "./hooks";
import { CLIENTS, PARTNERS, type ClientItem } from "./data";

function ClientCard({ c, i }: { c: ClientItem; i: number }) {
  const ref = useSR();

  /* Building photo → full-cover with dark overlay */
  if (c.logo && c.isPhoto) {
    return (
      <div
        ref={ref}
        className="sr"
        style={{ position: "relative", height: 180, overflow: "hidden" }}
      >
        <Image
          src={c.logo}
          alt={c.name}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,6,4,0.58)" }} />
        <div
          style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "16px 20px",
          }}
        >
          <span
            className="f-sans font-medium text-white"
            style={{ fontSize: 12, letterSpacing: "0.04em", lineHeight: 1.3 }}
          >
            {c.name}
          </span>
        </div>
      </div>
    );
  }

  /* Logo with built-in dark background → dark card */
  if (c.logo && c.dark) {
    return (
      <div
        ref={ref}
        className="sr"
        style={{
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 14, padding: "24px 20px", height: 180,
          background: "#111008",
        }}
      >
        <div style={{ position: "relative", width: "80%", height: 80 }}>
          <Image
            src={c.logo}
            alt={c.name}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 40vw, 20vw"
          />
        </div>
        <span
          className="f-sans font-medium uppercase text-center"
          style={{ fontSize: 9, letterSpacing: "0.14em", lineHeight: 1.4, color: "rgba(255,255,255,0.45)" }}
        >
          {c.name}
        </span>
      </div>
    );
  }

  /* Logo on light card */
  if (c.logo) {
    const bg = i % 4 === 1 ? "var(--gp)" : "white";
    return (
      <div
        ref={ref}
        className="sr"
        style={{
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 14, padding: "18px 20px", height: 180,
          background: bg,
        }}
      >
        <div style={{ position: "relative", width: "82%", height: 96 }}>
          <Image
            src={c.logo}
            alt={c.name}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 40vw, 20vw"
          />
        </div>
        <span
          className="f-sans font-medium uppercase text-stone-400 text-center"
          style={{ fontSize: 9, letterSpacing: "0.14em", lineHeight: 1.4 }}
        >
          {c.name}
        </span>
      </div>
    );
  }

  /* No logo — text/initial fallback */
  return (
    <div
      ref={ref}
      className="sr"
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 16, padding: "48px 24px", height: 180,
        background: "var(--cream)",
      }}
    >
      <div
        style={{
          width: 48, height: 48, borderRadius: "50%",
          border: "1px solid rgba(168,132,58,.3)", background: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <span className="f-serif font-bold" style={{ fontSize: 20, lineHeight: 1, color: "var(--g)" }}>{c.name[0]}</span>
      </div>
      <span
        className="f-sans font-medium uppercase text-stone-500 text-center"
        style={{ fontSize: 10, letterSpacing: "0.12em", lineHeight: 1.4 }}
      >
        {c.name}
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
            gap: 2, background: "#e8e4dc", marginBottom: 2,
          }}
        >
          {CLIENTS.map((c, i) => <ClientCard key={c.name} c={c} i={i} />)}
        </div>

        {/* Partners row */}
        <div style={{ borderTop: "1px solid #e8e4dc", paddingTop: 56, textAlign: "center" }}>
          <p className="f-sans font-medium uppercase text-stone-400" style={{ fontSize: 10, letterSpacing: "0.35em", marginBottom: 36 }}>
            Technology &amp; Industry Partners
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: narrow ? 20 : 32 }}>
            {PARTNERS.map((p) =>
              p.logo ? (
                <div key={p.name} style={{ position: "relative", width: narrow ? 100 : 130, height: narrow ? 44 : 52 }}>
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="130px"
                  />
                </div>
              ) : (
                <span
                  key={p.name}
                  className="f-sans font-medium uppercase text-stone-400"
                  style={{ fontSize: 10, letterSpacing: "0.16em", padding: "12px 20px", border: "1px solid rgba(168,132,58,.2)", background: "var(--gp)" }}
                >
                  {p.name}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
