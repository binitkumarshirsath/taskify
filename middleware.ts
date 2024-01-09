import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { url } from "inspector";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req, evt) {
    /* Case 1 : user logged in and tries to access '/' , redirect back to
      i) if org id exists => organization/id
      ii) else select-org
    */
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }
      const url = new URL(path, req.url);
      return NextResponse.redirect(url);
    }

    /*
      Case 2 : if user isnt logged in and tries to access protected route
    */
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    /*
     Case 3 : user is logged in and dont have any org
     and is not on page select-org
    */
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      const url = new URL("/select-org", req.url);
      return NextResponse.redirect(url);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
