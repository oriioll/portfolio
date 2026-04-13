import type Project from "./model/Project.ts";

export const PROJECTS: Project[] = [
  {
    titleKey: "projects.cineflic.title",
    descKey: "projects.cineflic.desc",
    image: "/mockups/cineflic.webp",
    stack: [
      {
        category: "FRONTEND",
        name: "Vue.js",
        icon: "/icons/vue.svg",
        learning: true,
      },
      {
        category: "FRONTEND",
        name: "TypeScript",
        icon: "/icons/ts.svg",
        learning: true,
      },
      {
        category: "BACKEND",
        name: "Supabase",
        icon: "/icons/supabase.svg",
        learning: true,
      },
    ],
    demoUrl: "https://mycineflic.vercel.app",
    githubUrl: "https://github.com/oriioll/cineflic",
    status: "Finished",
  },
  {
    titleKey: "projects.financeApp.title",
    descKey: "projects.financeApp.desc",
    image: "/mockups/mockupFinanceApp.webp",
    stack: [
      {
        category: "BACKEND",
        name: "Kotlin",
        icon: "/icons/kotlin.svg",
        learning: false,
      },
      {
        category: "FRONTEND",
        name: "Android Studio",
        icon: "/icons/android.svg",
        learning: false,
      },
      {
        category: "BACKEND",
        name: "Supabase",
        icon: "/icons/supabase.svg",
        learning: true,
      },
    ],
    demoUrl: "https://appfinance-alpha.vercel.app/",
    githubUrl: "https://github.com/oriioll/financeApp",
    status: "Active dev",
  },
  {
    titleKey: "projects.loomi.title",
    descKey: "projects.loomi.desc",
    image: "/mockups/mockupLoomi.webp",
    stack: [
      {
        category: "FRONTEND",
        name: "Vue.js",
        icon: "/icons/vue.svg",
        learning: true,
      },
      {
        category: "FRONTEND",
        name: "TypeScript",
        icon: "/icons/ts.svg",
        learning: true,
      },
    ],
    demoUrl: "https://apploomi.vercel.app",
    githubUrl: "https://github.com/oriioll/loomi",
    status: "Active dev",
  },
  {
    titleKey: "projects.shorty.title",
    descKey: "projects.shorty.desc",
    image: "/mockups/mockupShorty.webp",
    stack: [
      {
        category: "FRONTEND",
        name: "Vue.js",
        icon: "/icons/vue.svg",
        learning: true,
      },
      {
        category: "FRONTEND",
        name: "TypeScript",
        icon: "/icons/ts.svg",
        learning: true,
      },
    ],
    demoUrl: "https://appshorty.vercel.app",
    githubUrl: "https://github.com/oriioll/shorty",
    status: "Finished",
  },
  {
    titleKey: "projects.bocaoProject.title",
    descKey: "projects.bocaoProject.desc",
    image: "/mockups/mockupBocao.webp",
    stack: [
      {
        category: "FRONTEND",
        name: "HTML5",
        icon: "/icons/html.svg",
        learning: false,
      },
      {
        category: "FRONTEND",
        name: "CSS3",
        icon: "/icons/css.svg",
        learning: false,
      },
      {
        category: "FRONTEND",
        name: "JavaScript",
        icon: "/icons/js.svg",
        learning: false,
      },
    ],
    demoUrl: "https://oriioll.github.io/bocao-project/",
    githubUrl: "https://github.com/oriioll/bocao-project",
    status: "Finished",
  }
];
