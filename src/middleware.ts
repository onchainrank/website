// src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAIN_HOSTS = ["onchainrank.com", "www.onchainrank.com", "localhost"];
const APP_HOST = "app.onchainrank.com";
const WHITELIST = ["/", ".", "/profile", "/register", "/login"];

export function middleware(request: NextRequest) {
  const { hostname, pathname, search } = request.nextUrl;
  console.log(hostname, pathname, search);
  // 1) Only apply this logic on your production domain
  if (!MAIN_HOSTS.includes(hostname)) {
    return NextResponse.next();
  }

  // 2) Let Next.js internals & asset requests through
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/static/") ||
    pathname.includes(".") // e.g. .js, .css, .png, etc.
  ) {
    return NextResponse.next();
  }

  // 3) Whitelist your known pages (including the root "/")
  if (WHITELIST.includes(pathname)) {
    return NextResponse.next();
  }

  // 4) Everything else → redirect to the app subdomain
  return NextResponse.redirect(`https://${APP_HOST}${pathname}${search}`);
}

export const config = {
  matcher: "/:path*", // run on every path—but our code guards what actually gets redirected
};
