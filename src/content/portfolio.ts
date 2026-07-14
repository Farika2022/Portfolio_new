// ============================================================================
// EDIT ME — this is the single source of truth for all portfolio content.
// Change text, links, projects, skills, etc. here. To add a future project,
// just append an object to the `projects` array. To add your photo, set
// `about.photo` to an imported image path (or keep null for the placeholder).
// ============================================================================
import profile from "../assets/profile.jpeg" 
import weatherapp from "../assets/weather_app.mp4"
import e_commerce from "../assets/E-commerce.mp4"


export type ProjectMedia = {
  type: "image" | "video";
  src: string;
};
export type Project = {
  title: string;
  description: string;
  tags: string[];
  media?: ProjectMedia[];
  link?: string;
  repo?: string;
  featured?: boolean;
};

export type SkillGroup = {
  category: string;
  skills: { name: string; level: 1 | 2 | 3 }[]; // 1 = learning, 2 = solid, 3 = strong
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  detail?: string;
};

export const content = {
  meta: {
    name: "Farika Farook",
    title: "Farika Farook — Software Developer & Frontend Engineer",
    description:
      "MSc Computer Science (IT) at Aalborg University. Client-focused software developer building fast, thoughtful web experiences with React & TypeScript. Graduating June 2026.",
  },

  hero: {
    name: "Farika Farook",
    headline: "I build interfaces that think and feel.",
    subline:
      "MSc Computer Science (IT) · Aalborg University. Client-focused software developer turning complex ideas into fast, accessible, delightful web experiences. Graduating June 2026 and open to roles.",
    // The decorative code snippet shown in the hero (your real code).
    codeSnippet: `function buildExperience(idea) {
  const ui = design(idea, { warmth: true });
  return ui
    .accessible()
    .fast()
    .delightful();
}

// ship it →
deploy(buildExperience("portfolio"));`,
    primaryCta: {
      label: "Get in touch",
      href: "mailto:farikamagjabeen2022@gmail.com",
    },
    secondaryLinks: [
      { label: "GitHub", href: "https://github.com/Farika2022" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/farika-m-farook-7b57b0311/" },
      { label: "View work", href: "#projects" },
    ],
  },

  projects: [
    {
      title: "Overseas Voyagers",
      description:
        "A polished travel platform with rich itinerary browsing and a fast, responsive interface. Built and shipped end to end as a software developer, owning timelines and acting as the day-to-day point of contact for B2B clients.",
      tags: ["React", "JavaScript", "CSS", "HTML"],
      link: "https://overseas-voyages.vercel.app/",
      repo: "https://github.com/Farika2022/overseas-voyages",
      featured: true,
    },
    {
      title: "Generative AI for Public Space Redesign",
      description:
        "Multidisciplinary research project at Aalborg University coordinating researchers, designers, and developers. Exploring generative AI to reimagine public spaces, while running planning sessions and tracking milestones across parallel workstreams.",
      tags: ["Python", "Generative AI", "Machine Learning", "React"],
      repo: "https://github.com/Farika2022/optimizinginput",
    },
    {
      title: "Help the Botanist",
      description:
        "A machine-learning project at Aalborg University's Computer Science department. Owned end-to-end coordination from scoping through launch, maintaining quality, timelines, and documentation throughout.",
      tags: ["Python", "Machine Learning", "Flask"],
      repo: "https://github.com/Farika2022/Help-the-botanist",
    },
    {
      title: "Weather App",
      description:
        "I created a simple Weather App. It display the real-time temperature, wind and humidity of the selected city.",
      tags: ["HTML", "CSS"] ,
      repo: "https://github.com/Farika2022/HTML-CSS/tree/main/HTML%26CSS_%20Projects/Weather_App",
       media: [
    {
      type: "video",
      src: weatherapp,
    },
    
  ]
    },
     {
      title: "E-commerce website ",
      description:
        "I created a simple e-commerce website for dress. And I also included simple cart and payment pages to it.",
      tags: ["HTML", "CSS"],
      repo: "https://github.com/Farika2022/HTML-CSS/tree/main/HTML%26CSS_%20Projects/E-commerce",
       media: [
    {
      type: "video",
      src: e_commerce,
    },
  ]
    },
  ] as Project[],

  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "HTML & CSS", level: 3 },
        { name: "React & TypeScript", level: 2 },
        { name: "JavaScript & PHP", level: 2 },
        { name: "UI / UX Design", level: 2 },
      ],
    },
    {
      category: "Engineering",
      skills: [
        { name: "SQL & MySQL", level: 2 },
        { name: "REST API", level: 2 },
        { name: "Git", level: 3 },
        { name: "Agile Development", level: 3 },
      ],
    },
    {
      category: "Foundations",
      skills: [
        { name: "Python", level: 2 },
        { name: "Machine Learning & Generative AI", level: 2 },
        { name: "Excel & CRM", level: 2 },
        { name: "Data Structures & Algorithms", level: 2 },
      ],
    },
  ] as SkillGroup[],

  experience: [
    
    {
      role: "Software Developer",
      org: "Overseas Voyagers",
      period: "Feb 2026 — present",
      points: [
        "• Own frontend delivery on a live B2B platform serving 100+ international clients across multiple markets, applying component-based architecture, responsive UI, and REST API integration.",
        "• Act as day-to-day client contact and translate business needs into shipped features, using AI tools including Claude Code, GitHub Copilot, and Lovable as core working method.",
              ],
    },
    {
      role: "Front-End Developer Intern",
      org: "Side Stream · Copenhagen",
      period: "Sep 2025 — Nov 2025",
      points: [
       "• Delivered a functional end-to-end frontend for a two-sided B2B marketplace supporting early launch with 5+ initial sellers and buyers, covering role-based signup, seller submission with admin review, product listing, buyer search, quantity and stock updates, and payment flow.",
       "• Applied component-based architecture (Header, Sidebar, Navbar, product cards), responsive design, and hooks including useMemo and useNavigate, integrated with a PostgreSQL backend and resolved integration issues through structured debugging, pull request reviews, and pair discussion with the team."   ],
    },
    {
      role: "Tech Consultant Intern",
      org: "Fendous Sustainable Solution · Aalborg",
      period: "Jun 2025 — Aug 2025",
      points: [
        "• Built and maintained sections of the Fendous.DK website in Danish and English (Help page, e-meet section, Copilot section) and created end-user tutorials through Storylane.",
        "• Contributed to Fendous PLS (Private Learning Space) by researching and prototyping secure inclusion of external participants in Jitsi Meet-based online meetings, applying JavaScript for meeting security features."     ],
    },
    {
      role: "Student Coordinator (Student Assistant)",
      org: "Aalborg University — Computer Science Dept.",
      period: "Oct 2024 — present",
      points: [
         "• Communicate technical concepts clearly across international students, faculty, and administration",
         "• Reduced repeated queries by around 30% for 50+ international students through structured guidance and documentation"  
      ],
    },
  ] as ExperienceItem[],

  about: {
    // Set to an imported image URL to show your photo. Leave null for placeholder.
    photo: profile,
    heading: "About me",
    paragraphs: [
      "I'm Farika — a client-focused software developer and Computer Science (IT) student at Aalborg University, graduating in June 2026. I thrive at the intersection of technology and customer success.",
      "I bring hands-on experience delivering web technologies in real client environments, managing projects end-to-end, and ensuring every solution creates measurable value. I'm natural at building trusted client relationships, adapting quickly to new platforms, and communicating clearly across technical and non-technical stakeholders.",
      "Currently open to software / frontend engineering roles. If you're hiring, let's talk.",
    ],
  },

  education: [
    {
      degree: "MSc Computer Science (IT)",
      school: "Aalborg University, Denmark",
      period: "Jun 2024 — Jun 2026",
      detail:
        "Specializing in software development, machine intelligence, and human-computer interaction (HCI).",
    },
    {
      degree: "MSc Computer Science",
      school: "Mother Teresa University, India",
      period: "Jun 2019 — Apr 2021",
      detail: "CGPA 8.5/10 — First Class with Distinction.",
    },
    {
      degree: "BSc Computer Science",
      school: "Bharathidasan University, India",
      period: "Jun 2015 — Apr 2018",
      detail: "CGPA 7.5/10 — First Class.",
    },
  ] as EducationItem[],

  contact: {
    heading: "Let's build something.",
    blurb:
      "Reach me out through.",
    email: "farikamagjabeen2022@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/Farika2022" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/farika-m-farook-7b57b0311/" },
     // {
     //   label: "Overseas Voyagers",
     //   href: "https://overseas-voyages.vercel.app/",
   //   },
    ],
  },

  // GitHub username for the contribution-graph strip + links.
  github: {
    username: "Farika2022",
    url: "https://github.com/Farika2022",
  },
  linkedin: {
    username: "Farika Farook",
    url: "https://www.linkedin.com/in/farika-m-farook-7b57b0311/",
  },

  footer: {
    // Footer terminal easter egg — types out: $ whoami → <answer>
    whoami: "farika",
    note: "",
  },
};

export type Content = typeof content;
