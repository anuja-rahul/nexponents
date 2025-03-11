import { GithubIcon, SlackIcon, Star, TwitterIcon } from "lucide-react";
import DocSearchBar from "../doc-searchbar";
import { ModeToggle } from "../mode-toggle";
import Navbar from "./navbar";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="fixed backdrop-blur-[2px] top-0 w-screen bg-transparent min-h-20 md:min-h-16 flex flex-row flex-nowrap items-center justify-between px-8 z-50 border-b border-foreground/20">
        <div className="flex-row flex-nowrap gap-4 hidden md:flex">
          <div>Logo</div>
          <Link
            href="/docs"
            className="lg:flex hidden opacity-80 hover:opacity-100 duration-300 hover:translate-y-[-1px]"
          >
            Docs
          </Link>
          <Link
            href="/components"
            className="lg:flex hidden opacity-80 hover:opacity-100 duration-300 hover:translate-y-[-1px]"
          >
            Components
          </Link>
        </div>
        {/* <div>NavBar</div> */}
        <div className="flex flex-row flex-nowrap items-center justify-between gap-1 md:gap-3">
          <Button className="hidden md:flex flex-row items-center justify-around h-8 gap-2 w-52 group rounded-lg bg-foreground/80 hover:bg-foreground duration-300">
            <GithubIcon
              className="opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="inline-block">Star on Github</span>
            <Star
              className="opacity-60 group-hover:text-yellow-400 duration-300"
              size={16}
              strokeWidth={3}
              aria-hidden="true"
            />
            <span className="text-xs text-primary-foreground/60">729</span>
          </Button>
          <DocSearchBar />
          <GithubIcon className="w-8 h-8 aspect-square opacity-70 hover:opacity-90 duration-300 rounded-lg hover:bg-slate-600/15 p-2" />
          <SlackIcon className="w-8 h-8 aspect-square opacity-70 hover:opacity-90 duration-300 rounded-lg hover:bg-slate-600/15 p-2" />
          <TwitterIcon className="w-8 h-8 aspect-square opacity-70 hover:opacity-90 duration-300 rounded-lg hover:bg-slate-600/15 p-2" />
          <ModeToggle className="border-none bg-transparent" />
        </div>
        <Navbar />
      </header>
    </>
  );
}
