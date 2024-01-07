import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import estatetool from "@/public/estateTool.png";
import pennyPal from "@/public/pennypal.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import profileImg from "@/public/InShot_20230310_224639208.jpg";

export const personalInfo = {
  name: "Viraj",
  full_name: "Viraj Parmar",
  role: "Front-end developer",
  experience: "a year",
  linkedin_link: "https://linkedin.com/in/viraj-parmar-731749188",
  github_link: "https://github.com/VirajParmar007",
  email_id: "viraj4442@gmail.com",
  image_url: profileImg,
} as const;
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
    title: "Bachelor of Engineering (Civil)",
    location: "Mumbai, India",
    description:
      "I graduated after 4 years of studying civil engineering from St. John Sollege of Engineering and Management (Palghar) a NAAC A Accredited",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
  {
    title: "Civil Engineer",
    location: "MS./ Surya Engineering and Construction. Mumbai, India",
    description:
      "Worked on an MCGM project, Proposed Demolition & Reconstruction of Cama Road Municipal School, Andheri West. A new construction of G+7 School Building where role was to plan the construction beforehand to ensure smooth flow of work. Oversee the construction work being done in the phases set earlier by us and to ensure the quality of the work. Managing the team of workers to utilize the time in an efficient manner. Maintaining & updating daily records of the work, preparing the bill on monthly basis.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Millicent Technlogies. Mumbai, India",
    description:
      "I am working as a front-end developer for 1+ years in Millicent technologies. Working on multiple projects as a team lead.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Eastatetool 5.0 Marketing",
    description:
      "I am working as a front end developer on this project for 1 years. It is a real estate marketing project.",
    tags: [
      "React",
      "JavaScript",
      "Axios",
      "Bootstrap",
      "zustand",
      "React query",
      "React hook form",
    ],
    imageUrl: estatetool,
  },
  {
    title: "PennyPal",
    description:
      "PennyPal is an Indian stock broker app developed in React JS and Typescript",
    tags: ["React", "TypeScript", "Tailwind", "Redux", "Socket.io"],
    imageUrl: pennyPal,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "Redux",
  "Framer Motion",
  "MongoDB",
  "Socket.io",
] as const;
