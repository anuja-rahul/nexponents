"use client";

import { useState } from "react";
import ScrollMenu from "@/components/scroll-menu";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

interface NavDrawerProps {
  className?: string;
}

export default function NavDrawer({ className }: NavDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" onClick={() => setOpen(true)}>
            <MenuIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[90vh] flex flex-col">
          {/* Drawer Header */}
          <DrawerHeader className="pl-4 flex flex-col items-center justify-center">
            <DrawerTitle className="group">
              <Link
                className="text-foreground/80 group-hover:text-foreground group-hover:font-[550] group-hover:border-b duration-300"
                href="/"
              >
                Nexponent UI
              </Link>
            </DrawerTitle>
            <DrawerDescription className="w-4/5 md:w-3/5 text-center text-balance text-foreground/80">
              Effortless, reusable, readily available, customizable and
              open-source UI components for Next.js built with Shadcn/ui,
              Tailwind CSS, Typescript, and Motion.
            </DrawerDescription>
          </DrawerHeader>

          {/* Scrollable Content */}
          <ScrollArea className="flex-grow overflow-y-auto px-4">
            <ScrollMenu onItemClick={() => setOpen(false)} />
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
