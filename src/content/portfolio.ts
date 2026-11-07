// ============================================================================
// EDIT ME — this is the single source of truth for all portfolio content.
// Change text, links, projects, skills, etc. here. To add a future project,
// just append an object to the `projects` array. To add your photo, set
// `about.photo` to an imported image path (or keep null for the placeholder).
// ============================================================================
import profile from "../assets/profile.jpeg" 


export type ProjectMedia = {
  type: "image" | "video";
  src: string;
};
export type Project = {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  result?: string;
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

export type Testimonial={
  quote: string;
  name: string;
  role: string;
  company: string;
  link?: string;
}
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
    title: "Farika Farook — Full Stack & AI Product Developer",
    description:
      "Full stack and AI product developer, MSc Computer Science from Aalborg University (2026). I build web products with React, TypeScript, Python and .NET, including LLM pipelines, RAG chatbots and AI help desks.",
  },

  hero: {
    name: "Farika Farook",
    headline: "I build AI-powered web products that users enjoy and businesses can measure.",
    subline: "I start with the user's problem and the company's goal, then design and ship the full product: React frontend, .NET or Python backend, and the AI in between: LLM pipelines, RAG and speech. MSc Computer Science, Aalborg University.",
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
      label: "Email me",
      href: "mailto:farikamagjabeen2022@gmail.com?subject=Hi%20Farika%2C%20about%20a%20developer%20role",
    },
    phoneCta: {
      label: "Call me",
      href: "tel:+45 71531692",
    },
    proofLine:
      "Shipped features for Overseas Voyages, Side Stream and Fendous · Built SmartDesk (AI ticket sorting), an AI job-match agent and a RAG document chatbot",
    secondaryLinks: [
      { label: "GitHub", href: "https://github.com/Farika2022" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/farika-m-farook-7b57b0311/" },
      { label: "View work", href: "#projects" },
    ],
  },

    projects: [
    {
      title: "SmartDesk",
      description: "An AI help desk that sorts support tickets automatically.",
      problem:
        "Support teams spend 2 to 3 minutes reading and sorting every new ticket, so urgent problems wait behind small questions.",
      solution:
        "I designed and shipped a full-stack help desk where AI reads each new ticket and sets its category and priority. I built the React frontend and used AI tools to speed up the .NET backend.",
      result:
        "Sorting takes seconds instead of minutes. 15+ automated tests. Live on Vercel, Railway and Neon.",
      tags: ["React", "TypeScript", ".NET", "PostgreSQL", "LLM"],
      link: "https://smartdisk.vercel.app/",
      repo: "https://github.com/Farika2022/smartdesk",
      featured: true,
    },
    {
      title: "Overseas Voyages",
      description: "Live B2B travel platform for a real client.",
      problem:
        "A travel company needed a fast, clear website for 100+ international B2B clients, and new features without a big team.",
      solution:
        "I owned the frontend: started the site in Lovable to move fast, then built and changed features myself in React. I was the day-to-day contact, turning client requests into features.",
      result: "10+ features shipped and 20+ issues fixed in 6 months.",
      tags: ["React", "JavaScript", "CSS", "Client work"],
      link: "https://overseas-voyages.vercel.app/",
      repo: "https://github.com/Farika2022/overseas-voyages",
      featured: true,
    },
    {
      title: "AI Job Agent",
      description: "Upload a resume and a job post, and get a match score, skill gaps and interview questions.",
      problem:
        "Job seekers can't easily tell how well their resume fits a role, or which gaps to work on before they apply.",
      solution:
        "I built a 3-step LLM pipeline: one step builds a profile from the resume PDF, one pulls the requirements out of the job post, and one compares them. Every AI answer is checked against Pydantic schemas, and the AI is told never to invent experience.",
      result:
        "A 0–100% match score (required skills count more than preferred ones), matching and missing skills, 3 tips to close the gaps, and 5 interview questions for the role.",
      tags: ["Python", "LLM", "Groq", "Pydantic", "Streamlit"],
      repo: "https://github.com/Farika2022/AI-Projects/tree/main/job_agent",
    },
    {
      title: "RAG Chatbot",
      description: "Chat with your own PDF. Answers come only from what the document says.",
      problem:
        "General AI chatbots make things up when you ask about a specific document they have never seen.",
      solution:
        "I built a retrieval-augmented generation (RAG) app: the PDF is split into overlapping chunks, turned into embeddings and stored in a FAISS index. For each question, the 3 most relevant chunks are sent to Llama 3.3 70B on Groq together with the question.",
      result:
        "Answers are grounded in the document, and the bot says when the answer isn't there instead of guessing. Chat-style UI with message history.",
      tags: ["Python", "RAG", "FAISS", "Embeddings", "LLM"],
      repo: "https://github.com/Farika2022/AI-Projects/tree/main/RAG%20chatbot",
    },
    {
      title: "Guess the Spot",
      description: "A 3D geography game: spin the globe, pick a landmark, answer before the timer runs out.",
      problem:
        "Learning geography from lists and maps is boring, so people forget it fast.",
      solution:
        "I built a 3D globe game with 20 world landmarks and two modes (quick quiz and photo jigsaw). Photos load live from Wikipedia, and the game never repeats the same question or fact twice in a row.",
      result:
        "Live and playable in the browser. I solved real data problems, like Wikipedia photos that were logos or over 12,000 px wide.",
      tags: ["React", "TypeScript", "Three.js", "Tailwind", "API"],
      link: "https://guesswith.vercel.app",
      repo: "https://github.com/Farika2022/AI-Projects/tree/main/Guess%20the%20spot/guess-the-spot",
    },
    
    {
      title: "AI Public Space Redesign",
      description: "MSc thesis: an AI image editor for citizens, built in a team of 3.",
      problem:
        "Citizens find it hard to show city planners what they want a street or park to look like.",
      solution:
        "We built a web app where people edit photos of public spaces with AI, and tested 4 ways to give input: text, voice, inpainting, and drag-and-drop.",
      result: "A user study and 4 design recommendations for AI tools in citizen participation.",
      tags: ["React", "TypeScript", "Generative AI", "User study"],
      repo: "https://github.com/Farika2022/optimizinginput",
    },
    {
      title: "Voice Assistant",
      description: "Ask a question out loud and hear the AI answer back.",
      problem:
        "Typing isn't always practical, and voice demos often break on silence, short clips or API errors.",
      solution:
        "I chained speech-to-text (Whisper on Groq), an LLM answer, and text-to-speech (gTTS) in one app, with handling for empty or silent recordings, Whisper 'hearing' words in silence, rate limits, bad API keys and lost connections.",
      result:
        "A full voice-in, voice-out loop in the browser. If speech output fails, the text answer is still shown.",
      tags: ["Python", "Whisper", "LLM", "Speech", "Streamlit"],
      repo: "https://github.com/Farika2022/AI-Projects/tree/main/Voice%20assistant",
    },
    {
      title: "Help the Botanist",
      description: "Machine learning map that predicts where plants grow in Denmark.",
      problem:
        "Botanists and conservationists spend a lot of fieldwork time searching for where a plant species is likely to grow.",
      solution:
        "We combined plant sightings (GBIF) with soil, temperature and rain data, trained 4 machine learning models, and built a web app that shows a prediction heatmap for any of 300+ species.",
      result:
        "Compared 4 models (K-nearest neighbors, Random Forest, Gradient Boosting, Label Propagation). Best model reached about 80% accuracy.",
      tags: ["Python", "Machine Learning", "Flask", "Data"],
      repo: "https://github.com/Farika2022/Help-the-botanist",
    },
    {
      title: "AI Mini-Projects",
      description: "4 small apps I built to learn the core AI building blocks.",
      solution:
        "Feedback Analyzer: sorts customer reviews (one at a time or a whole CSV) into positive and negative with DistilBERT. Image Classifier: top 3 guesses for a photo with a Vision Transformer. Document Summarizer: splits long PDFs into chunks and summarizes them with DistilBART. Local Chatbot: LangChain with a model running on my own computer through Ollama.",
      tags: ["Python", "Hugging Face", "LangChain", "Ollama", "Streamlit"],
      repo: "https://github.com/Farika2022/AI-Projects",
    },
  ] as Project[],

  skills: [
  {
    category: "Frontend",
    skills: [
      { name: "React & TypeScript", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "HTML & CSS", level: 3 },
      { name: "UI / UX Design", level: 3 },
    ],
  },

  {
    category: "Backend & Engineering",
    skills: [
      { name: "Python", level: 3 },
      { name: "C# / .NET", level: 2 },
      { name: "REST API", level: 3 },
      { name: "SQL & PostgreSQL", level: 2 },
      { name: "Streamlit", level: 2 },
    ],
  },

  {
    category: "AI & Data",
    skills: [
      { name: "Generative AI & LLMs", level: 3 },
      { name: "LLM APIs & Structured Output (Groq, Pydantic)", level: 3 },
      { name: "Prompt Engineering", level: 3 },
      { name: "RAG & Vector Search (FAISS, embeddings)", level: 2 },
      { name: "Hugging Face Transformers", level: 2 },
      { name: "LangChain", level: 2 },
      { name: "Machine Learning", level: 2 },
      { name: "Power BI & Data Analysis", level: 2 },
    ],
  },

  {
    category: "Tools & Practices",
    skills: [
      { name: "Git & GitHub", level: 3 },
      { name: "Figma", level: 3 },
      { name: "GitHub Actions & CI/CD", level: 2 },
      { name: "Agile Development", level: 3 },
    ],
  },
] as SkillGroup[],
testimonials: [
    {
      quote:
        "She was quick to understand what was needed and did a solid job turning designs and ideas into working interfaces. I highly recommend her to anyone seeking a junior front-end developer.",
      name: "Elias Mo Brøndum Gad",
      role: "Managed Farika directly",
      company: "Sidestream",
      link: "https://www.linkedin.com/in/elias-mo-br%C3%B8ndum-gad-98207011a/",
    },
    {
      quote:
        "Despite being an intern, Farika demonstrated a professional level of creativity, problem-solving, and technical expertise. She translated complex requirements into intuitive designs that elevated the overall user experience.",
      name: "Arunima Srivastava Martinsen",
      role: "Founder & CEO",
      company: "Fendous Sustainable Solutions",
    },
    {
      quote:
        "She takes initiative, has great ideas, and is skilled at speaking to and teaching larger groups of students. It has truly been a success to have Farika on the team and as the primary developer of the strategy!",
      name: "Lars Dalsgaard Vinther Schmidt",
      role: "Managed Farika directly",
      company: "Aalborg University, Computer Science",
      link: "https://www.linkedin.com/in/larsvintherschmidt/",
    },
  ] as Testimonial[],
  
  experience: [
    
    {
      role: "Software Developer",
      org: "Overseas Voyagers · Singapore (Remote)",
      period: "Feb 2026 — August 2026",
      points: [
        " Own frontend delivery on a live B2B platform serving 100+ international clients across multiple markets, applying component-based architecture, responsive UI, and REST API integration.",
        " Act as day-to-day client contact and translate business needs into shipped features, using AI tools including Claude Code, GitHub Copilot, and Lovable as core working method.",
              ],
    },
    {
      role: "Software Developer Intern",
      org: "Side Stream · Copenhagen",
      period: "Sep 2025 — Nov 2025",
      points: [
       "Delivered a functional end-to-end frontend for a two-sided B2B marketplace supporting early launch with 5+ initial sellers and buyers, covering role-based signup, seller submission with admin review, product listing, buyer search, quantity and stock updates, and payment flow.",
       "Applied component-based architecture (Header, Sidebar, Navbar, product cards), responsive design, and hooks including useMemo and useNavigate, integrated with a PostgreSQL backend and resolved integration issues through structured debugging, pull request reviews, and pair discussion with the team."   ],
    },
    {
      role: "Tech Consultant Intern",
      org: "Fendous Sustainable Solution · Aalborg",
      period: "Jun 2025 — Aug 2025",
      points: [
        "Built and maintained sections of the Fendous.DK website in Danish and English (Help page, e-meet section, Copilot section) and created end-user tutorials through Storylane.",
        "Contributed to Fendous PLS (Private Learning Space) by researching and prototyping secure inclusion of external participants in Jitsi Meet-based online meetings, applying JavaScript for meeting security features."     ],
    },
    {
      role: "Student Coordinator (Student Assistant)",
      org: "Aalborg University (Computer Science Dept) · Aalborg",
      period: "Oct 2024 — August 2026",
      points: [
         "Communicate technical concepts clearly across international students, faculty, and administration",
         "Reduced repeated queries by around 30% for 50+ international students through structured guidance and documentation"  
      ],
    },
  ] as ExperienceItem[],

  about: {
    // Set to an imported image URL to show your photo. Leave null for placeholder.
    photo: profile,
    heading: "About me",
    paragraphs: [
     "I'm Farika, a developer and MSc Computer Science graduate from Aalborg University. I build web products with React and TypeScript, and add AI where it truly helps the user. Outside client work I build AI tools end to end: an agent that matches a resume to a job, a chatbot that answers only from your own PDF, and a voice assistant you can talk to.",

      "What makes me different: I start with people, not code. At Overseas Voyages I was the day-to-day contact for B2B clients and turned their requests into shipped features. At Aalborg University I led onboarding for international students. I like understanding what a business and its users need, then building it.",

      "I'm looking for full stack, frontend and AI product roles in Denmark and Europe, where I can learn fast from a strong team and give 100%.",
    ],
  },

  education: [
    {
      degree: "MSc Computer Science (IT)",
      school: "Aalborg University, Denmark",
      period: "Jun 2024 — Aug 2026",
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
    heading: "Hiring a full stack or AI product developer?",
    blurb:
      "I'm open to full stack, frontend, AI product engineer and junior AI engineer roles in Denmark and Europe. Call or email me, and I'll reply within one working day.",
    email: "farikamagjabeen2022@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/Farika2022" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/farika-m-farook-7b57b0311/" },
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
