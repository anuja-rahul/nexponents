import { ChevronLeftIcon, TriangleAlertIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function NotFoundSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-3">
      <div className="bg-foreground/10 rounded-full w-fit h-fit">
        <TriangleAlertIcon
          strokeWidth={2}
          className="h-10 w-10 text-foreground p-2"
        />
      </div>
      <h1 className="text-3xl font-[600]">Page not found</h1>
      <p className="text-base text-foreground/60">
        The page you are looking for doesn&apos;t exist.
      </p>
      <div className="flex flex-row items-center justify-center gap-3">
        <Link
          href={"/components"}
          className="rounded-xl text-sm font-[500] p-2 pr-3 group bg-foreground/10 text-foreground hover:bg-foreground/15 flex flex-row items-center justify-center flex-nowrap gap-0.5"
        >
          <ChevronLeftIcon className="size-3 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 text-foreground" />
          Go back
        </Link>
        <Link href={"/"}>
          <Button variant={"default"} className="rounded-xl">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
