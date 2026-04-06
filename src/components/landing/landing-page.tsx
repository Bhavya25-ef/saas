"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut } from "@clerk/nextjs"

export function LandingPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-32 bg-gradient-to-b from-background via-background to-muted">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            AI Automation Platform
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Connect your favorite apps and build powerful automations without coding.
            Integrate Google Drive, Slack, Discord, Notion, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignedOut>
              <Link href="/sign-up">
                <Button size="lg" className="text-lg">
                  Get Started Free
                </Button>
              </Link>
            </SignedOut>

            <SignedIn>
              <Link href="/dashboard">
                <Button size="lg" className="text-lg">
                  Go to Dashboard
                </Button>
              </Link>
            </SignedIn>

            <a
              href="https://github.com/Bhavya7111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-lg">
                View on GitHub
              </Button>
            </a>
          </div>

          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">✨ No Credit Card Required</div>
            <div className="flex items-center gap-2">🚀 Deploy in Minutes</div>
            <div className="flex items-center gap-2">💰 Lifetime Free Tier</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-lg border bg-card">
                <div className="text-3xl mb-3">
                  <span suppressHydrationWarning>{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold">Ready to automate?</h2>

          {/* ✅ FIXED HERE */}
          <p className="text-lg opacity-90">
            Start building your first automation today. It is completely free.
          </p>

          <SignedOut>
            <Link href="/sign-up">
              <Button size="lg" variant="secondary" className="text-lg">
                Sign Up Now
              </Button>
            </Link>
          </SignedOut>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: "🗂️",
    title: "Google Drive Integration",
    description: "Auto-organize files, create backups, and trigger actions on file changes",
  },
  {
    icon: "💬",
    title: "Slack Integration",
    description: "Send automated notifications and messages to your Slack channels",
  },
  {
    icon: "🎮",
    title: "Discord Integration",
    description: "Integrate Discord for server notifications and custom messages",
  },
  {
    icon: "📝",
    title: "Notion Database",
    description: "Automatically create and update Notion database entries",
  },
  {
    icon: "💳",
    title: "Stripe Payments",
    description: "Charge customers with month-to-month subscriptions",
  },
  {
    icon: "📊",
    title: "Workflow Builder",
    description: "Drag-and-drop interface to create complex automation workflows",
  },
]