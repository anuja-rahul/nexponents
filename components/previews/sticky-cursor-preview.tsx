"use client";

import { MenuIcon } from "lucide-react";
import StickyCursor from "../showcase/sticky-cursor/sticky-cursor";
import { useRef, forwardRef } from "react";

export default function StickyCursorPreview() {
  const stickyElement = useRef<HTMLDivElement>(null);
  const containerElement = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        className="h-[350px] w-[380px] sm:w-[480px] before:mix-blend-difference after:mix-blend-difference after:bg-white before:bg-white lg:w-[650px] place-items-center flex flex-col items-center justify-center"
        ref={containerElement}
      >
        <HeaderItem ref={stickyElement} />
      </div>
      <StickyCursor
        stickyElement={stickyElement}
        // containerElement={containerElement}
      />
    </div>
  );
}

const HeaderItem = forwardRef<HTMLDivElement, unknown>(
  function Header(props, ref) {
    return (
      <div
        className="h-fit w-fit  rounded-lg p-1 bg-transprent pointer-events-auto"
        ref={ref}
      >
        <MenuIcon className="before:mix-blend-difference  before:text-white" />
      </div>
    );
  }
);
