"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface DrawSvgTextProps {
  textBefore?: string;
  text: string;
  textAfter?: string;
  className?: string;
  playOnce?: boolean;
}

export default function DrawSvgText({
  textBefore,
  text,
  textAfter,
  className,
  playOnce = true,
}: DrawSvgTextProps) {
  const defaultSvg = (
    <svg
      viewBox="0 0 235 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("absolute -top-2 -left-4 bottom-0 -right-0", className)}
      width="220"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        viewport={{ once: playOnce }}
        d="M185.5 6.5C131.5 6.5 34.5426 -13 5.50002 22C-7.36171 37.5 1.50002 63 142 63C254.04 63 243.016 20.4357 214 14.9503C166 5.87592 111.5 6.5 92 6.5"
        stroke="#FACC15"
        strokeWidth="1.5"
      />
    </svg>
  );
  return (
    <div className="grid w-full h-full bg-slate-900 text-yellow-100 place-content-center">
      <h1 className="text-center text-4xl">
        {textBefore ? textBefore : ""}{" "}
        <span className="relative">
          {text}
          {defaultSvg}
        </span>{" "}
        {textAfter ? textAfter : ""}
      </h1>
    </div>
  );
}
