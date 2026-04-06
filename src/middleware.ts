import { authMiddleware } from "@clerk/nextjs"
import { NextResponse } from "next/server"

// If Clerk keys are not set yet, skip authentication middleware for local bootstrap.
// Set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY + CLERK_SECRET_KEY in .env.local to enable auth.

export default function middleware(request) {
  if (!process.env.CLERK_SECRET_KEY || !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return NextResponse.next()
  }
  return authMiddleware({
    publicRoutes: ["/", "/api/health", "/sign-in", "/sign-up"],
  })(request)
}

export const config = {
  matcher: ["/((?!_next|.well-known|public).*)"],
}
