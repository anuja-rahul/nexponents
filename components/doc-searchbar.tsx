export default function DocSearchBar() {
  return (
    <div className="max-w-60 w-fit h-8 border-[1.5px] border-foreground/30 bg-background/70 rounded-lg flex flex-nowrap items-center justify-between px-4 opacity-70 hover:opacity-100 transition-opacity duration-200">
      <p className="text-foreground/90 text-sm flex flex-nowrap tracking-tight">
        Search documentation
      </p>
      <kbd className="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded-sm border border-foreground/60 bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/90">
        ⌘K
      </kbd>
    </div>
  );
}
