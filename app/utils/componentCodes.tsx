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

interface RollingTextProps {
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
}: RollingTextProps) {
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
    return <CallToActionLink text="Explore Components" src="#" />;
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
      <MagneticLinks href="#" className="w-16 p-2 aspect-square">
        <FacebookIcon />
      </MagneticLinks>
      <MagneticLinks href="#" className="w-16 p-2 aspect-square">
        <TwitterIcon />
      </MagneticLinks>
      <MagneticLinks href="#" className="w-16 p-2 aspect-square">
        <YoutubeIcon />
      </MagneticLinks>
      <MagneticLinks href="#" className="w-16 p-2 aspect-square">
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

export const maskCursorCode: componentCodesProps = {
  demo: `import MaskCursor from "../mask-cursor/mask-cursor";
  
  export default function MaskCursorPreview() {
    return (
      <MaskCursor
        maskText="Unlock the power of seamless UI components with Nexponents. Built for
            Next.js, our library ensures speed, flexibility, and ease of use—so
            you can focus on building, not styling."
        bodyText="Designed with ShadCN UI, Tailwind CSS, React, and Framer Motion,
            Nexponents offers a smooth and modern experience, bringing effortless
            customization to your Next.js projects."
      />
    );
  }
  `,
  code: [
    {
      sourceCode: `"use client";

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
          WebkitMaskPosition: \`\${x - size / 2}px \${y - size / 2}px\`,
          WebkitMaskSize: \`\${size}px\`,
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
  `,
      type: "tsx",
      key: "MaskCursorSource",
    },
    {
      sourceCode: `/* page.module.css */

.main {
  .mask p,
  .body p {
    width: 100%;
  }
  .mask span,
  .body span {
    color: #32adf0;
  }
  .mask {
    position: absolute;
    -webkit-mask-image: url("../../public/mask.svg");
    mask-image: url("../../public/mask.svg");
    background: #32adf0;
    mask-repeat: no-repeat;
    mask-size: 50px;
    color: black;
  }
}

`,
      type: "css",
      key: "MaskCursorCSS",
    },
    {
      sourceCode: `// useMousePosition.ts

import { useEffect, useState, useCallback } from "react";

export default function useMousePosition(
  containerRef?: React.RefObject<HTMLElement | null>
) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = useCallback(
    (e: MouseEvent) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      } else {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    },
    [containerRef]
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]);

  return mousePosition;
}
`,
      type: "ts",
      key: "UseMousePosition",
    },
  ],
};

export const staggeredGridCode: componentCodesProps = {
  demo: `import StaggeredGrid from "../showcase/staggered-grid/staggered-grid";

export default function StaggeredGridPreview() {
  return <StaggeredGrid gridHeight={12} gridWidth={30} />;
}








  `,
  code: [
    {
      sourceCode: `"use client";

import clsx from "clsx";
import anime from "animejs";

interface StaggeredGridProps {
  className?: string;
  gridWidth?: number;
  gridHeight?: number;
  amplitude?: number;
}

interface StaggeredDotProps {
  gridWidth: number;
  gridHeight: number;
  amplitude: number;
}
const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;
const AMPLITUDE = -15;

export default function StaggeredGrid({
  className,
  gridHeight = GRID_HEIGHT,
  gridWidth = GRID_WIDTH,
  amplitude = AMPLITUDE,
}: StaggeredGridProps) {
  return (
    <div
      className={clsx(
        "relative grid h-full w-full place-content-center px-4 bg-transparent",
        className
      )}
    >
      <DotGrid
        gridHeight={gridHeight}
        gridWidth={gridWidth}
        amplitude={amplitude}
      />
    </div>
  );
}

const DotGrid = ({ gridWidth, gridHeight, amplitude }: StaggeredDotProps) => {
  const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const index = Number(e.currentTarget.dataset.index);
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: amplitude, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [gridWidth, gridHeight],
        from: isNaN(index) ? undefined : index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={\`\${i}-\${j}\`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700
          to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: \`repeat(\${gridWidth}, 1fr)\` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

    `,
      type: "tsx",
      key: "StaggeredGridSource",
    },
  ],
};

export const bubbleHoverTextCode: componentCodesProps = {
  demo: `import BubbleHoverText from "../showcase/bubble-hover-text/bubble-hover-text";

  export default function BubbleHoverTextPreview() {
    return <BubbleHoverText text="Nexcomponent Bubble Text!" />;
  }








  `,
  code: [
    {
      sourceCode: `"use client";

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

`,
      type: "tsx",
      key: "BubbleHoverTextSource",
    },
    {
      sourceCode: `/* page.module.css */

.bubbleHoverText {
  transition:
    0.25s font-weight,
    0.25s color,
    0.25s font-stretch;
  font-weight: 100;
  font-stretch: 100%;
}

.bubbleHoverText:hover {
  font-weight: 900;
  color: var(--foreground);
  font-stretch: 125%;
}

/* right side */
.bubbleHoverText:hover + .bubbleHoverText {
  font-weight: 600;
  color: color-mix(in oklab, var(--foreground) 90%, transparent);
  font-stretch: 115%;
}
.bubbleHoverText:hover + .bubbleHoverText + .bubbleHoverText {
  font-weight: 400;
  color: color-mix(in oklab, var(--foreground) 85%, transparent);
  font-stretch: 105%;
}
.bubbleHoverText:hover
  + .bubbleHoverText
  + .bubbleHoverText
  + .bubbleHoverText {
  font-weight: 300;
  font-stretch: 100%;
}

/* left side */
.bubbleHoverText:has(+ .bubbleHoverText:hover) {
  font-weight: 600;
  color: color-mix(in oklab, var(--foreground) 90%, transparent);
  font-stretch: 115%;
}

.bubbleHoverText:has(+ .bubbleHoverText + .bubbleHoverText:hover) {
  font-weight: 400;
  color: color-mix(in oklab, var(--foreground) 85%, transparent);
  font-stretch: 105%;
}

.bubbleHoverText:has(
    + .bubbleHoverText + .bubbleHoverText + .bubbleHoverText:hover
  ) {
  font-weight: 300;
  font-stretch: 100%;
}

`,
      type: "css",
      key: "BubbleHoverTextStyleSource",
    },
  ],
};

export const gradientGlassBoxCode: componentCodesProps = {
  demo: `import GradientGlassBox from "../showcase/gradient-glass-box";
  
  export default function GradientGlassBoxPreview() {
    return (
      <GradientGlassBox>
        <div
          className="min-h-[150px] min-w-[300px] flex flex-col items-center justify-center
        place-items-center bg-slate-900 rounded-lg text-white"
        >
          Nexponent Gradient glass box
        </div>
      </GradientGlassBox>
    );
  }
  `,
  code: [
    {
      sourceCode: `
    import clsx from "clsx";
    import React from "react";

    interface GradientGlassBoxProps {
      children: React.ReactNode;
      className?: string;
    }

    export default function GradientGlassBox({
      className,
      children,
    }: GradientGlassBoxProps) {
      return (
        <div
          className={\`relative before:content-[""] before:absolute before:z-0 before:inset-0 before:translate-x-4 before:translate-y-4 before:scale-90
            before:bg-gradient-to-br before:from-violet-500/70 before:via-pink-500/70 before:to-indigo-500/70 before:blur-xl\`}
        >
          <div
            className={clsx(
              \`relative z-10 rounded-xl flex flex-col place-items-center w-full h-full items-center justify-center dark:bg-white/15 bg-black/15 p-2\`,
              className
            )}
          >
            {children}
          </div>
        </div>
      );
    }
    `,
      type: "tsx",
      key: "GradientGlassBoxSource",
    },
  ],
};

export const drawSvgTextCode: componentCodesProps = {
  demo: `import DrawSvgText from "../showcase/draw-svg-text/draw-svg-text";

  export default function DrawSvgTextPreview() {
    return (
      <div className="h-[350px] w-full max-w-[380px] sm:max-w-[480px] lg:max-w-full">
        <DrawSvgText text="Nexponent" textAfter={\`\\u00A0  UI\`} />
      </div>
    );
  }




  `,
  code: [
    {
      sourceCode: `"use client";

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
`,
      type: "tsx",
      key: "DrawSvgTextSource",
    },
  ],
};
