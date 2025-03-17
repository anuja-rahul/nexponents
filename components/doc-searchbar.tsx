"use client";

import { useEffect, useState } from "react";
import { scrollMenuList } from "@/app/utils/content";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function DocSearchBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCommandItemClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="max-w-60 w-fit h-8 border-[1.5px] border-foreground/30 bg-background/70 rounded-lg flex flex-row flex-nowrap items-center justify-between px-4 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <p className="text-foreground/90 flex tracking-tight flex-nowrap flex-row text-xs lg:text-sm">
          <span className="flex lg:hidden">Search...</span>
          <span className="hidden lg:flex">Search documentation</span>
        </p>
        <kbd className="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded-sm border border-foreground/60 bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/90">
          ⌘ K
        </kbd>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] border-none">
          <DialogHeader>
            <DialogTitle>Nexponent Documentation</DialogTitle>
            <DialogDescription>
              Search the documentation for components, utilities, and more.
            </DialogDescription>
          </DialogHeader>
          <Command className="rounded-lg border shadow-md md:min-w-[450px] bg-transparent">
            <CommandInput
              className="z-10"
              placeholder="Type a command or search..."
            />
            <CommandList className="pt-5">
              <CommandEmpty>No results found.</CommandEmpty>
              {scrollMenuList.map((section, i) => (
                <CommandGroup key={i} heading={section.name}>
                  <div className="gap-1 pl-6 flex flex-col items-start justify-start w-full mb-5">
                    <div className="gap-[2px] flex flex-col items-start justify-start w-full">
                      {section.elements.map((element, index) => (
                        <CommandItem
                          key={index}
                          onSelect={handleCommandItemClick}
                        >
                          <Link href={element.path} passHref>
                            {element.name}
                            {element.new && (
                              <Badge
                                variant="default"
                                className="ml-2 h-4 p-1 rounded-sm items-center text-center text-balance hover:bg-orange-300 bg-orange-300 text-slate-800"
                              >
                                New
                              </Badge>
                            )}
                          </Link>
                        </CommandItem>
                      ))}
                    </div>
                  </div>
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
