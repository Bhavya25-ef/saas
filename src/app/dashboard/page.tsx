"use client"

import { useEffect, useState } from "react"

export default function DashboardPage() {
  const [workflowCount, setWorkflowCount] = useState(0)
  const [integrationCount, setIntegrationCount] = useState(0)
  const [usage, setUsage] = useState(0)
  const [loading, setLoading] = useState(true)

  // ✅ NEW STATES (for UI polish)
  const [updating, setUpdating] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        // workflows
        const workflowsRes = await fetch("/api/workflows")
        const workflowsData = await workflowsRes.json()
        const workflowTotal = workflowsData.workflows?.length || 0

        // integrations
        const integrationsRes = await fetch("/api/integrations")
        const integrationsData = await integrationsRes.json()
        const integrationTotal = integrationsData.integrations?.length || 0

        // usage (REAL DB)
        const usageRes = await fetch("/api/usage")
        const usageData = await usageRes.json()

        // set values
        setWorkflowCount(workflowTotal)
        setIntegrationCount(integrationTotal)
        setUsage(usageData.usage || 0)

      } catch (error) {
        console.error("Dashboard error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      {/* ✅ SUCCESS MESSAGE */}
      {message && (
        <div className="mb-4 p-3 rounded bg-green-500 text-white">
          {message}
        </div>
      )}

      {/* ✅ POLISHED BUTTON */}
      <button
        onClick={async () => {
          setUpdating(true)
          await fetch("/api/usage", { method: "POST" })
          setMessage("Usage updated 🚀")
          setUpdating(false)

          setTimeout(() => {
            location.reload()
          }, 800)
        }}
        disabled={updating}
        className="mb-6 bg-green-500 text-white px-4 py-2 rounded hover:opacity-90 transition disabled:opacity-50"
      >
        {updating ? "Updating..." : "Test Usage (+1)"}
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Workflows */}
          <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition">
            <h3 className="text-muted-foreground mb-2">
              Active Workflows
            </h3>
            <p className="text-3xl font-bold">{workflowCount}</p>
          </div>

          {/* Integrations */}
          <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition">
            <h3 className="text-muted-foreground mb-2">
              Integrations
            </h3>
            <p className="text-3xl font-bold">{integrationCount}</p>
          </div>

          {/* Usage */}
          <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition">
            <h3 className="text-muted-foreground mb-2">
              Usage This Month
            </h3>
            <p className="text-3xl font-bold">{usage} actions</p>
          </div>

          {/* Plan */}
          <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition">
            <h3 className="text-muted-foreground mb-2">
              Plan
            </h3>
            <p className="text-3xl font-bold">Free</p>
          </div>

        </div>
      )}
    </div>
  )
}