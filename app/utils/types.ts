import { ReactNode } from "react";

export interface Subtitle {
  name: string;
}

export interface NavigatorContent {
  name: string;
  subtitles: Subtitle[];
}

export interface NavigatorSection {
  title: string;
  content: NavigatorContent[];
}

export interface PropItem {
  id: string;
  name: string;
  content: {
    name: string;
    type: string;
    default: string;
    description: string;
  }[];
}

export interface Credit {
  data: ReactNode;
}

export interface Component {
  id: string;
  name: string;
  description: string[];
  preview: () => ReactNode;
  navigator: NavigatorSection[];
  demo: string;
  code: string;
  props: PropItem[];
  credits: Credit[];
}
