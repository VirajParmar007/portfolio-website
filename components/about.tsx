"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Bachelor of Engineering (Civil)</span>, I
        decided to pursue my passion for programming. I learned{" "}
        <span className="font-medium">React JS, Next JS</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem. My core stack is{" "}
        <span className="font-medium">React JS, Next.js</span>.
      </p>

      <p className="mb-8">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and driving. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          Backend technologies like SQL, MySQL
        </span>
        .
      </p>
      <p>
        <span className="text-3xl font-semibold mb-8 text-center">
          "People say do what you love but I belive in loving what you do"
        </span>
      </p>
    </motion.section>
  );
}
