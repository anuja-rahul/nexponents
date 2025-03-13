import RollingTextPreview from "@/components/previews/rolling-text-preview";

export type ComponentList = typeof componentList;
export type scrollMenuList = typeof scrollMenuList;

export const scrollMenuList = [
  {
    id: "getting-started",
    name: "Getting Started",
    elements: [
      {
        id: "introduction",
        name: "Introduction",
        path: "/components/introduction",
      },
      {
        id: "installation",
        name: "Installation",
        path: "/components/installation",
      },
    ],
  },
  {
    id: "text-animations",
    name: "Text Animations",
    elements: [
      {
        id: "rolling-text",
        name: "Rolling Text",
        path: "/components/rolling-text",
      },
    ],
  },
  {
    id: "components",
    name: "Components",
    elements: [
      {
        id: "call-to-action-link",
        name: "Call to Action Link",
        path: "/components/call-to-action-link",
      },
    ],
  },
];

export const componentList = [
  {
    id: "rolling-text",
    name: "Rolling Text",
    description: [
      "Text that rolls vertically on hover.",
      "can be used to add a more dynamic touch to your website.",
    ],
    preview: () => <RollingTextPreview />,
    code: `
import RollingText from "../rolling-text";

export default function RollingTextPreview() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <RollingText
        direction="up"
        className="text-foreground text-lg md:text-xl lg:text-4xl"
        lineHeight={0.9}
        text="Rolling Text Upwards"
        altText="Rolling Text is cooler"
      />
      <RollingText
        lineHeight={0.9}
        direction="down"
        className="text-lg md:text-xl lg:text-3xl text-foreground"
        text="Rolling Text Down"
      />
    </div>
  );
}

`,
  },
];
