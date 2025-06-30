import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicURL = path === "/signup" || path === "/login";

  const token = request.cookies.get("token")?.value || "";

  if (token && isPublicURL) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!token && !isPublicURL) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/profile", "/profile/:id", "/signup"],
};
