import { NextResponse } from "next/server";
import { componentList } from "./lib/content";

export function middleware(req: Request) {
  const url = new URL(req.url);

  // Check if the URL is exactly '/components' (no component ID)
  if (url.pathname === "/components") {
    const newPath = componentList[0].id; // Get the first component ID
    return NextResponse.redirect(new URL(`/components/${newPath}`, req.url)); // Redirect to home if the path is '/components'
  }

  // Allow the request to continue if the path isn't '/components'
  return NextResponse.next();
}

// Apply the middleware to all routes under /components (including /components/[componentId])
export const config = {
  matcher: ["/components/:path*"], // Correct matcher without an additional slash at the end
};
