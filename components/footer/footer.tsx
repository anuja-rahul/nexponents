import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-screen min-h-16 bg-background border-t border-foreground/20 flex flex-row items-center
    px-8 justify-start flex-nowrap text-sm text-foreground/70"
    >
      Brought to you by{" "}
      <Link
        href="https://www.github.com/anuja-rahul"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 border-b border-foreground/70"
      >
        anuja-rahul.
      </Link>
    </footer>
  );
}
