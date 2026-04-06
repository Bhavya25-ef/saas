import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-card">
          <div className="p-6">
            <h2 className="text-2xl font-bold">⚙️ Dashboard</h2>
          </div>
          <nav className="space-y-2 px-4">
            <a
              href="/dashboard"
              className="block px-4 py-2 rounded-lg hover:bg-muted"
            >
              📊 Overview
            </a>
            <a
              href="/dashboard/workflows"
              className="block px-4 py-2 rounded-lg hover:bg-muted"
            >
              🔄 Workflows
            </a>
            <a
              href="/dashboard/integrations"
              className="block px-4 py-2 rounded-lg hover:bg-muted"
            >
              🔗 Integrations
            </a>
            <a
              href="/dashboard/billing"
              className="block px-4 py-2 rounded-lg hover:bg-muted"
            >
              💳 Billing
            </a>
            <a
              href="/dashboard/settings"
              className="block px-4 py-2 rounded-lg hover:bg-muted"
            >
              ⚙️ Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
