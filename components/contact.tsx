"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-28 scroll-mt-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 text-center -mt-6 dark:text-white/80">
        You can contact me directly at{" "}
        <a href="mailto:xyz@gmail.com" className="underline">
          xyz@gmail.com
        </a>
        &nbsp;or through this form.
      </p>

      <form
        className="mt-10 flex flex-col items-center dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Contacted succesfully");
        }}
      >
        <input
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Email"
          className="h-14 w-full px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          maxLength={5000}
          className="h-52 w-full p-4 my-3 rounded-lg borderBlack  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
