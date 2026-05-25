export interface ServiceItem {
  n: string;
  title: string;
  body: string;
  tags: string[];
}

export interface StatItem {
  n: string;
  l: string;
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  exp: string[];
}

export interface ValueItem {
  n: string;
  v: string;
  d: string;
}

export const NAV: string[] = [
  "About", "Services", "Why ACES", "Team", "Clients", "Contact",
];

export const SERVICES: ServiceItem[] = [
  {
    n: "01",
    title: "Hotel Operations\n& Management",
    body: "F&B excellence, SOP development, cost control, revenue optimisation and bespoke staff training — turning operations into a competitive advantage.",
    tags: ["F&B", "SOPs", "Cost Control", "Revenue", "Training"],
  },
  {
    n: "02",
    title: "Hotel Development\nAdvisory",
    body: "From concept to keys — feasibility studies, brand positioning, site evaluation and complete pre-opening support for new builds and relaunches.",
    tags: ["Feasibility", "Concept Dev", "Brand Positioning", "Pre-opening"],
  },
  {
    n: "03",
    title: "Commercial &\nFinancial Advisory",
    body: "Rigorous financial analysis, payroll optimisation, asset management, business audits and strategies for long-term profitability and valuation uplift.",
    tags: ["Financial Analysis", "Business Audits", "Asset Mgmt", "Profitability"],
  },
  {
    n: "04",
    title: "Outsourcing\nSolutions",
    body: "HR, digital marketing, finance, accounting and recruitment outsourcing — so your leadership team can focus entirely on the guest experience.",
    tags: ["HR", "Digital Mktg", "Finance & Acctg", "Recruitment"],
  },
];

export const STATS: StatItem[] = [
  { n: "50+",  l: "Projects Delivered" },
  { n: "7+",   l: "Years Advisory" },
  { n: "5+",   l: "Countries Served" },
  { n: "100%", l: "Tailored Engagements" },
];

export const CLIENTS: string[] = [
  "Blueview Kenya",
  "Sunciti Resort Sagana",
  "Upperhill Blueberry",
  "Kangaroo Hotel Burundi",
  "Cultiva Farm Restaurant",
  "Mawimbi Seafood Restaurants",
  "The Pinnacle Hotel Kigali",
  "Nair Obi",
];

export const TEAM: TeamMember[] = [
  {
    initials: "AC",
    name: "Anthony Chege",
    role: "Founder & Managing Director",
    bio: "Founding partner since 2017. Specialises in service coaching, market assessment, brand expansion, tourism development and master planning across East Africa.",
    exp: ["ACES HCG, 2017–present", "Regional Tourism Advisory", "Multi-property Management"],
  },
  {
    initials: "KO",
    name: "Kevin Odongo",
    role: "HR & Training Consultant",
    bio: "10+ years in hospitality training and mentoring. Expert in team building, curriculum development, HR management and strategic hospitality marketing.",
    exp: ["10+ Years Training", "Curriculum Development", "Strategic HR"],
  },
  {
    initials: "NM",
    name: "Nickson Maina",
    role: "Management & Business Development",
    bio: "15+ years across Starbucks International UAE, Java House Africa and regional brands. Specialist in customer service, kitchen management and restaurant operations.",
    exp: ["Starbucks International UAE", "Java House Africa", "Pewi Foods"],
  },
];

export const VALUES: ValueItem[] = [
  { n: "01", v: "Client Value Focus",  d: "Every decision is filtered through the lens of client outcomes and return on investment." },
  { n: "02", v: "Genuine Goodwill",    d: "We invest in the success of each property as if it were our own." },
  { n: "03", v: "Characterful People", d: "Experts with real-world hospitality backgrounds — not just theory." },
  { n: "04", v: "Respect",             d: "For our clients, their staff, their guests, and the industry we serve." },
  { n: "05", v: "Integrity",           d: "Transparent, honest advisory — even when the message is difficult." },
];