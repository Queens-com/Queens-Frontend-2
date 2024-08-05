import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { unprotectedPages, protectedPages, routes } from "@/config/routes";

export default withAuth(
  async function middleware(req) {
    const pathname = req.nextUrl.pathname;
    const user = req.nextauth.token;
    const isProtectedUrl = protectedPages.some((url: string) =>
      pathname.startsWith(url)
    );
    const home = new URL(routes.home, req.url);
    if (user?.error === "Token expired" && isProtectedUrl) {
      const previousUrl = req.nextUrl.pathname;
      const loginUrl = new URL(routes.login, req.url);
      loginUrl.searchParams.set("callbackUrl", previousUrl);
      return NextResponse.redirect(loginUrl);
    }

    //if user has not done email verification  is attempting to access onboarding page or dashboard, redirect to email verification page
    // if ((isProtectedUrl || pathname.startsWith(routes.onboarding.index)) && !user?.isVerified) {
    //     const url = new URL(
    //         `${routes.register.verify}?email=${encodeURIComponent(user?.user?.email ?? '')}`,
    //         req.url,
    //     );
    //     return NextResponse.redirect(url);
    // }

    //if user is logged in and is trying to access unprotected page (e.g. login/register page), redirect to dashboard
    if (unprotectedPages.includes(pathname) && user && !user.error) {
      return NextResponse.redirect(home);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: async ({ req, token }) => {
        if ([...unprotectedPages].includes(req.nextUrl.pathname)) return true;
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/stores/:path*",
    "/cart/:path*",
    "/profile/:path*",
    "/login/:path*",
    "/register/:path*",
  ],
};
