"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { NAV } from "./data";
import { useBreakpoint } from "./hooks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { isMobile, isTablet }  = useBreakpoint();
  const narrow = isMobile || isTablet;
  const navPad = isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const href = (label: string) =>
    `#${label.toLowerCase().replace(/\s/g, "-")}`;

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className={`f-sans fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-[#FAF7F2] border-b border-stone-200 shadow-[0_2px_24px_rgba(0,0,0,.06)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div
          style={{
            maxWidth: 1360, margin: "0 auto", height: 68,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: navPad,
          }}
        >
          {/* Logo image */}
          <a href="#" className="no-underline group transition-opacity duration-300 hover:opacity-80" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Image
              src="/images/logo.png"
              alt="ACES Hotel Consultancy Group"
              width={120}
              height={48}
              style={{ height: 46, width: "auto", objectFit: "contain" }}
              priority
            />
          </a>

          {/* Desktop nav links — centred */}
          <ul className="f-sans items-center list-none" style={{ display: narrow ? "none" : "flex", gap: 36 }}>
            {NAV.map((l) => (
              <li key={l}>
                <a
                  href={href(l)}
                  className="nlink f-sans font-medium uppercase text-stone-500 hover:text-stone-800 transition-colors duration-300 no-underline"
                  style={{ fontSize: 11, letterSpacing: "0.16em" }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: desktop CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="#contact"
              className="f-sans font-medium uppercase text-white transition-all duration-300 hover:opacity-90 no-underline"
              style={{ display: narrow ? "none" : "inline-flex", alignItems: "center", height: 40, padding: "0 24px", fontSize: 10, letterSpacing: "0.18em", background: "var(--g)" }}
            >
              Book Consultation
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{ display: narrow ? "flex" : "none", flexDirection: "column", gap: 5, padding: 8, background: "none", border: "none", cursor: "pointer" }}
            >
              <span style={{ display: "block", width: 24, height: 1.5, background: "#44403c", transformOrigin: "center", transition: "transform .3s, opacity .3s", transform: open ? "rotate(45deg) translateY(6.5px)" : "none" }} />
              <span style={{ display: "block", width: 24, height: 1.5, background: "#44403c", transition: "opacity .3s, transform .3s", opacity: open ? 0 : 1 }} />
              <span style={{ display: "block", width: 24, height: 1.5, background: "#44403c", transformOrigin: "center", transition: "transform .3s, opacity .3s", transform: open ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Full-screen mobile menu overlay ────────────────────── */}
      {narrow && <div
        style={{
          position: "fixed", inset: 0, zIndex: 40,
          background: "#18140E",
          display: "flex", flexDirection: "column",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transition: "opacity .4s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Gold grid texture */}
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(168,132,58,.07) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(168,132,58,.07) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Overlay top bar — logo on dark bg uses gold-tinted text mark */}
        <div
          style={{
            position: "relative",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 20px", height: 68, borderBottom: "1px solid rgba(168,132,58,.15)",
          }}
        >
          <a href="#" onClick={close} className="no-underline" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36, height: 36, borderRadius: "50%",
                border: "1px solid var(--g)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span className="f-serif font-bold" style={{ fontSize: 15, color: "var(--g)", lineHeight: 1 }}>A</span>
            </div>
            <div style={{ lineHeight: 1 }}>
              <p className="f-sans font-medium uppercase text-white" style={{ fontSize: 11, letterSpacing: "0.22em" }}>ACES HCG</p>
              <p className="f-sans uppercase" style={{ fontSize: 8, letterSpacing: "0.18em", color: "var(--g)", marginTop: 4 }}>Hotel Consultancy Group</p>
            </div>
          </a>

          <button
            onClick={close}
            aria-label="Close menu"
            style={{ background: "none", border: "none", cursor: "pointer", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="1" y1="1" x2="17" y2="17" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="17" y1="1" x2="1" y2="17" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 32px", position: "relative" }}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 0 }}>
            {NAV.map((l, i) => (
              <li key={l} style={{ borderBottom: "1px solid rgba(168,132,58,.12)" }}>
                <a
                  href={href(l)}
                  onClick={close}
                  className="f-sans font-medium uppercase no-underline"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", fontSize: 13, letterSpacing: "0.22em", color: "#e8dcc8" }}
                >
                  <span>{l}</span>
                  <span className="f-serif" style={{ fontSize: 11, color: "var(--gl)", opacity: 0.6 }}>0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA */}
        <div style={{ position: "relative", padding: "24px 32px 40px" }}>
          <a
            href="#contact"
            onClick={close}
            className="f-sans font-medium uppercase no-underline"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 52, width: "100%", fontSize: 11, letterSpacing: "0.22em", background: "var(--g)", color: "#fff" }}
          >
            Book Consultation
          </a>
        </div>
      </div>}
    </>
  );
}
