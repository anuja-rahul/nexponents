import { ChevronRightIcon } from "lucide-react";
import { ActionButton } from "./showcase/action-button";
import { Button } from "./ui/button";
import {
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";


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
          Effortless, reusable, readily available, customizable and open-source UI
          components for Next.js built with{" "}
          <span className="font-bold">
            {" "}
            Shadcn/ui, Tailwind CSS, Typescript,
          </span>{" "}
          and <span className="font-bold">Motion</span>.{" "}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center flex-nowrap gap-4">
          <ActionButton text="Explore Components" src="docs/components" />
          <Button
            variant={"default"}
            className="rounded-3xl group bg-background text-foreground hover:bg-background/60 border-b border-foreground/40"
          >
            Get Started{" "}
            <ChevronRightIcon className="size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1 text-foreground" />
          </Button>
        </div>
        <div className="flex flex-row items-center justify-center flex-nowrap gap-4">
          <SiNextdotjs size={25} />
          <SiShadcnui size={25} />
          <SiTailwindcss size={25} />
          <SiTypescript size={25} />
          <TbBrandFramerMotion size={25} />
          <SiReact size={25} />
        </div>
      </section>
    </>
  );
}
