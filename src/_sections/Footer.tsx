"use client";
import Image from "next/image";
import { NAV } from "./data";
import { useBreakpoint } from "./hooks";

const COLS = [
  {
    title: "Navigation",
    links: NAV.map((l) => ({ label: l, href: `#${l.toLowerCase().replace(/\s/g, "-")}` })),
  },
  {
    title: "Services",
    links: ["Hotel Operations","Development Advisory","Financial Advisory","Outsourcing"].map((l) => ({
      label: l, href: "#services",
    })),
  },
  {
    title: "Contact",
    links: [
      { label: "info@aceshcg.com",  href: "mailto:info@aceshcg.com" },
      { label: "+254 726 016 630",   href: "tel:+254726016630" },
      { label: "Nairobi, Kenya",     href: "#contact" },
      { label: "Kigali, Rwanda",     href: "#contact" },
      { label: "www.aceshcg.com",    href: "https://www.aceshcg.com" },
    ],
  },
];

export default function Footer() {
  const { isMobile, isTablet } = useBreakpoint();
  const narrow = isMobile || isTablet;
  const pad = isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px";
  const footerCols = isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr 1fr";

  return (
    <footer style={{ background: "#080604", paddingTop: narrow ? 56 : 80 }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: pad }}>

        {/* Grid: brand + 3 link cols */}
        <div style={{ display: "grid", gridTemplateColumns: footerCols, gap: narrow ? 40 : 56, marginBottom: 64 }}>

          {/* Brand column — full width on mobile */}
          <div style={{ gridColumn: isMobile ? "1 / -1" : undefined }}>
            <div style={{ marginBottom: 20 }}>
              <Image
                src="/images/logo.png"
                alt="ACES Hotel Consultancy Group"
                width={120}
                height={48}
                style={{ height: 56, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="f-sans font-light text-stone-500" style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 220 }}>
              Redefining African Hospitality through strategic advisory and transformative partnerships since 2017.
            </p>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.title}>
              <p className="f-sans font-medium uppercase" style={{ fontSize: 9, letterSpacing: "0.3em", color: "var(--g)", marginBottom: 24 }}>
                {col.title}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="f-sans font-light text-stone-500 hover:text-stone-300 transition-colors no-underline"
                      style={{ fontSize: 14 }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1a1710", paddingTop: 28, paddingBottom: 32,
            display: "flex",
            flexDirection: narrow ? "column" : "row",
            alignItems: narrow ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <p className="f-sans font-light text-stone-600" style={{ fontSize: 12 }}>
            &copy; {new Date().getFullYear()} ACES Hotel Consultancy Limited. All rights reserved.
          </p>
          <p className="f-sans text-stone-700 uppercase" style={{ fontSize: 10, letterSpacing: "0.28em" }}>
            Redefining African Hospitality
          </p>
        </div>

      </div>
    </footer>
  );
}
