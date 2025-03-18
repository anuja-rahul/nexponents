import DrawSvgText from "../showcase/draw-svg-text/draw-svg-text";

export default function DrawSvgTextPreview() {
  return (
    <div className="h-[350px] w-full max-w-[380px] sm:max-w-[480px] lg:max-w-full">
      <DrawSvgText text="Nexponent" textAfter={`\u00A0  UI`} />
    </div>
  );
}
