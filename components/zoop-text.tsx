"use client";

import { motion } from "framer-motion";

interface ZoopTextProps {
  text: string;
  altText?: string;
  downString?: string;
  className?: string;
  direction?: "up" | "down";
  lineHeight?: number;
}

const DURATION = 0.25;
const STAGGER = 0.025;

export default function ZoopText({
  text,
  altText = text,
  className,
  direction = "up",
  lineHeight = 0.8,
}: ZoopTextProps) {
  return (
    <motion.div
      className={`relative block overflow-hidden text-3xl font-bold uppercase md:text-5xl ${className}`}
      initial="initial"
      style={{
        lineHeight: lineHeight,
      }}
      whileHover="hovered"
    >
      <div>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: { up: "-100%", down: "100%" }[direction],
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {altText.split("").map((char, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block"
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
              variants={{
                initial: {
                  y: { up: "100%", down: "-100%" }[direction],
                },
                hovered: {
                  y: 0,
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}
