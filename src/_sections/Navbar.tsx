"use client";
import { useState, useEffect } from "react";
import { NAV } from "./data";
import { useBreakpoint } from "./hooks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { isMobile, isTablet }  = useBreakpoint();
  const navPad = isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const href = (label: string) =>
    `#${label.toLowerCase().replace(/\s/g, "-")}`;

  return (
    <>
      <nav
        className={`f-sans fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF7F2]/96 backdrop-blur-xl border-b border-stone-200 shadow-[0_2px_24px_rgba(0,0,0,.06)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Desktop: 3-col grid keeps links perfectly centred */}
        <div
          style={{
            maxWidth: 1360, margin: "0 auto", height: 72,
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            padding: navPad,
          }}
        >
          {/* Col 1 — Logo */}
          <a href="#" className="flex items-center gap-3 no-underline group" style={{ justifySelf: "start" }}>
            <div
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{ borderColor: "var(--g)" }}
            >
              <span className="f-serif font-bold text-base leading-none" style={{ color: "var(--g)" }}>A</span>
            </div>
            <div className="leading-none">
              <p className="text-[11px] font-medium tracking-[.22em] uppercase text-stone-800">ACES HCG</p>
              <p className="text-[8.5px] tracking-[.18em] uppercase mt-0.5" style={{ color: "var(--g)" }}>
                Hotel Consultancy Group
              </p>
            </div>
          </a>

          {/* Col 2 — Nav links (centred) */}
          <ul
            className="hidden lg:flex items-center list-none"
            style={{ gap: 36 }}
          >
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

          {/* Col 3 — CTA + hamburger */}
          <div className="flex items-center gap-3" style={{ justifySelf: "end" }}>
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center h-10 px-6 f-sans font-medium uppercase text-white transition-all duration-300 hover:opacity-90 no-underline"
              style={{ fontSize: 10, letterSpacing: "0.18em", background: "var(--g)" }}
            >
              Book Consultation
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col gap-[5px] p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[1.5px] bg-stone-700 transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-6 h-[1.5px] bg-stone-700 transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-6 h-[1.5px] bg-stone-700 transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`f-sans fixed inset-0 z-40 transition-all duration-500 lg:hidden ${open ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-[#FAF7F2] shadow-2xl flex flex-col pt-24 pb-10 px-8 transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="flex flex-col gap-6 list-none mb-10">
            {NAV.map((l) => (
              <li key={l}>
                <a
                  href={href(l)}
                  onClick={() => setOpen(false)}
                  className="text-[12px] font-medium tracking-[.2em] uppercase text-stone-600 hover:text-stone-900 no-underline transition-colors block py-1"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center h-12 text-[10px] font-medium tracking-[.18em] uppercase text-white rounded-none no-underline"
            style={{ background: "var(--g)" }}
          >
            Book Consultation
          </a>
        </div>
      </div>
    </>
  );
}