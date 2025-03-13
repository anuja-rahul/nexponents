import RollingTextPreview from "@/components/previews/rolling-text-preview";
import { rollingTextCode } from "./componentCodes";
import CreditLink from "@/components/credit-link";

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
        new: false,
      },
      {
        id: "installation",
        name: "Installation",
        path: "/components/installation",
        new: false,
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
        new: true,
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
        new: true,
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
    navigator: [
      {
        title: "On This Page",
        content: [
          { name: "Installation", subtitles: [] },
          { name: "Props", subtitles: [{ name: "RollingText" }] },
        ],
      },
    ],
    demo: rollingTextCode.demo,
    code: rollingTextCode.code,
    props: [
      {
        id: "RollingText",
        name: "Rolling text",
        content: [
          {
            name: "text",
            type: "String",
            default: "-",
            description: "The text to roll and display.",
          },
          {
            name: "altText",
            type: "String",
            default: "-",
            description: "Alternative text to display when the text is rolled.",
          },
          {
            name: "className",
            type: "String",
            default: "-",
            description: "Additional classes to apply to the component.",
          },
          {
            name: "direction",
            type: "String ( up | down )",
            default: "up",
            description: "The direction in which the text should roll.",
          },
          {
            name: "lineHeight",
            type: "Number ( 0 <= x <= 1 )",
            default: "0.8",
            description: "The line height of the text.",
          },
        ],
      },
    ],
    credits: [
      {
        data: (
          <CreditLink
            text="Credit to"
            name="Anuja Gunasinghe"
            href="https://www.github.com/anuja-rahul"
          />
        ),
      },
    ],
  },
];
