import { ChevronRightIcon } from "lucide-react";
import { ActionButton } from "./action-button";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <>
      <section
        id="Hero"
        className="w-screen min-h-screen flex flex-col items-center justify-center gap-6 relative"
      >
        <div
          className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24
          [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#2e43df_100%)]
          dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#2e43df_100%)]"
        />

        <h1 className="text-foreground text-4xl max-w-4/5 md:text-7xl font-bold md:max-w-3/5 w-fit text-center text-balance tracking-tighter">
          The Ultimate Next.js UI{" "}
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r
          from-indigo-400  to-pink-400"
          >
            Component
          </span>{" "}
          Library
        </h1>
        <h2 className="text-base md:text-xl w-4/5 md:w-3/5 text-balance text-center">
          Effortless, reusable, readily available, and customizable UI
          components for Next.js built with{" "}
          <span className="font-bold"> Shadcn/ui, Tailwind CSS, React,</span>{" "}
          and <span className="font-bold">Motion</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center flex-nowrap gap-4">
          <ActionButton text="Explore Components" src="/components" />
          <Button variant={"default"} className="rounded-3xl group">
            Get Started{" "}
            <ChevronRightIcon className="size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1 text-white dark:text-black" />
          </Button>
        </div>
      </section>
    </>
  );
}
