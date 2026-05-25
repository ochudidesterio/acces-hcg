"use client";
import { useState } from "react";
import { useSR, useBreakpoint } from "./hooks";

interface FormState {
  name: string; email: string; phone: string;
  country: string; type: string; scope: string; msg: string;
}

const INFO = [
  { l: "Nairobi",  v: "Valleyview Business Park, Off Limuru Road Parklands" },
  { l: "Kigali",   v: "Regional Presence — The Pinnacle Hotel" },
  { l: "Phone",    v: "0100 754891  ·  +254 726 016 630" },
  { l: "Email",    v: "info@aceshcg.com" },
  { l: "Web",      v: "www.aceshcg.com" },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", country: "", type: "", scope: "", msg: "" });
  const [sent, setSent] = useState(false);
  const h = useSR();
  const { isMobile, isTablet } = useBreakpoint();
  const narrow = isMobile || isTablet;
  const pad = isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px";
  const secPad = isMobile ? "64px 0" : isTablet ? "80px 0" : "96px 0";

  const inpStyle: React.CSSProperties = {
    width: "100%", border: "1px solid #e7e3db", background: "#f9f7f3",
    padding: "12px 16px", fontSize: 14, outline: "none", borderRadius: 0,
  };
  const lblStyle: React.CSSProperties = { display: "block", fontSize: 9, letterSpacing: "0.25em", marginBottom: 8 };

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <section id="contact" style={{ background: "var(--cream)", padding: secPad }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: pad }}>

        {/* Header */}
        <div ref={h} className="sr" style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ display: "block", width: 32, height: 1, background: "var(--g)" }} />
            <span className="f-sans font-medium uppercase" style={{ fontSize: 10, letterSpacing: "0.35em", color: "var(--g)" }}>
              Get In Touch
            </span>
          </div>
          <h2 className="f-serif font-bold text-stone-800" style={{ fontSize: "clamp(32px,3.2vw,48px)", lineHeight: 1.1 }}>
            Start Your <em className="not-italic" style={{ color: "var(--g)" }}>Hospitality Project</em>
          </h2>
        </div>

        {/* Two-column: info panel + form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: narrow ? "1fr" : "360px 1fr",
            gap: narrow ? 40 : 64,
            alignItems: "start",
          }}
        >
          {/* Info panel */}
          <div>
            <p
              className="f-sans font-light text-stone-500"
              style={{ fontSize: 14, lineHeight: 1.8, paddingBottom: 24, borderBottom: "1px solid rgba(168,132,58,.12)" }}
            >
              Tell us about your property and goals. A consultant will respond personally within 24 hours.
            </p>
            <div>
              {INFO.map((item, i) => (
                <div
                  key={item.l}
                  style={{
                    display: "flex", gap: 20, paddingTop: 20, paddingBottom: 20,
                    borderBottom: i < INFO.length - 1 ? "1px solid rgba(168,132,58,.1)" : "none",
                  }}
                >
                  <span className="f-sans font-medium uppercase" style={{ fontSize: 9, letterSpacing: "0.2em", color: "var(--g)", flexShrink: 0, width: 64, marginTop: 2 }}>
                    {item.l}
                  </span>
                  <span className="f-sans font-light text-stone-500" style={{ fontSize: 14, lineHeight: 1.65 }}>{item.v}</span>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 24 }}>
              <a
                href="https://wa.me/254726016630"
                target="_blank" rel="noopener noreferrer"
                className="f-sans font-medium uppercase no-underline hover:opacity-80 transition-opacity duration-300"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  height: 44, padding: "0 20px",
                  fontSize: 10, letterSpacing: "0.14em",
                  border: "1px solid #4CAF50", color: "#2E7D32", background: "#F0FAF1",
                }}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "white", border: "1px solid rgba(168,132,58,.15)", padding: isMobile ? "32px 24px" : "48px 48px" }}>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 0", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", border: "1px solid var(--g)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--g)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="f-serif font-bold text-stone-800" style={{ fontSize: 26, marginBottom: 8 }}>Thank You</h3>
                <p className="f-sans font-light text-stone-400" style={{ fontSize: 14, lineHeight: 1.75 }}>
                  Your enquiry has been received.<br />A consultant will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20 }}
              >
                {([
                  { k: "name" as const,    l: "Full Name",        t: "text",  r: true },
                  { k: "email" as const,   l: "Email Address",    t: "email", r: true },
                  { k: "phone" as const,   l: "Phone / WhatsApp", t: "text",  r: false },
                  { k: "country" as const, l: "Country",          t: "text",  r: false },
                ]).map((f) => (
                  <div key={f.k}>
                    <label className="gi f-sans font-medium uppercase text-stone-400" style={lblStyle}>{f.l}{f.r ? " *" : ""}</label>
                    <input type={f.t} value={form[f.k]} onChange={set(f.k)} required={f.r} className="gi f-sans font-light text-stone-700" style={inpStyle} />
                  </div>
                ))}

                {([
                  { k: "type" as const,  l: "Property Type", opts: ["Hotel","Restaurant","Resort","Guest House","Serviced Apartment","Other"] },
                  { k: "scope" as const, l: "Scope of Work",  opts: ["Operations Consulting","Development Advisory","Financial Advisory","Outsourcing","Staff Training","Full Advisory"] },
                ]).map((s) => (
                  <div key={s.k}>
                    <label className="f-sans font-medium uppercase text-stone-400" style={lblStyle}>{s.l}</label>
                    <select value={form[s.k]} onChange={set(s.k)} className="gi f-sans font-light text-stone-700" style={{ ...inpStyle, appearance: "none" as const }}>
                      <option value="">Select…</option>
                      {s.opts.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}

                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="f-sans font-medium uppercase text-stone-400" style={lblStyle}>Message</label>
                  <textarea
                    rows={5} value={form.msg} onChange={set("msg")}
                    placeholder="Tell us about your property and goals…"
                    className="gi f-sans font-light text-stone-700"
                    style={{ ...inpStyle, resize: "none" }}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <button
                    type="submit"
                    className="f-sans font-medium uppercase text-white hover:opacity-90 transition-opacity duration-300"
                    style={{ width: "100%", height: 56, fontSize: 11, letterSpacing: "0.18em", background: "var(--g)", border: "none", cursor: "pointer" }}
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
