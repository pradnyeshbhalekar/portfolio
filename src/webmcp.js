import { scroller } from "react-scroll";
import contactData from "./assets/info/contact.json";
import projectData from "./assets/info/project.json";
import experienceData from "./assets/info/experience.json";
import skillsData from "./assets/info/skills.json";

// WebMCP (https://webmachinelearning.github.io/webmcp/) lets browser agents call page tools directly.
// document.modelContext is the spec; navigator.modelContext is the older shape some browsers/polyfills expose.
const modelContext = document.modelContext ?? navigator.modelContext;

export const SECTIONS = ["about", "projects", "skills", "experience"];

const readOnly = { readOnlyHint: true };
const absoluteUrl = (href) => new URL(href, window.location.origin).href;

// Same scroll the navbar links use.
export function scrollToSection(id) {
  scroller.scrollTo(id, { smooth: true, duration: 500, offset: -80 });
}

async function register(tool, signal) {
  try {
    await modelContext.registerTool(tool, { signal });
  } catch (err) {
    // An abort means we unregistered on purpose (e.g. unmount) before registration finished.
    if (!signal.aborted) console.warn(`WebMCP: could not register "${tool.name}"`, err);
  }
}

// Registers tools with the browser's agent; the returned cleanup unregisters them.
export function registerTools(tools) {
  if (!modelContext?.registerTool) return () => {};
  const controller = new AbortController();
  tools.forEach((tool) => register(tool, controller.signal));
  return () => controller.abort();
}

export const portfolioTools = [
  {
    name: "get_profile",
    title: "Get profile",
    description:
      "Get Pradnyesh Bhalekar's profile: a short bio, current role, and contact links (email, resume PDF, GitHub, LinkedIn, Instagram, X).",
    inputSchema: { type: "object", properties: {} },
    annotations: readOnly,
    execute: async () => {
      const current = experienceData.find((exp) => /present/i.test(exp.duration));
      return {
        name: "Pradnyesh Bhalekar",
        summary:
          "Developer who enjoys building things from zero to a usable product, focused on practical tools and platforms that solve real problems.",
        currentRole: current ? { role: current.role, company: current.company } : null,
        contact: Object.fromEntries(contactData.map(({ label, href }) => [label.toLowerCase(), absoluteUrl(href)])),
      };
    },
  },
  {
    name: "list_projects",
    title: "List projects",
    description:
      'List the projects on this portfolio with descriptions, tech stack, and live/source links. Optionally filter by a technology, e.g. "React" or "Flask".',
    inputSchema: {
      type: "object",
      properties: {
        tech: {
          type: "string",
          description: "Only return projects whose tech stack includes this technology (case-insensitive).",
        },
      },
    },
    annotations: readOnly,
    execute: async ({ tech } = {}) => {
      const needle = tech?.trim().toLowerCase();
      const projects = projectData
        .filter((p) => !needle || p.techstack.some((t) => t.toLowerCase().includes(needle)))
        .map(({ title, description, techstack, live, github, github2, pypi }) => ({
          title,
          description,
          techstack,
          live: live || null,
          source: [github, github2].filter(Boolean),
          ...(pypi && { pypi }),
        }));
      return { projects };
    },
  },
  {
    name: "get_experience",
    title: "Get work experience",
    description: "Get Pradnyesh Bhalekar's work experience: company, role, dates, highlights, and tech stack for each position.",
    inputSchema: { type: "object", properties: {} },
    annotations: readOnly,
    execute: async () => ({
      experience: experienceData.map((entry) => {
        const { _id, ...exp } = entry;
        return exp;
      }),
    }),
  },
  {
    name: "get_skills",
    title: "Get skills",
    description: "Get Pradnyesh Bhalekar's skills grouped by category (languages, frameworks, databases, tools).",
    inputSchema: { type: "object", properties: {} },
    annotations: readOnly,
    execute: async () => ({ skills: skillsData }),
  },
  {
    name: "scroll_to_section",
    title: "Scroll to section",
    description: "Scroll the page to one of its sections so the user can see it.",
    inputSchema: {
      type: "object",
      properties: { section: { type: "string", enum: SECTIONS } },
      required: ["section"],
    },
    execute: async ({ section }) => {
      if (!SECTIONS.includes(section)) {
        return { error: `Unknown section "${section}". Use one of: ${SECTIONS.join(", ")}.` };
      }
      scrollToSection(section);
      return { scrolledTo: section };
    },
  },
];
