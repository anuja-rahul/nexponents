export interface componentCodesProps {
  demo: string;
  code: { sourceCode: string; type: string; key: string }[];
}

export const rollingTextCode: componentCodesProps = {
  demo: `
import RollingText from "../rolling-text";

export default function RollingTextPreview() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <RollingText
        direction="up"
        className="text-foreground text-lg md:text-xl lg:text-4xl"
        lineHeight={0.9}
        text="Rolling Text Upwards"
        altText="Rolling Text is cooler"
      />
      <RollingText
        lineHeight={0.9}
        direction="down"
        className="text-lg md:text-xl lg:text-3xl text-foreground"
        text="Rolling Text Down"
      />
    </div>
  );
}

`,
  code: [
    {
      key: "RollingTextSource",
      sourceCode: `
"use client";

import clsx from "clsx";
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

export default function RollingText({
  text,
  altText = text,
  className,
  direction = "up",
  lineHeight = 0.8,
}: ZoopTextProps) {
  return (
    <motion.div
      className={clsx(
        "relative block overflow-hidden text-3xl font-bold uppercase md:text-5xl",
        className
      )}
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
`,
      type: "tsx",
    },
  ],
};

export const callToActionLinkCode: componentCodesProps = {
  demo: `
import { CallToActionLink } from "../action-link";

export default function CallToActionLinkPreview() {
    return <CallToActionLink text="Explore Components" src="/components/call-to-action-link" />;
}










`,
  code: [
    {
      key: "CallToActionLinkSource",
      sourceCode: `
import { ChevronRightIcon, RocketIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface ActionLinkProps {
  text: string;
  src: string;
  className?: string;
}

function CallToActionLink({ text, src, className }: ActionLinkProps) {
  return (
    <Link className="w-auto max-w-56" href={src}>
      <div
        className={cn(
          "group rounded-full text-white dark:text-black transition-all ease-in hover:cursor-pointer bg-neutral-800/70 dark:bg-neutral-200/95 dark:hover:bg-neutral-200 hover:bg-neutral-800 relative soft-shadow py-1", className
        )}
      >
        <div className="flex flex-row flex-nowrap items-center justify-center transition ease-out duration-300 hover:text-neutral-300 w-auto px-3 py-1">
          <span
            className="text-sm flex flex-row flex-nowrap items-center justify-center w-auto group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r
          group-hover:from-indigo-300  group-hover:to-pink-300 duration-300 dark:group-hover:from-indigo-700  dark:group-hover:to-pink-700"
          >
            <div className="group relative flex items-center mr-8">
              <SparklesIcon className="size-5 text-yellow-400 inline-block transition-all duration-300 ease-in-out transform group-hover:scale-x-[-1] group-hover:opacity-0 absolute" />

              <RocketIcon className="size-5 text-green-400 opacity-0 group-hover:opacity-100 group-hover:scale-x-[1] scale-x-[-1] inline-block transition-all duration-300 ease-in-out absolute" />
            </div>
            {text}{" "}
          </span>
          <ChevronRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1 text-white dark:text-black" />
        </div>
      </div>
    </Link>
  );
}

export { CallToActionLink };

`,
      type: "tsx",
    },
  ],
};

export const magneticLinkCode: componentCodesProps = {
  demo: `
import { FacebookIcon, GithubIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import MagneticLinks from "../magnetic-links";

export default function MagneticLinkPreview() {
  return (
    <div className="flex flex-row items-center justify-center flex-wrap w-full h-full gap-3 md:gap-6">
      <MagneticLinks href="/" className="w-16 p-2 aspect-square">
        <FacebookIcon />
      </MagneticLinks>
      <MagneticLinks href="/" className="w-16 p-2 aspect-square">
        <TwitterIcon />
      </MagneticLinks>
      <MagneticLinks href="/" className="w-16 p-2 aspect-square">
        <YoutubeIcon />
      </MagneticLinks>
      <MagneticLinks href="/" className="w-16 p-2 aspect-square">
        <GithubIcon />
      </MagneticLinks>
    </div>
  );
}

  `,
  code: [
    {
      key: "MagneticLinkKey",
      sourceCode: `"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

interface MagneticLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function MagneticLinks({
  children,
  href,
  className,
}: MagneticLinkProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = element.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      className={className}
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link href={href} className="w-full h-full">{children}</Link>
    </motion.div>
  );
}

  `,
      type: "tsx",
    },
  ],
};
