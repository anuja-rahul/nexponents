import { NextResponse } from "next/server";
import { componentList } from "./app/utils/content";

export function middleware(req: Request) {
  const url = new URL(req.url);

  if (url.pathname === "/docs") {
    return NextResponse.redirect(new URL("/docs/introduction", req.url));
  }

  if (url.pathname === "/docs/components") {
    const newPath = componentList[0].id;
    return NextResponse.redirect(
      new URL(`/docs/components/${newPath}`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/docs/:path*", "/docs/components/:path*"],
};
