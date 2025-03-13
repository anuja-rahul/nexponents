import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface MoveButtonProps {
  href: string;
  name: string;
}

export function NextButton({ href, name }: MoveButtonProps) {
  return (
    <Link href={href} className="flex flex-row items-center justify-center flex-nowrap rounded-md py-2 border border-foreground/20 bg-foreground/[0.03] text-sm font-[500] hover:bg-foreground/10 duration-300 px-3">
      {name}
      <ChevronRightIcon className="h-4 w-4 pt-1" />
    </Link>
  );
}

export function PrevButton({ href, name }: MoveButtonProps) {
  return (
    <Link href={href} className="flex flex-row items-center justify-center flex-nowrap rounded-md py-2 border border-foreground/20 bg-foreground/[0.03] text-sm font-[500] hover:bg-foreground/10 duration-300 px-3">
      <ChevronLeftIcon className="h-4 w-4 pt-1" />
      {name}
    </Link>
  );
}
