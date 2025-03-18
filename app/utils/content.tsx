import RollingTextPreview from "@/components/previews/rolling-text-preview";
import {
  bubbleHoverTextCode,
  callToActionLinkCode,
  drawSvgTextCode,
  gradientGlassBoxCode,
  magneticLinkCode,
  maskCursorCode,
  rollingTextCode,
  staggeredGridCode,
} from "./componentCodes";
import CreditLink from "@/components/credit-link";
import CallToActionLinkPreview from "@/components/previews/call-to-action-button-preview";
import MagneticLinkPreview from "@/components/previews/magnetic-link-preview";
import MaskCursorPreview from "@/components/previews/mask-cursor-preview";
import StaggeredGridPreview from "@/components/previews/staggered-grid-preview";
import BubbleHoverTextPreview from "@/components/previews/bubble-hover-text-preview";
import GradientGlassBoxPreview from "@/components/previews/gradient-glass-box-preview";
import DrawSvgTextPreview from "@/components/previews/draw-svg-text-preview";
// import Navbar from "@/components/header/navbar";

export type ComponentList = typeof componentList;
export type scrollMenuList = typeof scrollMenuList;
export type IntroductionNavigator = typeof IntroductionNavigator;
export type InstallationNavigator = typeof InstallationNavigator;

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
      {
        id: "components",
        name: "Components",
        path: "/docs/components",
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
        new: false,
      },
      {
        id: "bubble-hover-text",
        name: "Bubble Hover Text",
        path: "/docs/components/bubble-hover-text",
        new: true,
      },
      {
        id: "draw-svg-text",
        name: "Draw SVG Text",
        path: "/docs/components/draw-svg-text",
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
        new: false,
      },
      {
        id: "magnetic-link",
        name: "Magnetic Link",
        path: "/docs/components/magnetic-link",
        new: false,
      },
      {
        id: "mask-cursor",
        name: "Mask Cursor",
        path: "/docs/components/mask-cursor",
        new: false,
      },
      {
        id: "gradient-glass-box",
        name: "Gradient Glass Box",
        path: "/docs/components/gradient-glass-box",
        new: true,
      },
    ],
  },
  {
    id: "backgrounds",
    name: "Backgrounds",
    elements: [
      {
        id: "staggered-grid",
        name: "Staggered Grid",
        path: "/docs/components/staggered-grid",
        new: false,
      },
    ],
  },
];

const defaultCredits = {
  data: (
    <CreditLink
      text="Credit to"
      name="@anuja-rahul"
      href="https://www.github.com/anuja-rahul"
    />
  ),
};

const TomsCredits = {
  data: (
    <CreditLink
      text="Special thanks to"
      name="@tomisloading"
      href="https://github.com/TomIsLoading"
    />
  ),
};

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
      {
        name: "Languages",
        subtitles: [{ name: "Typescript" }, { name: "Javascript" }],
      },
    ],
  },
];

//  ComponentList ----------------------------------------------------------------------------------------------------------------------------------------------->

export const componentList = [
  //  ------------------------------------------------------------------------------------------------------------------------->

  {
    id: "rolling-text",
    name: "Rolling Text",
    description: [
      "Text that rolls vertically on hover.",
      "can be used to add a more dynamic touch to your website.",
    ],
    prerequisites: [],
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
    credits: [defaultCredits, TomsCredits],
  },
  //  ------------------------------------------------------------------------------------------------------------------------->
  {
    id: "bubble-hover-text",
    name: "Bubble Hover Text",
    description: ["A text that animate it's font weight smoothly on hover."],
    prerequisites: [
      {
        title:
          "A variable font is preferred (but not mandatory) for smoother transitions.",
        message: "In this case Mona & Hubot sans are used.",
        link: "https://github.com/mona-sans",
      },
    ],
    preview: () => <BubbleHoverTextPreview />,
    navigator: [
      {
        title: "On This Page",
        content: [
          { name: "Prerequisites", subtitles: [] },
          { name: "Installation", subtitles: [] },
          { name: "Props", subtitles: [{ name: "BubbleHoverText" }] },
        ],
      },
    ],
    demo: bubbleHoverTextCode.demo,
    code: bubbleHoverTextCode.code,
    props: [
      {
        id: "BubbleHoverText",
        name: "Bubble Hover Text",
        content: [
          {
            name: "className",
            type: "String",
            default: "-",
            description: "Additional classes to apply to the component.",
          },
          {
            name: "text",
            type: "String",
            default: "-",
            description: "The text to display.",
          },
        ],
      },
    ],
    credits: [
      defaultCredits,
      {
        data: (
          <CreditLink
            text="Inspired by"
            name="GitHub Mona sans page animation"
            href="https://github.com/mona-sans"
          />
        ),
      },
      TomsCredits,
    ],
  },
  //  ------------------------------------------------------------------------------------------------------------------------->
  {
    id: "draw-svg-text",
    name: "Draw SVG Text",
    description: ["A SVG element that animate around a text."],
    prerequisites: [],
    preview: () => <DrawSvgTextPreview />,
    navigator: [
      {
        title: "On This Page",
        content: [
          { name: "Installation", subtitles: [] },
          { name: "Props", subtitles: [{ name: "DrawSvgText" }] },
        ],
      },
    ],
    demo: drawSvgTextCode.demo,
    code: drawSvgTextCode.code,
    props: [
      {
        id: "DrawSvgText",
        name: "DrawSvgText",
        content: [
          {
            name: "className",
            type: "String",
            default: "-",
            description:
              "Adjust the position of the SVG element using tailwind classes.",
          },
          {
            name: "textBefore",
            type: "String",
            default: "-",
            description: "The text to display before the animated text.",
          },
          {
            name: "text",
            type: "String",
            default: "-",
            description: "The text to display.",
          },
          {
            name: "textAfter",
            type: "String",
            default: "-",
            description: "The text to display after the animated text.",
          },
          {
            name: "playOnce",
            type: "Boolean",
            default: "true",
            description: "If the animation should only play once.",
          },
        ],
      },
    ],
    credits: [defaultCredits, TomsCredits],
  },
  //  ------------------------------------------------------------------------------------------------------------------------->
  {
    id: "call-to-action-link",
    name: "Call to Action Link",
    description: [
      "An animated link that displays a call to action.",
      "can be used to direct users to a specific page or action.",
    ],
    prerequisites: [],
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
    credits: [defaultCredits],
  },
  //  ------------------------------------------------------------------------------------------------------------------------->
  {
    id: "magnetic-link",
    name: "Magnetic Links",
    description: ["A link icon animated to have a magnetic effect on hover."],
    prerequisites: [],
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
    credits: [],
  },
  //  ------------------------------------------------------------------------------------------------------------------------->
  {
    id: "mask-cursor",
    name: "Mask Cursor",
    description: ["A cursor that masks the text on hover."],
    prerequisites: [],
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
        name: "MaskCursor",
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
    credits: [],
  },
  //  ------------------------------------------------------------------------------------------------------------------------->
  {
    id: "gradient-glass-box",
    name: "Gradient Glass Box",
    description: ["A glass box with a gradient background shadow."],
    prerequisites: [],
    preview: () => <GradientGlassBoxPreview />,
    navigator: [
      {
        title: "On This Page",
        content: [
          { name: "Installation", subtitles: [] },
          { name: "Props", subtitles: [{ name: "GradientGlassBox" }] },
        ],
      },
    ],
    demo: gradientGlassBoxCode.demo,
    code: gradientGlassBoxCode.code,
    props: [
      {
        id: "GradientGlassBox",
        name: "GradientGlassBox",
        content: [
          {
            name: "children",
            type: "Rect.ReactNode",
            default: "-",
            description: "The content to display in the glass box.",
          },
          {
            name: "className",
            type: "String",
            default: "-",
            description: "Additional classes to apply to the component.",
          },
        ],
      },
    ],
    credits: [defaultCredits, TomsCredits],
  },
  //  ------------------------------------------------------------------------------------------------------------------------->
  {
    id: "staggered-grid",
    name: "Staggered Grid",
    description: ["A grid that animates its children in a staggered manner."],
    prerequisites: [
      {
        title: "Anime.js",
        message: "JavaScript animation engine",
        link: "https://www.npmjs.com/package/animejs",
      },
    ],
    preview: () => <StaggeredGridPreview />,
    navigator: [
      {
        title: "On This Page",
        content: [
          { name: "Prerequisites", subtitles: [] },
          { name: "Installation", subtitles: [] },
          { name: "Props", subtitles: [{ name: "StaggeredGrid" }] },
        ],
      },
    ],
    demo: staggeredGridCode.demo,
    code: staggeredGridCode.code,
    props: [
      {
        id: "StaggeredGrid",
        name: "Staggered Grid",
        content: [
          {
            name: "className",
            type: "String",
            default: "-",
            description: "Additional classes to apply to the component.",
          },

          {
            name: "gridHeight",
            type: "Number",
            default: "20",
            description: "Number of dots in the grid vertically.",
          },
          {
            name: "gridWidth",
            type: "Number",
            default: "25",
            description: "Number of dots in the grid horizontally.",
          },
          {
            name: "amplitude",
            type: "Number",
            default: "-15",
            description: "The wave amplitude of the staggered grid animation.",
          },
        ],
      },
    ],
    credits: [defaultCredits, TomsCredits],
  },

  //  ------------------------------------------------------------------------------------------------------------------------->
];
