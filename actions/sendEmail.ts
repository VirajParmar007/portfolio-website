"use server";

import React from "react";
import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import { personalInfo } from "@/lib/data";

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData?.get("email");
  const message = formData?.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: personalInfo?.email_id,
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
