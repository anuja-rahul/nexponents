import clsx from "clsx";
import Link from "next/link";

interface CreditLinkProps {
  text: string;
  className?: string;
  href: string;
  name: string;
}

export default function CreditLink({
  text,
  className,
  href,
  name,
}: CreditLinkProps) {
  return (
    <p className={clsx(className, "text-base font-[400] text-foreground")}>
      {text}{" "}
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 border-b border-foreground/70 hover:text-foreground/70 font-[500]"
      >
        {name}
      </Link>
    </p>
  );
}
