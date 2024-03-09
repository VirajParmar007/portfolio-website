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
      "I graduated after completing a four-year course in civil engineering from St. John College of Engineering and Management in Palghar. The institution holds a prestigious NAAC A Accreditation.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
  {
    title: "Civil Engineer",
    location: "MS./ Surya Engineering and Construction. Mumbai, India",
    description:
      "I was actively involved in a significant project with the Municipal Corporation of Greater Mumbai (MCGM), Proposed Demolition & Reconstruction of Cama Road Municipal School, Andheri West. A new construction of G+7 School Building where my responsibilities encompassed the planning of construction beforehand to ensure smooth flow of work. Oversee the construction work being done in the phases set earlier by us and to ensure the quality of the work. Managing the team of workers to utilize the time in an efficient manner. Maintaining & updating daily records of the work, preparing the bill on monthly basis.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Web Developer",
    location: "Millicent Technlogies. Mumbai, India",
    description:
      "I have been working as a fullstack developer at Millicent Technologies for over a year, where my role extends beyond development to include leadership responsibilities within a team. As a team lead, I am actively involved in managing multiple projects, overseeing the development process, and ensuring timely project delivery. My responsibilities also encompass project estimation, where I play a pivotal role in assessing project scope, timelines, and resource requirements. This involves collaborating closely with team members to establish realistic goals and milestones. I am committed to maintaining a high standard of project management, ensuring that the team works efficiently and meets the deadlines as estimated.",
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
    title: "PennyPal trading App",
    description:
      "PennyPal is user friendly investment & trading application designed to empower your financial journey.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "TradingView",
      "Redux",
      "Socket.io",
    ],
    imageUrl: pennyPal,
  },
  {
    title: "Eastatetool 5.0 Marketing",
    description:
      "I am working as a front end developer on this project for 1 years. It is a real estate marketing project.",
    tags: [
      "React",
      "JavaScript",
      "Axios",
      "Bootstrap",
      "Zustand",
      "React query",
      "React hook form",
    ],
    imageUrl: estatetool,
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
  "TradingView's charting library",
  "MongoDB",
  "Socket.io",
] as const;
