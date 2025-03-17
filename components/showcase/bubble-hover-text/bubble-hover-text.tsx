"use client";

import clsx from "clsx";
import styles from "./page.module.css";

interface BubbleHoverTextProps {
  className?: string;
  text: string;
}

export default function BubbleHoverText({
  className,
  text,
}: BubbleHoverTextProps) {
  return (
    <div className={className}>
      <BubbleText text={text} />
    </div>
  );
}

const BubbleText = ({ text }: BubbleHoverTextProps) => {
  return (
    <h2 className="text-center text-2xl lg:text-5xl font-thin text-indigo-900 dark:text-indigo-300">
      {text.split("").map((char, id) => {
        return (
          <span key={id} className={clsx(styles.bubbleHoverText, "")}>
            {char}
          </span>
        );
      })}
    </h2>
  );
};
