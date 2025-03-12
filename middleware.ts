import { NextResponse } from "next/server";
import { componentList } from "./lib/content";

export function middleware(req: Request) {
  const url = new URL(req.url);

  if (url.pathname === "/components") {
    const newPath = componentList[0].id; // Get the first component ID
    return NextResponse.redirect(new URL(`/components/${newPath}`, req.url)); // Redirect if the path is '/components'
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/components/:path*"],
};
