"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { personalInfo } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={personalInfo?.image_url}
              alt="Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cover"
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl flex flex-col"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold w-full">
          Hello, I'm {personalInfo?.name}.{" "}
        </span>
        <span>
          I'm a <span className="font-bold">{personalInfo?.role} </span>
        </span>
        <span>
          with <span className="font-bold">{personalInfo?.experience} </span> of
          experience.
        </span>
        <span>
          {" "}
          I enjoy building <span className="italic">site & apps </span>
        </span>

        <span>
          My focus is <span className="underline">React JS & Next JS</span>
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none scale-100 focus:scale-105 hover:scale-105 active:scale-[1.03] transition hover:bg-gray-950 hover:shadow-sm"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center justify-center rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-[1.03] transition hover:bg-gray-50 hover:shadow-sm borderBlack cursor-pointer dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-[0.15rem] transition" />
        </a>
        <div className="flex gap-2">
          <a
            className="bg-white p-4 flex items-center justify-center rounded-full text-gray-700 border borderBlack outline-none focus:scale-110 hover:scale-110 active:scale-[1.03] transition hover:bg-gray-50 hover:shadow-sm  cursor-pointer dark:bg-white/10 dark:text-white/60"
            href={
              personalInfo?.linkedin_link
                ? personalInfo?.linkedin_link
                : "https://linkedin.com"
            }
            target="_blank"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
          <a
            className="bg-white p-4 flex items-center justify-center rounded-full text-gray-700 border borderBlack outline-none focus:scale-110 hover:scale-110 active:scale-[1.03] transition hover:bg-gray-50 hover:shadow-sm cursor-pointer dark:bg-white/10 dark:text-white/60"
            href={
              personalInfo?.github_link
                ? personalInfo?.github_link
                : "https://github.com"
            }
            target="_blank"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
