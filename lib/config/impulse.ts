/**
 * IMPULSE HACKATHON CONFIG
 * =========================
 * 
 * This file contains all configuration data for the Impulse hackathon page.
 * Impulse is IOSD's flagship hackathon event.
 */

import { StaticImageData } from "next/image"

// ============================================
// HERO SECTION
// ============================================
export const IMPULSE_HERO = {
  title: "IMPULSE",
  tagline: "IOSD's Flagship Hackathon",
  edition: "2026",
  date: "March 21-23, 2026",
  venue: "MAIT Campus, New Delhi",
  description: "48 hours of innovation, creation, and transformation. Where ideas meet execution.",
  registrationOpen: true,
  registerUrl: "#",
  rotatingWords: ["Innovate", "Create", "Build", "Transform", "Ship"],
}

// ============================================
// STATS SECTION
// ============================================
export const IMPULSE_STATS = [
  { value: 500, suffix: "+", label: "Participants" },
  { value: 48, suffix: "hrs", label: "Non-stop Hacking" },
  { value: 50, suffix: "+", label: "Projects Built" },
  { value: 100, suffix: "K", label: "Prize Pool" },
  { value: 25, suffix: "+", label: "Expert Mentors" },
  { value: 10, suffix: "+", label: "Sponsors" },
]

// ============================================
// TIMELINE SECTION
// ============================================
export const IMPULSE_TIMELINE = [
  {
    time: "Day 0 - Registration",
    title: "Registrations Open",
    description: "Early bird registrations begin. Form your teams of 2-4 members.",
    date: "March 1, 2026",
  },
  {
    time: "Day 1 - 9:00 AM",
    title: "Opening Ceremony",
    description: "Kickoff event with keynote speakers and problem statement reveal.",
    date: "March 21, 2026",
  },
  {
    time: "Day 1 - 10:00 AM",
    title: "Hacking Begins",
    description: "Teams start building their solutions. Mentors available throughout.",
    date: "March 21, 2026",
  },
  {
    time: "Day 1 - 6:00 PM",
    title: "Workshops & Sessions",
    description: "Technical workshops on AI/ML, Web3, and Cloud technologies.",
    date: "March 21, 2026",
  },
  {
    time: "Day 2 - All Day",
    title: "Building Phase",
    description: "Continue building with mentor check-ins and mini-challenges.",
    date: "March 22, 2026",
  },
  {
    time: "Day 3 - 10:00 AM",
    title: "Submissions Close",
    description: "Final code freeze. Submit your projects for evaluation.",
    date: "March 23, 2026",
  },
  {
    time: "Day 3 - 2:00 PM",
    title: "Presentations",
    description: "Top teams present their projects to the jury.",
    date: "March 23, 2026",
  },
  {
    time: "Day 3 - 5:00 PM",
    title: "Awards Ceremony",
    description: "Winners announced. Prizes distributed. Closing celebration.",
    date: "March 23, 2026",
  },
]

// ============================================
// TRACKS SECTION
// ============================================
export const IMPULSE_TRACKS = [
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    description: "Build intelligent solutions using cutting-edge AI and ML technologies.",
    icon: "🤖",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "web3",
    title: "Web3 & Blockchain",
    description: "Decentralized applications, smart contracts, and crypto innovations.",
    icon: "⛓️",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "fintech",
    title: "FinTech",
    description: "Revolutionize finance with innovative digital solutions.",
    icon: "💳",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description: "Solutions for environmental challenges and sustainable development.",
    icon: "🌱",
    color: "from-teal-500/20 to-green-500/20",
  },
  {
    id: "healthtech",
    title: "HealthTech",
    description: "Healthcare innovations improving lives through technology.",
    icon: "🏥",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: "open-innovation",
    title: "Open Innovation",
    description: "Build anything that creates impact. No boundaries.",
    icon: "🚀",
    color: "from-yellow-500/20 to-amber-500/20",
  },
]

// ============================================
// PRIZES SECTION
// ============================================
export const IMPULSE_PRIZES = {
  grandPrize: {
    title: "Grand Prize",
    amount: "₹50,000",
    description: "For the most innovative and impactful project overall.",
    perks: ["Cash Prize", "Internship Opportunities", "Mentorship Sessions", "Swag Kit"],
  },
  first: {
    title: "1st Runner Up",
    amount: "₹25,000",
    description: "Excellence in execution and technical implementation.",
    perks: ["Cash Prize", "Goodies", "Certificate"],
  },
  second: {
    title: "2nd Runner Up", 
    amount: "₹15,000",
    description: "Outstanding innovation and creativity.",
    perks: ["Cash Prize", "Goodies", "Certificate"],
  },
  trackWinners: {
    title: "Track Winners",
    amount: "₹5,000",
    description: "Best project in each hackathon track.",
    perks: ["Cash Prize per track", "Special Recognition"],
  },
  special: [
    { title: "Best UI/UX", amount: "₹3,000" },
    { title: "Best Use of AI", amount: "₹3,000" },
    { title: "Best First-Time Hackers", amount: "₹3,000" },
    { title: "Most Innovative", amount: "₹3,000" },
    { title: "People's Choice", amount: "₹2,000" },
    { title: "Best Pitch", amount: "₹2,000" },
  ],
}

// ============================================
// JUDGES & MENTORS
// ============================================
export interface Judge {
  name: string
  role: string
  company: string
  image: string // placeholder path
  linkedin?: string
}

export const IMPULSE_JUDGES: Judge[] = [
  {
    name: "Placeholder Judge 1",
    role: "Senior Engineer",
    company: "Google",
    image: "/impulse/judges/placeholder-1.jpg",
    linkedin: "#",
  },
  {
    name: "Placeholder Judge 2",
    role: "Product Manager",
    company: "Microsoft",
    image: "/impulse/judges/placeholder-2.jpg",
    linkedin: "#",
  },
  {
    name: "Placeholder Judge 3",
    role: "Tech Lead",
    company: "Amazon",
    image: "/impulse/judges/placeholder-3.jpg",
    linkedin: "#",
  },
  {
    name: "Placeholder Judge 4",
    role: "Founder & CEO",
    company: "Startup Inc",
    image: "/impulse/judges/placeholder-4.jpg",
    linkedin: "#",
  },
]

export const IMPULSE_MENTORS: Judge[] = [
  {
    name: "Mentor 1",
    role: "Full Stack Developer",
    company: "Meta",
    image: "/impulse/mentors/placeholder-1.jpg",
    linkedin: "#",
  },
  {
    name: "Mentor 2",
    role: "ML Engineer",
    company: "OpenAI",
    image: "/impulse/mentors/placeholder-2.jpg",
    linkedin: "#",
  },
  {
    name: "Mentor 3",
    role: "DevOps Lead",
    company: "AWS",
    image: "/impulse/mentors/placeholder-3.jpg",
    linkedin: "#",
  },
  {
    name: "Mentor 4",
    role: "Blockchain Dev",
    company: "Polygon",
    image: "/impulse/mentors/placeholder-4.jpg",
    linkedin: "#",
  },
  {
    name: "Mentor 5",
    role: "UI/UX Designer",
    company: "Figma",
    image: "/impulse/mentors/placeholder-5.jpg",
    linkedin: "#",
  },
  {
    name: "Mentor 6",
    role: "Data Scientist",
    company: "Netflix",
    image: "/impulse/mentors/placeholder-6.jpg",
    linkedin: "#",
  },
]

// ============================================
// SPONSORS
// ============================================
export interface Sponsor {
  name: string
  logo: string
  tier: "title" | "gold" | "silver" | "bronze" | "partner"
  website?: string
}

export const IMPULSE_SPONSORS: Sponsor[] = [
  { name: "Title Sponsor", logo: "/impulse/sponsors/placeholder-title.png", tier: "title", website: "#" },
  { name: "Gold Sponsor 1", logo: "/impulse/sponsors/placeholder-gold-1.png", tier: "gold", website: "#" },
  { name: "Gold Sponsor 2", logo: "/impulse/sponsors/placeholder-gold-2.png", tier: "gold", website: "#" },
  { name: "Silver Sponsor 1", logo: "/impulse/sponsors/placeholder-silver-1.png", tier: "silver", website: "#" },
  { name: "Silver Sponsor 2", logo: "/impulse/sponsors/placeholder-silver-2.png", tier: "silver", website: "#" },
  { name: "Silver Sponsor 3", logo: "/impulse/sponsors/placeholder-silver-3.png", tier: "silver", website: "#" },
  { name: "Bronze Sponsor 1", logo: "/impulse/sponsors/placeholder-bronze-1.png", tier: "bronze", website: "#" },
  { name: "Bronze Sponsor 2", logo: "/impulse/sponsors/placeholder-bronze-2.png", tier: "bronze", website: "#" },
  { name: "Partner 1", logo: "/impulse/sponsors/placeholder-partner-1.png", tier: "partner", website: "#" },
  { name: "Partner 2", logo: "/impulse/sponsors/placeholder-partner-2.png", tier: "partner", website: "#" },
]

// ============================================
// PREVIOUS WINNERS
// ============================================
export interface PastWinner {
  year: string
  teamName: string
  projectName: string
  description: string
  prize: string
  image: string
  members: string[]
}

export const IMPULSE_PAST_WINNERS: PastWinner[] = [
  {
    year: "2025",
    teamName: "Team Alpha",
    projectName: "EcoTrack",
    description: "AI-powered carbon footprint tracker with gamification elements.",
    prize: "Grand Prize",
    image: "/impulse/winners/placeholder-2025.jpg",
    members: ["Alice", "Bob", "Charlie", "Diana"],
  },
  {
    year: "2025",
    teamName: "HealthFirst",
    projectName: "MediConnect",
    description: "Decentralized health records with AI-based diagnosis assistance.",
    prize: "1st Runner Up",
    image: "/impulse/winners/placeholder-2025-2.jpg",
    members: ["Eve", "Frank", "Grace"],
  },
  {
    year: "2024",
    teamName: "ByteBuilders",
    projectName: "CodeCollab",
    description: "Real-time collaborative coding platform with AI pair programming.",
    prize: "Grand Prize",
    image: "/impulse/winners/placeholder-2024.jpg",
    members: ["Henry", "Iris", "Jack", "Kate"],
  },
]

// ============================================
// FAQ
// ============================================
export const IMPULSE_FAQ = [
  {
    question: "Who can participate in Impulse?",
    answer: "Impulse is open to all college students across India. Whether you're a fresher or a final year student, you're welcome to participate!",
  },
  {
    question: "What's the team size?",
    answer: "Teams can have 2-4 members. Solo participation is not allowed to encourage collaboration.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No! Impulse is completely free to participate. We'll also provide food, accommodation, and swag to all participants.",
  },
  {
    question: "Do I need to have prior hackathon experience?",
    answer: "Not at all! Impulse welcomes first-time hackers. We have dedicated tracks and mentors for beginners.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, student ID, and your best ideas! We'll provide the rest - food, workspace, WiFi, and mentorship.",
  },
  {
    question: "Can I start working on my project before the hackathon?",
    answer: "No. All work must be done during the 48-hour hackathon window. You can come with ideas, but no pre-written code.",
  },
  {
    question: "Will there be food and accommodation?",
    answer: "Yes! We provide meals throughout the event and have rest areas for overnight participants.",
  },
  {
    question: "What are the judging criteria?",
    answer: "Projects are judged on Innovation, Technical Complexity, Practicality, Design/UX, and Presentation.",
  },
]

// ============================================
// GALLERY / PAST EVENTS
// ============================================
export const IMPULSE_GALLERY = [
  { src: "/gallery/impulse-25/cover.jpg", alt: "Impulse 2025 Opening", caption: "Opening Ceremony 2025" },
  { src: "/gallery/impulse-25/hacking.jpg", alt: "Hacking in progress", caption: "48 Hours of Building" },
  { src: "/gallery/impulse-25/mentoring.jpg", alt: "Mentoring session", caption: "Expert Mentorship" },
  { src: "/gallery/impulse-25/presentation.jpg", alt: "Team presentation", caption: "Final Presentations" },
  { src: "/gallery/impulse-25/winners.jpg", alt: "Winners celebration", caption: "Winners Announcement" },
  { src: "/gallery/impulse-25/team.jpg", alt: "Team photo", caption: "The Impulse Family" },
]

// ============================================
// ADDITIONAL CONTENT
// ============================================
export const IMPULSE_CONTENT = {
  about: {
    title: "What is Impulse?",
    description: "Impulse is IOSD MAIT's flagship 48-hour hackathon where the brightest minds come together to build, innovate, and create solutions that matter. Since its inception, Impulse has been a launchpad for groundbreaking ideas and has helped shape the careers of hundreds of developers.",
    highlights: [
      "48 hours of non-stop innovation",
      "Industry expert mentorship",
      "Networking with top companies",
      "Exciting prizes and swag",
      "Food, fun, and memories",
    ],
  },
  theme: {
    title: "This Year's Theme",
    tagline: "Code for Tomorrow",
    description: "Build solutions that shape the future. From AI to sustainability, from fintech to healthcare - create technology that makes a difference.",
  },
}

// ============================================
// VELOCITY TEXT
// ============================================
export const IMPULSE_VELOCITY_TEXT = "HACK • BUILD • INNOVATE • SHIP • REPEAT •"
