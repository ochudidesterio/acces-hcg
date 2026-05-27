"use client";
import Image from "next/image";
import { useSR, useBreakpoint } from "./hooks";
import { TEAM, type TeamMember } from "./data";

function TeamCard({ m, narrow }: { m: TeamMember; narrow: boolean }) {
  const ref = useSR();
  return (
    <div
      ref={ref}
      className="sr tc"
      style={{
        background: "white",
        border: "1px solid rgba(168,132,58,.15)",
        overflow: "hidden",
      }}
    >
      <div style={{ height: 2, background: "linear-gradient(90deg,var(--g),var(--gl))" }} />

      <div style={{ display: "flex", flexDirection: narrow ? "column" : "row" }}>

        {/* Photo / initials panel */}
        <div
          style={{
            position: "relative",
            width: narrow ? "100%" : 240,
            height: narrow ? 220 : "auto",
            minHeight: narrow ? undefined : 270,
            flexShrink: 0,
            background: "#ede8df",
          }}
        >
          {m.image ? (
            <Image
              src={m.image}
              alt={m.name}
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 768px) 100vw, 240px"
            />
          ) : (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div
                style={{
                  width: 80, height: 80, borderRadius: "50%",
                  border: "1.5px solid rgba(168,132,58,.4)", background: "var(--gp)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <span className="f-serif font-bold" style={{ fontSize: 28, lineHeight: 1, color: "var(--g)" }}>{m.initials}</span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div
          style={{
            padding: narrow ? "24px 24px 28px" : "32px 44px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3
            className="f-serif font-bold text-stone-800"
            style={{ fontSize: narrow ? 20 : 24, lineHeight: 1.2, marginBottom: 6 }}
          >
            {m.name}
          </h3>
          <p
            className="f-sans font-medium uppercase"
            style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--g)", marginBottom: 16 }}
          >
            {m.role}
          </p>
          <p
            className="f-sans font-light text-stone-400"
            style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 22, maxWidth: 680 }}
          >
            {m.bio}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
            {m.exp.map((e) => (
              <div key={e} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ display: "block", width: 10, height: 1, background: "var(--g)", flexShrink: 0 }} />
                <span className="f-sans font-light text-stone-400" style={{ fontSize: 11 }}>{e}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Team() {
  const h = useSR();
  const { isMobile, isTablet } = useBreakpoint();
  const narrow = isMobile || isTablet;
  const pad = isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px";
  const secPad = isMobile ? "64px 0" : isTablet ? "80px 0" : "96px 0";

  return (
    <section id="team" style={{ background: "var(--cream)", padding: secPad }}>
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
            gap: 24,
            marginBottom: 52,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ display: "block", width: 32, height: 1, background: "var(--g)" }} />
              <span className="f-sans font-medium uppercase" style={{ fontSize: 10, letterSpacing: "0.35em", color: "var(--g)" }}>
                Key Consultants
              </span>
            </div>
            <h2 className="f-serif font-bold text-stone-800" style={{ fontSize: "clamp(32px,3.2vw,48px)", lineHeight: 1.1 }}>
              Our <em className="not-italic" style={{ color: "var(--g)" }}>Leadership Team</em>
            </h2>
          </div>
          <p className="f-sans font-light text-stone-400" style={{ fontSize: 14, lineHeight: 1.75, maxWidth: narrow ? "100%" : 320 }}>
            Experienced hotel leaders with demonstrated track records — pooled together to deliver outcomes.
          </p>
        </div>

        {/* Cards — horizontal stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 20 }}>
          {TEAM.map((m) => <TeamCard key={m.name} m={m} narrow={narrow} />)}
        </div>

        {/* Join the network CTA */}
        <div
          style={{
            background: "white",
            border: "1px solid rgba(168,132,58,.15)",
            padding: isMobile ? "32px 24px" : "48px 48px",
            display: "flex",
            flexDirection: narrow ? "column" : "row",
            alignItems: narrow ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
            <h3 className="f-serif font-bold text-stone-800" style={{ fontSize: 26, marginBottom: 8 }}>
              Join the ACES Network
            </h3>
            <p className="f-sans font-light text-stone-400" style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 560 }}>
              We partner with independent consultants, trainers, hospitality specialists and outsourcing experts across East and Central Africa.
            </p>
          </div>
          <a
            href="mailto:info@aceshcg.com"
            className="f-sans font-medium uppercase no-underline hover:opacity-75 transition-opacity duration-300"
            style={{
              display: "inline-flex", alignItems: "center",
              height: 48, padding: "0 32px",
              fontSize: 11, letterSpacing: "0.18em",
              border: "1px solid var(--g)", color: "var(--g)",
              flexShrink: 0,
            }}
          >
            Express Interest
          </a>
        </div>

      </div>
    </section>
  );
}
