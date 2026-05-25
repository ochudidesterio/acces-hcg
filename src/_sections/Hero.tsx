"use client";
import { STATS } from "./data";
import { useBreakpoint } from "./hooks";

export default function Hero() {
  const { isMobile, isTablet } = useBreakpoint();
  const narrow = isMobile || isTablet;

  return (
    <section id="home" className="relative overflow-hidden" style={{ background: "var(--cream)" }}>
      <div style={{ display: "flex", flexDirection: narrow ? "column" : "row", minHeight: "100vh" }}>

        {/* ── LEFT COLUMN ─────────────────────────────────────────── */}
        <div
          className="relative"
          style={{
            width: narrow ? "100%" : "58%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: isMobile ? "88px 20px 56px" : isTablet ? "100px 40px 64px" : "120px 80px 80px 96px",
          }}
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(168,132,58,.055) 1px,transparent 1px)," +
                "linear-gradient(90deg,rgba(168,132,58,.055) 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Eyebrow */}
          <div className="hs1 relative flex items-center gap-4 mb-8">
            <span className="block h-px gr shrink-0" style={{ width: 32 }} />
            <span
              className="f-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: isMobile ? "0.12em" : "0.32em", color: "var(--g)" }}
            >
              Redefining African Hospitality Since 2017
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hs2 relative f-serif font-bold text-stone-900"
            style={{ fontSize: "clamp(36px,3.8vw,60px)", lineHeight: 1.06, letterSpacing: "-0.02em", marginBottom: 24 }}
          >
            Africa&apos;s Premier<br />
            <em className="not-italic" style={{ color: "var(--g)" }}>Hospitality</em><br />
            Consultancy.
          </h1>

          {/* Description */}
          <p
            className="hs3 relative f-sans font-light text-stone-500"
            style={{ fontSize: 16, lineHeight: 1.82, maxWidth: narrow ? "100%" : 500, marginBottom: 40 }}
          >
            Strategic advisory, operational excellence and brand transformation
            for hotels, resorts, restaurants and serviced apartments across East Africa.
          </p>

          {/* CTA buttons */}
          <div className="hs4 relative flex flex-wrap gap-4" style={{ marginBottom: 56 }}>
            <a
              href="#contact"
              className="f-sans font-medium uppercase no-underline hover:opacity-85 transition-opacity duration-200"
              style={{
                display: "inline-flex", alignItems: "center",
                height: 52, padding: "0 32px",
                fontSize: 11, letterSpacing: "0.18em",
                background: "var(--g)", color: "#fff",
              }}
            >
              Book Consultation
            </a>
            <a
              href="#services"
              className="f-sans font-medium uppercase no-underline hover:opacity-75 transition-opacity duration-200"
              style={{
                display: "inline-flex", alignItems: "center",
                height: 52, padding: "0 32px",
                fontSize: 11, letterSpacing: "0.18em",
                border: "1px solid var(--g)", color: "var(--g)",
              }}
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="hs4 relative" style={{ borderTop: "1px solid rgba(168,132,58,.18)", paddingTop: 36 }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 16 : 24 }}>
              {STATS.map((s) => (
                <div key={s.n} style={{ borderLeft: "2px solid var(--g)", paddingLeft: 16 }}>
                  <p className="f-serif font-bold text-stone-800" style={{ fontSize: 30, lineHeight: 1 }}>{s.n}</p>
                  <p
                    className="f-sans font-medium uppercase text-stone-400"
                    style={{ fontSize: 9, letterSpacing: "0.14em", marginTop: 8, lineHeight: 1.4 }}
                  >{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — dark visual panel (desktop only) ─────── */}
        {!narrow && (
          <div
            className="relative flex flex-col items-center justify-center overflow-hidden"
            style={{ width: "42%", flexShrink: 0, background: "#0e0c08" }}
          >
            {/* Gold grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(168,132,58,.09) 1px,transparent 1px)," +
                  "linear-gradient(90deg,rgba(168,132,58,.09) 1px,transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* Diagonal hatch */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg,transparent 0,transparent 34px,rgba(168,132,58,.025) 34px,rgba(168,132,58,.025) 35px)",
              }}
            />

            {/* Concentric rings + monogram */}
            <div className="relative flex items-center justify-center" style={{ width: 300, height: 300 }}>
              <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(168,132,58,.18)" }} />
              <div className="absolute rounded-full" style={{ inset: 44, border: "1px solid rgba(168,132,58,.11)" }} />
              <div
                className="absolute rounded-full flex items-center justify-center"
                style={{ inset: 88, border: "1px solid rgba(168,132,58,.28)", background: "rgba(168,132,58,.07)" }}
              >
                <span className="f-serif font-bold select-none" style={{ fontSize: 76, lineHeight: 1, color: "var(--g)" }}>A</span>
              </div>
            </div>

            {/* Top-left location chips */}
            <div className="absolute" style={{ top: 80, left: 36 }}>
              {["Est. 2017", "Nairobi, KE", "Kigali, RW"].map((t) => (
                <div key={t} style={{ marginBottom: 10 }}>
                  <span
                    className="f-sans font-medium uppercase"
                    style={{
                      display: "inline-block", fontSize: 9, letterSpacing: "0.22em",
                      padding: "6px 12px",
                      border: "1px solid rgba(168,132,58,.22)",
                      color: "var(--gl)", background: "rgba(168,132,58,.05)",
                    }}
                  >{t}</span>
                </div>
              ))}
            </div>

            {/* Bottom-right stat chips */}
            <div className="absolute flex flex-col items-end" style={{ bottom: 80, right: 36 }}>
              {["50+ Projects", "5 Countries", "7 Yrs Advisory"].map((t) => (
                <div key={t} style={{ marginTop: 10 }}>
                  <span
                    className="f-sans font-medium uppercase"
                    style={{
                      display: "inline-block", fontSize: 9, letterSpacing: "0.22em",
                      padding: "6px 12px",
                      border: "1px solid rgba(168,132,58,.22)",
                      color: "var(--gl)", background: "rgba(168,132,58,.05)",
                    }}
                  >{t}</span>
                </div>
              ))}
            </div>

            {/* Bottom wordmark */}
            <p
              className="absolute f-sans font-medium uppercase"
              style={{
                bottom: 28, left: "50%", transform: "translateX(-50%)",
                fontSize: 8, letterSpacing: "0.55em",
                color: "rgba(168,132,58,.28)", whiteSpace: "nowrap",
              }}
            >
              ACES · HOTEL CONSULTANCY GROUP
            </p>
          </div>
        )}
      </div>

      {/* Mobile scroll cue */}
      {narrow && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="f-sans font-medium uppercase text-stone-400" style={{ fontSize: 9, letterSpacing: "0.35em" }}>Scroll</span>
          <div className="w-px h-10 gr drip" />
        </div>
      )}
    </section>
  );
}
