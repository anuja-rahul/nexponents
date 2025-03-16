import { ChevronRightIcon, RocketIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface ActionButtonProps {
  text: string;
  src: string;
  className?: string;
}

function ActionButton({ text, src, className }: ActionButtonProps) {
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

export { ActionButton };
