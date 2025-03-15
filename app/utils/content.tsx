import RollingTextPreview from "@/components/previews/rolling-text-preview";
import {
  callToActionLinkCode,
  magneticLinkCode,
  maskCursorCode,
  rollingTextCode,
} from "./componentCodes";
import CreditLink from "@/components/credit-link";
import CallToActionLinkPreview from "@/components/previews/call-to-action-button-preview";
import MagneticLinkPreview from "@/components/previews/magnetic-link-preview";
import MaskCursorPreview from "@/components/previews/mask-cursor-preview";
// import Navbar from "@/components/header/navbar";

export type ComponentList = typeof componentList;
export type scrollMenuList = typeof scrollMenuList;
export type IntroductionNavigator = typeof IntroductionNavigator;
export type InstallationNavigator = typeof InstallationNavigator;

export const IntroductionNavigator = [
  {
    title: "On This Page",
    content: [{ name: "Goal", subtitles: [] }],
  },
];

export const InstallationNavigator = [
  {
    title: "On This Page",
    content: [
      { name: "Frameworks", subtitles: [{ name: "Next.js" }] },
      { name: "Languages", subtitles: [{ name: "Typescript" }, {name: "Javascript"}] },
    ],
  },
];

export const scrollMenuList = [
  {
    id: "getting-started",
    name: "Getting Started",
    elements: [
      {
        id: "introduction",
        name: "Introduction",
        path: "/docs/introduction",
        new: false,
      },
      {
        id: "installation",
        name: "Installation",
        path: "/docs/installation",
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
        path: "/docs/components/rolling-text",
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
        path: "/docs/components/call-to-action-link",
        new: true,
      },
      {
        id: "magnetic-link",
        name: "Magnetic Link",
        path: "/docs/components/magnetic-link",
        new: true,
      },
      {
        id: "mask-cursor",
        name: "Mask Cursor",
        path: "/docs/components/mask-cursor",
        new: true,
      },
    ],
  },
];

//  ComponentList ----------------------------------------------------------------------------------------------------------------------------------------------->

export const componentList = [
  //  1st ------------------------------------------------------------------------------------------------------------------------->

  {
    id: "rolling-text",
    name: "Rolling Text",
    description: [
      "Text that rolls vertically on hover.",
      "can be used to add a more dynamic touch to your website.",
    ],
    preview: () => <RollingTextPreview />,
    // preview: () => <Navbar className="absolute top-7 right-7 z-1" />,

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
  //  2nd ------------------------------------------------------------------------------------------------------------------------->
  {
    id: "call-to-action-link",
    name: "Call to Action Link",
    description: [
      "An animated link that displays a call to action.",
      "can be used to direct users to a specific page or action.",
    ],
    preview: () => <CallToActionLinkPreview />,
    navigator: [
      {
        title: "On This Page",
        content: [
          { name: "Installation", subtitles: [] },
          { name: "Props", subtitles: [{ name: "CallToActionButton" }] },
        ],
      },
    ],
    demo: callToActionLinkCode.demo,
    code: callToActionLinkCode.code,
    props: [
      {
        id: "CallToActionButton",
        name: "Call to Action Button",
        content: [
          {
            name: "text",
            type: "String",
            default: "-",
            description: "The text to display on the link.",
          },
          {
            name: "className",
            type: "String",
            default: "-",
            description: "Additional classes to apply to the component.",
          },
          {
            name: "src",
            type: "String",
            default: "-",
            description: "The link to direct the user to.",
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
  //  3rd ------------------------------------------------------------------------------------------------------------------------->
  {
    id: "magnetic-link",
    name: "Magnetic Links",
    description: ["A link icon animated to have a magnetic effect on hover."],
    preview: () => <MagneticLinkPreview />,
    navigator: [
      {
        title: "On This Page",
        content: [
          { name: "Installation", subtitles: [] },
          { name: "Props", subtitles: [{ name: "MagneticLink" }] },
        ],
      },
    ],
    demo: magneticLinkCode.demo,
    code: magneticLinkCode.code,
    props: [
      {
        id: "MagneticLink",
        name: "Magnatic Link",
        content: [
          {
            name: "children",
            type: "React.ReactNode",
            default: "-",
            description: "The content to display on the link.",
          },
          {
            name: "className",
            type: "String",
            default: "-",
            description: "Additional classes to apply to the component.",
          },
          {
            name: "href",
            type: "String",
            default: "-",
            description: "The link to direct the user to.",
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
  //  4th ------------------------------------------------------------------------------------------------------------------------->
  {
    id: "mask-cursor",
    name: "Mask Cursor",
    description: ["A cursor that masks the text on hover."],
    preview: () => <MaskCursorPreview />,
    navigator: [
      {
        title: "On This Page",
        content: [
          { name: "Installation", subtitles: [] },
          { name: "Props", subtitles: [{ name: "MaskCursor" }] },
        ],
      },
    ],
    demo: maskCursorCode.demo,
    code: maskCursorCode.code,
    props: [
      {
        id: "MaskCursor",
        name: "Mask Cursor",
        content: [
          {
            name: "maskText",
            type: "String",
            default: "-",
            description: "The text to mask.",
          },
          {
            name: "bodyText",
            type: "String",
            default: "-",
            description: "The text to display.",
          },
          {
            name: "cursorDefaultSize",
            type: "Number",
            default: "40",
            description: "The default size of the cursor.",
          },
          {
            name: "cursorHoverSize",
            type: "Number",
            default: "150",
            description: "The size of the cursor on hover.",
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
  //  5th ------------------------------------------------------------------------------------------------------------------------->
];
