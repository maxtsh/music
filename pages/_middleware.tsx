// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

// // These routes must be available anytime!
// const exceptions = ["/", "/auth", "/assets", "/api/auth"];

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req, secret: process.env.JWT_SECRET });
//   const { pathname } = req.nextUrl;
//   const url = req.nextUrl.clone();

//   // Redirect to dashboard if user is logged in and tries to visit auth route
//   if (token && pathname === "/auth") {
//     url.pathname = "/dashboard";
//     return NextResponse.redirect(url);
//   }

//   // Redirect if the request is to dashboard routes without a token
//   if (!token && pathname.includes("/dashboard")) {
//     url.pathname = "/auth";
//     return NextResponse.redirect(url);
//   }

//   // Redirect to login if user is unauthorized except for exception list
//   if (
//     !token &&
//     exceptions.every((exRoute: string) => !pathname.includes(exRoute))
//   ) {
//     url.pathname = "/auth";
//     return NextResponse.redirect(url);
//   }

//   // Allow if there is auth request or user has token
//   if (token) return NextResponse.next();
// }
