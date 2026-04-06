"use client"

import { useEffect, useState } from "react"

export default function IntegrationsPage() {
  const [connected, setConnected] = useState<string[]>([])

  // 🔥 fetch connected integrations
  useEffect(() => {
    fetch("/api/integrations")
      .then((res) => res.json())
      .then((data) => {
        const types = data.integrations?.map((i: any) => i.type) || []
        setConnected(types)
      })
  }, [])

  // 🔥 connect function
  const connectIntegration = async (type: string) => {
    try {
      await fetch("/api/integrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
          name: type,
        }),
      })

      alert(type + " connected 🚀")

      setConnected((prev) => [...prev, type])
    } catch (error) {
      console.error(error)
      alert("Error connecting ❌")
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Integrations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => {
          const type = integration.id.replace("-", "_")

          const isConnected = connected.includes(type)

          return (
            <div
              key={integration.id}
              className="bg-card p-6 rounded-lg border hover:border-primary transition"
            >
              <div className="text-4xl mb-3">{integration.icon}</div>
              <h3 className="text-lg font-semibold mb-2">
                {integration.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {integration.description}
              </p>

              {isConnected ? (
                <button
                  disabled
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  Connected ✅
                </button>
              ) : (
                <button
                  onClick={() => connectIntegration(type)}
                  className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition"
                >
                  Connect
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const integrations = [
  {
    id: "google-drive",
    name: "Google Drive",
    icon: "📁",
    description: "Connect your Google Drive to automate file operations",
  },
  {
    id: "slack",
    name: "Slack",
    icon: "💬",
    description: "Send messages and notifications to Slack channels",
  },
  {
    id: "discord",
    name: "Discord",
    icon: "🎮",
    description: "Integrate Discord for server notifications",
  },
  {
    id: "notion",
    name: "Notion",
    icon: "📝",
    description: "Create and update Notion database entries",
  },
  {
    id: "stripe",
    name: "Stripe",
    icon: "💳",
    description: "Manage payments and subscriptions",
  },
  {
    id: "email",
    name: "Email",
    icon: "📧",
    description: "Send automated emails via Resend",
  },
]