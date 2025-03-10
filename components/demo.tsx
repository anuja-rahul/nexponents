import ZoopText from "./zoop-text";

export default function Demo() {
  return (
    <>
      <section
        id="Demo"
        className="w-screen min-h-screen flex flex-col items-center justify-center gap-6 relative"
      >
        <div
          className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24
  [background:radial-gradient(125%_125%_at_50%_90%,#fff_40%,#2e43df_100%)]
  dark:[background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#2e43df_100%)]"
        />
        <h1 className="text-foreground text-3xl md:text-7xl max-w-4/5 font-bold md:max-w-3/5 w-fit text-center text-balance tracking-tight">
          <ZoopText
            text="Examples"
            lineHeight={0.9}
            className="text-3xl md:text-7xl"
          />
        </h1>
        <h2 className="text-lg md:text-xl w-4/5 md:w-3/5 text-balance text-center">
          <ZoopText
            text="Coming Soon"
            altText="Almost Ready!"
            lineHeight={0.9}
            direction="down"
            className="text-lg md:text-xl flex flex-row items-center justify-center flex-nowrap"
          />
        </h2>
      </section>
    </>
  );
}
