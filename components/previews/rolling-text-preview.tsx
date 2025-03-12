import ZoopText from "../zoop-text";

export default function RollingTextPreview() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ZoopText
        direction="up"
        className="text-foreground text-lg md:text-xl lg:text-4xl"
        lineHeight={0.9}
        text="Rolling Text Upwards"
        altText="Rolling Text is cooler"
      />
      <ZoopText
        lineHeight={0.9}
        direction="down"
        className="text-lg md:text-xl lg:text-3xl text-foreground"
        text="Rolling Text Down"
      />
    </div>
  );
}
