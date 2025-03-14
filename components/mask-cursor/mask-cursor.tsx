"use client";

import useMousePosition from "@/app/utils/useMousePosition";
import clsx from "clsx";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface MaskCursorProps {
  maskText: string;
  bodyText: string;
  className?: string;
  cursorDefaultSize?: number;
  cursorHoverSize?: number;
}

export default function MaskCursor({
  maskText,
  bodyText,
  className,
  cursorDefaultSize = 40,
  cursorHoverSize = 150,
}: MaskCursorProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(containerRef);
  const size = isHovered ? cursorHoverSize : cursorDefaultSize;

  return (
    <main
      ref={containerRef}
      className={clsx(
        styles.main,
        className,
        "relative flex flex-col items-center justify-center overflow-hidden h-[55vh]"
      )}
    >
      <motion.div
        className={clsx(
          styles.mask,
          "flex flex-col items-center justify-center w-full h-full text-center text-[#afa18f] cursor-default"
        )}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          className="text-2xl md:text-3xl lg:text-4xl px-4 "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {maskText}
        </p>
      </motion.div>
      <div
        className={clsx(
          styles.body,
          "flex flex-col items-center justify-center w-full h-full text-center text-[#afa18f] cursor-default"
        )}
      >
        <p className="text-2xl md:text-3xl lg:text-4xl px-4">{bodyText}</p>
      </div>
    </main>
  );
}
