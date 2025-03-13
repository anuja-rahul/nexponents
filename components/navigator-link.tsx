import clsx from "clsx";
import Link from "next/link";
import { JSX } from "react";

interface NavigatorLinkProps {
  href: string;
  text: string;
  className?: string;
  icon?: JSX.Element;
}

export default function NavigatorLink({
  href,
  text,
  className,
  icon,
}: NavigatorLinkProps) {
  return (
    <Link
      className={clsx(
        "text-foreground/50 hover:text-foreground duration-300 flex flex-row items-center justify-center h-fit w-fit flex-nowrap text-sm group font-[500]",
        className
      )}
      href={href}
    >
      {icon}
      <span className={icon ? "ml-2" : "ml-0"}>{text}</span>
    </Link>
  );
}
