import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const userRole = token?.role;
    const pathname = req.nextUrl.pathname;

    // 1. Redirect logged-in users away from the login page
    if (pathname.startsWith("/login") && !!token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // 2. Define Admin-only routes
    const adminRoutes = [
      "/dashboard",
      "/employees",
      "/holidays",
      "/leavetypes",
    ];
    const isAdminRoute = adminRoutes.some((route) =>
      pathname.startsWith(route)
    );

    // 3. Role-based access control
    // Note: withAuth already ensures 'token' exists if 'authorized' returns true
    if (isAdminRoute && userRole !== "Admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;
        // Allow public access to the login page so the middleware function can handle the "already logged in" redirect
        if (pathname.startsWith("/login")) return true;

        // For all other matched routes, require a token
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/employees/:path*",
    "/holidays/:path*",
    "/leavetypes/:path*",
    "/login",
  ],
};
