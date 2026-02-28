import type TechItem from "./model/TechItem";

export const techStack: TechItem[] = [
    //FRONTEND ITEMS
    {
        category: "FRONTEND",
        name: "HTML5",
        icon: "/icons/html.svg",
        learning: false
    },
    {
        category: "FRONTEND",
        name: "CSS3",
        icon: "/icons/css.svg",
        learning: false
    },
    {
        category: "FRONTEND",
        name: "JavaScript",
        icon: "/icons/js.svg",
        learning: false
    },
    {
        category: "FRONTEND",
        name: "TypeScript",
        icon: "/icons/ts.svg",
        learning: true
    },
    {
        category: "FRONTEND",
        name: "Vue.js",
        icon: "/icons/vue.svg",
        learning: true
    },
    //BACKEND ITEMS
    {
        category: "BACKEND",
        name: "Kotlin",
        icon: "/icons/kotlin.svg",
        learning: false
    },
    {
        category: "BACKEND",
        name: "PostgreSQL",
        icon: "/icons/postgresql.svg",
        learning: false
    },
    {
        category: "BACKEND",
        name: "PHP",
        icon: "/icons/php-full.svg",
        learning: true
    },
    {
        category: "BACKEND",
        name: "Supabase",
        icon: "/icons/supabase.svg",
        learning: true
    },
    //TOOLS ITEMS
    {
        category: "TOOLS",
        name: "Git",
        icon: "/icons/git.svg",
        learning: false
    },
    {
        category: "TOOLS",
        name: "GitHub",
        icon: "/icons/github-light.svg",
        learning: false
    },
    {
        category: "TOOLS",
        name: "Vercel",
        icon: "/icons/vercel-light.svg",
        learning: false
    },
    {
        category: "TOOLS",
        name: "Docker",
        icon: "/icons/docker.svg",
        learning: true
    }
];