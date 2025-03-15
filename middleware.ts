import { NextResponse } from "next/server";
import { componentList } from "./app/utils/content";

export function middleware(req: Request) {
  const url = new URL(req.url);

  if (url.pathname === "/docs/components") {
    const newPath = componentList[0].id; // Get the first component ID
    return NextResponse.redirect(new URL(`/docs/components/${newPath}`, req.url)); // Redirect if the path is '/components'
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/docs/components/:path*"],
};
