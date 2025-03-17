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
      className={`relative before:content-[""] before:absolute before:z-0 before:inset-0 before:translate-x-4 before:translate-y-4 before:scale-90
        before:bg-gradient-to-br before:from-violet-500/70 before:via-pink-500/70 before:to-indigo-500/70 before:blur-xl`}
    >
      <div
        className={clsx(
          `relative z-10 rounded-xl flex flex-col place-items-center w-full h-full items-center justify-center dark:bg-white/15 bg-black/15 p-2`,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
