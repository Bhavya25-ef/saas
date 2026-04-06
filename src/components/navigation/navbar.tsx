"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl">⚙️</div>
            <span className="text-xl font-bold">SAAS Automation</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-sm hover:text-primary transition">
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm hover:text-primary transition"
            >
              Pricing
            </a>
            <a
              href="#docs"
              className="text-sm hover:text-primary transition"
            >
              Docs
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Auth */}
            <SignedOut>
              <div className="flex gap-2">
                <Link href="/sign-in">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            </SignedOut>

            <SignedIn>
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  )
}
