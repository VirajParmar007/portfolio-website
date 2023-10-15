"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      className="fixed bottom-5 right-5 bg-white border border-white border-opacity-40 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all active:scale-105 hover:sh dark:bg-gray-950 dark:shadow-gray-600 dark:shadow-md shadow-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
