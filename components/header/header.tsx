import { GithubIcon, SlackIcon, Star, TwitterIcon } from "lucide-react";
import DocSearchBar from "../doc-searchbar";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import NavDrawer from "./nav-drawer/nav-drawer";
import GitHubStars from "../github-stars";
// import Navbar from "./navbar";

export default function Header() {
  return (
    <>
      <header className="fixed backdrop-blur-[2px] top-0 w-screen bg-transparent min-h-20 md:min-h-16 flex flex-row flex-nowrap items-center justify-between px-8 z-50 border-b border-foreground/20">
        <div className="flex-row flex-nowrap gap-3 hidden md:flex">
          <Link
            href={"/"}
            className="flex flex-row flex-nowrap items-center justify-center font-bold tracking-tight gap-1 group text-sm md:text-base lg:text-lg"
          >
            <Image
              src={"/nexponent.webp"}
              alt="logo"
              className="rounded-full w-[30px] aspect-square"
              width={30}
              height={30}
            />
            Nexponent UI
            <Badge
              variant={"default"}
              className="h-4 p-2 rounded-sm items-center text-center text-balance duration-300 group-hover:bg-foreground/5 hover:bg-foreground/5 bg-foreground/10 text-foreground"
            >
              Preview
            </Badge>
          </Link>
          <Link
            href="/docs"
            className="lg:flex hidden opacity-80 hover:opacity-100 duration-300 hover:translate-y-[-1px] flex-nowrap items-center justify-center"
          >
            Docs
          </Link>
          <Link
            href="/docs/components"
            className="lg:flex hidden opacity-80 hover:opacity-100 duration-300 hover:translate-y-[-1px] flex-row flex-nowrap items-center justify-center"
          >
            Components
            <Badge
              variant={"default"}
              className="ml-2 h-4 p-1 rounded-sm items-center text-center text-balance hover:bg-orange-300 bg-orange-300 text-slate-800"
            >
              New
            </Badge>
          </Link>
        </div>
        {/* <div>NavBar</div> */}
        <div className="flex flex-row flex-nowrap items-center justify-between gap-1 lg:gap-3">
          <Link
            href="https://github.com/anuja-rahul/nexponents"
            target="_blank"
            className="hidden md:flex flex-row place-items-center items-center justify-around h-8 gap-1 w-44 xl:w-52 group rounded-lg bg-foreground/80 hover:bg-foreground duration-300 text-background"
          >
            <div className="bg-foreground rounded-full text-black p-[2px] dark:bg-white">
              <GithubIcon
                className="opacity-60 text-background"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>
            <span className="inline-block text-xs xl:text-sm">
              Star on Github
            </span>
            <Star
              className="opacity-60 group-hover:text-yellow-400 duration-300"
              size={16}
              strokeWidth={3}
              aria-hidden="true"
            />
            <span className="text-sm text-primary-foreground/60">
              <GitHubStars />
            </span>
          </Link>
          <DocSearchBar />
          <GithubIcon className="w-8 h-8 aspect-square opacity-70 hover:opacity-90 duration-300 rounded-lg hover:bg-slate-600/15 p-2" />
          <SlackIcon className="w-8 h-8 aspect-square opacity-70 hover:opacity-90 duration-300 rounded-lg hover:bg-slate-600/15 p-2" />
          <TwitterIcon className="w-8 h-8 aspect-square opacity-70 hover:opacity-90 duration-300 rounded-lg hover:bg-slate-600/15 p-2" />
          <ModeToggle className="border-none bg-transparent" />
        </div>
        {/* <Navbar className="md:hidden" /> */}
        <NavDrawer className="md:hidden" />
      </header>
    </>
  );
}
