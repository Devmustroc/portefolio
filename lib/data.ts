import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import skinshine from "@/public/skinshine.png";
import bashTerminal from "@/public/bashTermina.png";
import airHBNB from "@/public/airHBNB.jpg";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated FullStack Developer",
        location: "Lille France",
        description:
            "I graduated after 2 years of studying.I build strong IT knowledge and skills. I also learned how to work in a team.",
        icon: React.createElement(LuGraduationCap),
        date: "2022-2024",
    },
    {
        title: "OS Developer from Apple Foundation",
        location: "Lille France",
        description:
            "I trained for 2 month to become an OS developer and I learned Swift and SwiftUI.",
        icon: React.createElement(CgWorkAlt),
        date: "2022",
    },
    {
        title: "Digital Marketing Training",
        location: "Lille France",
        description:
            "I trained for 3 month to become a digital marketer and I learned how to use Google Ads and Google Analytics.",
        icon: React.createElement(FaReact),
        date: "2022",
    },
] as const;

export const projectsData = [
    {
        title: "E-commerce SkinShine",
        description:
            "I build for my project for the first year of my studies. It's an e-commerce website for a cosmetic brand.",
        tags: ["Angular", "TypeScript", "Node", "NX", "Npm", "MonogDB"],
        imageUrl: skinshine,
    },
    {
        title: "Simple Shell in C",
        description:
            "With my colleague we build a simple shell in C. It's a school project for the first year of the fundamentals of IT.",
        tags: ["C", "Linux", "Vi", "GCC", "GNU", "Makefile"],
        imageUrl: bashTerminal,
    },
    {
        title: "Airbnb Clone",
        description:
            "for the project of the first year of my studies, I build an Airbnb clone. It's a website where you can rent a house or rent your house.",
        tags: ["HTML", "CSS", "MySQL", "Python", "Flask", "Jinja2", "JavaScript", "C"],
        imageUrl: airHBNB,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "Scss",
    "JavaScript",
    "Python",
    "C",
    "linux",
    "React",
    "linux",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "Express",
    "Python",
    "Flask",
    "SQL",
    "mySQL",
    "PostgreSQL",
    "Nginx",
] as const;
