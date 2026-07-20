import type { LucideIcon } from "lucide-react";
import {
  BookOpenText,
  BarChart3,
  Users2,
  Presentation,
  Mic2,
  Brain,
  GraduationCap,
  Compass,
} from "lucide-react";

export type Activity = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

export const ACTIVITIES: Activity[] = [
  {
    slug: "policy-analysis",
    title: "Policy Analysis",
    short: "Rigorous examination of public policy at every level.",
    description:
      "Members dissect legislation, budgets and reform proposals — building briefs that translate complex policy into clear, actionable insight.",
    icon: BookOpenText,
  },
  {
    slug: "economic-research",
    title: "Economic Research",
    short: "Data-driven inquiry into economies that shape our world.",
    description:
      "From macro trends to grassroots markets, we investigate the forces driving prosperity, inequality and development across Nigeria and beyond.",
    icon: BarChart3,
  },
  {
    slug: "weekly-sessions",
    title: "Weekly Intellectual Sessions",
    short: "A standing forum for ideas that matter.",
    description:
      "Every week, members convene to debate, present and stress-test arguments in a rigorous, collegial setting.",
    icon: Users2,
  },
  {
    slug: "research-presentations",
    title: "Research Presentations",
    short: "Original work presented and defended in public.",
    description:
      "Members produce and present research papers, receiving structured feedback from peers, mentors and invited scholars.",
    icon: Presentation,
  },
  {
    slug: "public-speaking",
    title: "Public Speaking",
    short: "Cultivating articulate, persuasive voices.",
    description:
      "Structured practice in speech, debate and moderated dialogue prepares members to communicate ideas with clarity and conviction.",
    icon: Mic2,
  },
  {
    slug: "critical-thinking",
    title: "Critical Thinking",
    short: "Habits of mind that outlast any single topic.",
    description:
      "We train members to interrogate assumptions, weigh evidence, and reason across disciplines with intellectual honesty.",
    icon: Brain,
  },
  {
    slug: "mentorship",
    title: "Mentorship",
    short: "Learning by walking alongside experienced minds.",
    description:
      "Junior members are paired with senior researchers and alumni for guided study, feedback and long-term academic development.",
    icon: GraduationCap,
  },
  {
    slug: "leadership",
    title: "Leadership Development",
    short: "Forming leaders for policy, industry and civic life.",
    description:
      "Through committees, publications and public engagements, members practise the responsibilities of principled leadership.",
    icon: Compass,
  },
];

export type Leader = {
  name: string;
  position: string;
  bio: string;
};

export const EXECUTIVE_LEADERSHIP: Leader[] = [
  {
    name: "Chimezie Prince",
    position: "President",
    bio: "Leads PARC's overall direction, representing the congress at the university and in wider policy conversations.",
  },
  {
    name: "Ejelue Mitchel Chiononso",
    position: "Vice President",
    bio: "Supports the president, coordinates directorates and drives internal strategy across PARC's programs.",
  },
];

export const ADMINISTRATION: Leader[] = [
  { name: "Ezeilo Eucharia Chinecherem", position: "General Secretary", bio: "Custodian of PARC's records, minutes and institutional memory." },
  { name: "Unigwe Batyah Ijeoma", position: "Assistant Secretary", bio: "Supports the secretariat and coordinates member communication." },
  { name: "Anselm Chiwetalu Benjamin", position: "Financial Secretary", bio: "Oversees financial planning, records and reporting for PARC's activities." },
  { name: "Emmanuel Confidence Nmesoma", position: "Treasurer", bio: "Stewards PARC's funds and ensures transparent, accountable finances." },
];

export const RESEARCH_COMMS: Leader[] = [
  { name: "Mbama Mmesoma Jennifer", position: "Director of Research & Policy I", bio: "Leads PARC's policy research agenda and publication pipeline." },
  { name: "Barnabas Ifechukwu Delight", position: "Director of Research & Policy II", bio: "Co-directs research, quality assurance and mentorship of contributors." },
  { name: "Emmanuel Ononigbo Chijindu", position: "Chief Editor", bio: "Oversees editorial standards across all PARC publications." },
  { name: "Okolichukwu Precious Munachi", position: "Assistant Chief Editor", bio: "Supports the editorial desk and prepares work for publication." },
  { name: "Nkemjika Blessing Mbachukwuma", position: "Public Relations Officer", bio: "Shapes PARC's public voice, partnerships and outward engagement." },
];

export const OPERATIONS: Leader[] = [
  { name: "Linus Kassy Paul", position: "Director of Human Resources", bio: "Coordinates membership, welfare and internal culture." },
  { name: "Okafor Amanda Chinecherem", position: "Director of Socials", bio: "Curates events, gatherings and PARC's community programs." },
  { name: "Chude Sophia Chisom", position: "Technical Head", bio: "Leads PARC's digital, technical and production infrastructure." },
  { name: "Okeke Chibuzor", position: "Assistant Technical Head", bio: "Supports technical operations, tooling and event production." },
];

export const CORE_VALUES = [
  { title: "Intellectual Rigor", body: "We hold ideas — including our own — to the highest evidentiary standard." },
  { title: "Integrity", body: "We pursue truth over comfort and credit over convenience." },
  { title: "Public Purpose", body: "Our work serves the common good, not private interest." },
  { title: "Collegiality", body: "We reason together, disagree well, and grow through dialogue." },
  { title: "Excellence", body: "We refuse the ordinary in research, thought and craft." },
  { title: "Leadership", body: "We prepare members to lead with humility and moral clarity." },
];

export const ACHIEVEMENTS = [
  { year: "2025", title: "PARC Annual Research Symposium", body: "Members presented original policy briefs to an audience of faculty, alumni and guests." },
  { year: "2025", title: "Outstanding Presenter Recognitions", body: "Multiple members recognised for excellence in weekly research presentations." },
  { year: "2024", title: "Community Policy Outreach", body: "Field engagement translating academic research into community-level insight." },
  { year: "2024", title: "Weekly Intellectual Sessions Milestone", body: "Sustained weekly convenings creating a consistent culture of rigorous debate." },
  { year: "2024", title: "Academic Distinctions", body: "PARC members recognised for excellence in coursework and scholarship." },
  { year: "2023", title: "Founding of PARC", body: "The Policy Analysis and Research Congress was established at COOU Igbariam." },
];

export const BLOG_POSTS = [
  {
    slug: "why-policy-analysis-matters",
    title: "Why Policy Analysis Matters for a Developing Economy",
    category: "Policy Analysis",
    date: "March 12, 2026",
    readingTime: "6 min read",
    author: "PARC Research Desk",
    excerpt: "Sound policy is the difference between growth and stagnation. Here is how disciplined analysis creates outcomes that endure.",
  },
  {
    slug: "weekly-recap-march-2026",
    title: "Weekly Recap: Fiscal Federalism and the Sub-national Question",
    category: "Weekly Meeting Recaps",
    date: "March 6, 2026",
    readingTime: "4 min read",
    author: "PARC Editorial",
    excerpt: "A summary of this week's session on revenue allocation, sub-national capacity and the reform agenda.",
  },
  {
    slug: "member-spotlight-mmesoma",
    title: "Member Spotlight: Mmesoma Jennifer on Building a Research Practice",
    category: "Member Spotlight",
    date: "February 22, 2026",
    readingTime: "5 min read",
    author: "PARC Editorial",
    excerpt: "Our Director of Research on discipline, curiosity and the habits that turn students into researchers.",
  },
  {
    slug: "economic-insights-inflation",
    title: "Economic Insights: Reading Nigeria's Inflation Signals",
    category: "Economic Insights",
    date: "February 10, 2026",
    readingTime: "7 min read",
    author: "PARC Economics Desk",
    excerpt: "What the latest inflation prints reveal about consumption, currency and household resilience.",
  },
  {
    slug: "leadership-message-first-quarter",
    title: "Leadership Message: A Note From the President",
    category: "Leadership Messages",
    date: "January 30, 2026",
    readingTime: "3 min read",
    author: "Chimezie Prince, President",
    excerpt: "Reflections on the quarter behind us and the standards we hold for the one ahead.",
  },
  {
    slug: "opinion-critical-thinking",
    title: "Opinion: Critical Thinking Is the Most Undervalued Skill in Nigerian Universities",
    category: "Opinion & Commentary",
    date: "January 18, 2026",
    readingTime: "5 min read",
    author: "PARC Contributor",
    excerpt: "A case for restoring critical thinking to the centre of higher education.",
  },
];

export const BLOG_CATEGORIES = [
  "Policy Analysis",
  "Economic Insights",
  "Research Highlights",
  "Weekly Meeting Recaps",
  "Member Spotlight",
  "Achievements",
  "Events",
  "Leadership Messages",
  "Opinion & Commentary",
  "Announcements",
];