import { NextRequest, NextResponse } from "next/server";


export function proxy(request: NextRequest) {

  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;



  // Dashboard protect
  if (
    pathname.startsWith("/dashboard") &&
    !token
  ) {

    return NextResponse.redirect(
      new URL("/login", request.url)
    );

  }



  // Login page protect
  // Agar user already login hai to login page na dikhe
  if (
    pathname.startsWith("/login") &&
    token
  ) {

    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );

  }



  return NextResponse.next();

}



export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
  ],
};