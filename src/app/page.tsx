import type { Metadata } from "next";
import Navbar   from "../_sections/Navbar";
import Hero     from "../_sections/Hero";
import Marquee  from "../_sections/Marquee";
import About    from "../_sections/About";
import Services from "../_sections/Services";
import WhyAces  from "../_sections/WhyAces";
import Team     from "../_sections/Team";
import Clients  from "../_sections/Clients";
import Contact  from "../_sections/Contact";
import Footer   from "../_sections/Footer";

// Page-level metadata (extends layout.tsx defaults)
export const metadata: Metadata = {
  title: "ACES Hotel Consultancy Group | Africa's Premier Hospitality Consultancy",
  description:
    "Strategic hospitality advisory, operational excellence and brand transformation for hotels, resorts, restaurants and serviced apartments across East Africa.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <WhyAces />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}