import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as Analytics } from "../_libs/vercel__analytics.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";



import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-9PjzaRs3.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Analytics, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const profile = "/assets/profile-BhPV1u7M.jpeg";
const content = {
  meta: {
    title: "Farika Farook — Software Developer & Frontend Engineer",
    description: "MSc Computer Science graduate from Aalborg University. Software developer building AI-powered, user-focused web experiences with React, TypeScript, Python, and C#/.NET. Graduated August 2026."
  },
  hero: {
    name: "Farika Farook",
    headline: "I build AI-powered web products that users enjoy and businesses can measure.",
    subline: "I start with the user's problem and the company's goal, then design and ship the full product: React frontend, .NET or Python backend, and the AI in between. MSc Computer Science, Aalborg University.",
    primaryCta: {
      label: "Email me",
      href: "mailto:farikamagjabeen2022@gmail.com?subject=Hi%20Farika%2C%20about%20a%20developer%20role"
    },
    phoneCta: {
      label: "Call me",
      href: "tel:+45 71531692"
    },
    proofLine: "Shipped features for Overseas Voyages, Side Stream and Fendous · Built SmartDesk, an AI help desk that sorts tickets in seconds"
  },
  projects: [
    {
      title: "SmartDesk",
      description: "An AI help desk that sorts support tickets automatically.",
      problem: "Support teams spend 2 to 3 minutes reading and sorting every new ticket, so urgent problems wait behind small questions.",
      solution: "I designed and shipped a full-stack help desk where AI reads each new ticket and sets its category and priority. I built the React frontend and used AI tools to speed up the .NET backend.",
      result: "Sorting takes seconds instead of minutes. 15+ automated tests. Live on Vercel, Render and Neon.",
      tags: ["React", "TypeScript", ".NET", "PostgreSQL", "LLM"],
      link: "https://smartdisk.vercel.app/",
      repo: "https://github.com/Farika2022/smartdesk",
      featured: true
    },
    {
      title: "Overseas Voyages",
      description: "Live B2B travel platform for a real client.",
      problem: "A travel company needed a fast, clear website for 100+ international B2B clients, and new features without a big team.",
      solution: "I owned the frontend: started the site in Lovable to move fast, then built and changed features myself in React. I was the day-to-day contact, turning client requests into features.",
      result: "10+ features shipped and 20+ issues fixed in 6 months.",
      tags: ["React", "JavaScript", "CSS", "Client work"],
      link: "https://overseas-voyages.vercel.app/",
      repo: "https://github.com/Farika2022/overseas-voyages",
      featured: true
    },
    {
      title: "AI Public Space Redesign",
      description: "MSc thesis: an AI image editor for citizens, built in a team of 3.",
      problem: "Citizens find it hard to show city planners what they want a street or park to look like.",
      solution: "We built a web app where people edit photos of public spaces with AI, and tested 4 ways to give input: text, voice, inpainting, and drag-and-drop.",
      result: "A user study and 4 design recommendations for AI tools in citizen participation.",
      tags: ["React", "TypeScript", "Generative AI", "User study"],
      repo: "https://github.com/Farika2022/optimizinginput"
    },
    {
      title: "Help the Botanist",
      description: "Machine learning map that predicts where plants grow in Denmark.",
      problem: "Botanists and conservationists spend a lot of fieldwork time searching for where a plant species is likely to grow.",
      solution: "We combined plant sightings (GBIF) with soil, temperature and rain data, trained 4 machine learning models, and built a web app that shows a prediction heatmap for any of 300+ species.",
      result: "Compared 4 models (K-nearest neighbors, Random Forest, Gradient Boosting, Label Propagation). Best model reached about 80% accuracy.",
      tags: ["Python", "Machine Learning", "Flask", "Data"],
      repo: "https://github.com/Farika2022/Help-the-botanist"
    }
  ],
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React & TypeScript", level: 3 },
        { name: "JavaScript", level: 3 },
        { name: "HTML & CSS", level: 3 },
        { name: "UI / UX Design", level: 3 }
      ]
    },
    {
      category: "Backend & Engineering",
      skills: [
        { name: "Python", level: 3 },
        { name: "C# / .NET", level: 2 },
        { name: "REST API", level: 3 },
        { name: "SQL & PostgreSQL", level: 2 }
      ]
    },
    {
      category: "AI & Data",
      skills: [
        { name: "Generative AI & LLMs", level: 3 },
        { name: "Machine Learning", level: 2 },
        { name: "Power BI & Data Analysis", level: 2 },
        { name: "Prompt Engineering", level: 3 }
      ]
    },
    {
      category: "Tools & Practices",
      skills: [
        { name: "Git & GitHub", level: 3 },
        { name: "Figma", level: 3 },
        { name: "GitHub Actions & CI/CD", level: 2 },
        { name: "Agile Development", level: 3 }
      ]
    }
  ],
  experience: [
    {
      role: "Software Developer",
      org: "Overseas Voyagers",
      period: "Feb 2026 — August 2026",
      points: [
        " Own frontend delivery on a live B2B platform serving 100+ international clients across multiple markets, applying component-based architecture, responsive UI, and REST API integration.",
        " Act as day-to-day client contact and translate business needs into shipped features, using AI tools including Claude Code, GitHub Copilot, and Lovable as core working method."
      ]
    },
    {
      role: "Software Developer Intern",
      org: "Side Stream · Copenhagen",
      period: "Sep 2025 — Nov 2025",
      points: [
        "Delivered a functional end-to-end frontend for a two-sided B2B marketplace supporting early launch with 5+ initial sellers and buyers, covering role-based signup, seller submission with admin review, product listing, buyer search, quantity and stock updates, and payment flow.",
        "Applied component-based architecture (Header, Sidebar, Navbar, product cards), responsive design, and hooks including useMemo and useNavigate, integrated with a PostgreSQL backend and resolved integration issues through structured debugging, pull request reviews, and pair discussion with the team."
      ]
    },
    {
      role: "Tech Consultant Intern",
      org: "Fendous Sustainable Solution · Aalborg",
      period: "Jun 2025 — Aug 2025",
      points: [
        "Built and maintained sections of the Fendous.DK website in Danish and English (Help page, e-meet section, Copilot section) and created end-user tutorials through Storylane.",
        "Contributed to Fendous PLS (Private Learning Space) by researching and prototyping secure inclusion of external participants in Jitsi Meet-based online meetings, applying JavaScript for meeting security features."
      ]
    },
    {
      role: "Student Coordinator (Student Assistant)",
      org: "Aalborg University — Computer Science Dept.",
      period: "Oct 2024 — August 2026",
      points: [
        "Communicate technical concepts clearly across international students, faculty, and administration",
        "Reduced repeated queries by around 30% for 50+ international students through structured guidance and documentation"
      ]
    }
  ],
  about: {
    // Set to an imported image URL to show your photo. Leave null for placeholder.
    photo: profile,
    paragraphs: [
      "I'm Farika — a software developer and MSc Computer Science graduate from Aalborg University. I enjoy building digital products where technology, AI, and user experience come together.",
      "I like taking an idea from understanding the problem and exploring solutions to designing, building, and refining the final experience. My background spans React, TypeScript, Python, C#/.NET, AI-powered applications, and Human-Computer Interaction.",
      "I'm currently open to software development and frontend engineering opportunities. If you're working on something interesting, let's talk."
    ]
  },
  education: [
    {
      degree: "MSc Computer Science (IT)",
      school: "Aalborg University, Denmark",
      period: "Jun 2024 — Aug 2026",
      detail: "Specializing in software development, machine intelligence, and human-computer interaction (HCI)."
    },
    {
      degree: "MSc Computer Science",
      school: "Mother Teresa University, India",
      period: "Jun 2019 — Apr 2021",
      detail: "CGPA 8.5/10 — First Class with Distinction."
    },
    {
      degree: "BSc Computer Science",
      school: "Bharathidasan University, India",
      period: "Jun 2015 — Apr 2018",
      detail: "CGPA 7.5/10 — First Class."
    }
  ],
  contact: {
    heading: "Let's build something.",
    blurb: "Reach me out through.",
    email: "farikamagjabeen2022@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/Farika2022" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/farika-m-farook-7b57b0311/" }
      // {
      //   label: "Overseas Voyagers",
      //   href: "https://overseas-voyages.vercel.app/",
      //   },
    ]
  },
  // GitHub username for the contribution-graph strip + links.
  github: {
    url: "https://github.com/Farika2022"
  },
  linkedin: {
    url: "https://www.linkedin.com/in/farika-m-farook-7b57b0311/"
  },
  footer: {
    // Footer terminal easter egg — types out: $ whoami → <answer>
    whoami: "farika",
    note: ""
  }
};
const $$splitComponentImporter = () => import("./index-BWR6FMWO.mjs");
const Route = createFileRoute()({
  head: () => ({
    meta: [{
      title: content.meta.title
    }, {
      name: "description",
      content: content.meta.description
    }, {
      property: "og:title",
      content: content.meta.title
    }, {
      property: "og:description",
      content: content.meta.description
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  content as c,
  router as r
};
