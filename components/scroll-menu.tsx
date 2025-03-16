"use client";

import { scrollMenuList } from "@/app/utils/content";
import clsx from "clsx";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { usePathname } from "next/navigation";

interface ScrollMenuProps {
  onItemClick?: () => void; // Optional prop
}

export default function ScrollMenu({ onItemClick }: ScrollMenuProps) {
  const pathname = usePathname();

  return (
    <>
      {scrollMenuList.map((section, i) => (
        <div
          key={i}
          className="gap-1 pl-6 flex flex-col items-start justify-start w-full mb-5"
        >
          <h1 className="font-[600] text-foreground px-2 m-0">
            {section.name}
          </h1>
          <div className="gap-[2px] flex flex-col items-start justify-start w-full">
            {section.elements.map((element, index) => {
              const isActive = pathname === element.path;

              return (
                <Link
                  href={element.path}
                  key={index}
                  {...(onItemClick && { onClick: onItemClick })} // Only add onClick if onItemClick is provided
                  className={clsx(
                    "text-sm text-foreground/75 font-[500] bg-background hover:bg-foreground/10 duration-200 py-[6px] p-2 w-full rounded-lg",
                    isActive && "bg-foreground/10 active"
                  )}
                >
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
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
