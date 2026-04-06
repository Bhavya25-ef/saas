"use client"

import { useEffect, useState } from "react"

export default function SettingsPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(true)

  const [notifications, setNotifications] = useState({
    workflow: true,
    failures: true,
    weekly: false,
  })

  // ✅ LOAD USER DATA
  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setName(data.user.name || "")
          setEmail(data.user.email || "")
          setNotifications(
            data.user.notifications || {
              workflow: true,
              failures: true,
              weekly: false,
            }
          )
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // ✅ SAVE PROFILE
  const handleSave = async () => {
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          notifications,
        }),
      })

      const data = await res.json()
      alert(data.message || "Saved successfully ✅")
    } catch {
      alert("Error saving ❌")
    }
  }

  // ✅ DELETE ACCOUNT
  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete account?")
    if (!confirmDelete) return

    try {
      const res = await fetch("/api/settings", {
        method: "DELETE",
      })

      const data = await res.json()
      alert(data.message || "Account deleted ❌")

      window.location.reload()
    } catch {
      alert("Delete failed ❌")
    }
  }

  if (loading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Settings</h1>

      <div className="max-w-2xl space-y-6">

        {/* Profile Section */}
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-lg bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-lg bg-background"
              />
            </div>

            <button
              onClick={handleSave}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>

          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={notifications.workflow}
                onChange={() =>
                  setNotifications({
                    ...notifications,
                    workflow: !notifications.workflow,
                  })
                }
                className="w-4 h-4"
              />
              <span>Email notifications for workflow runs</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={notifications.failures}
                onChange={() =>
                  setNotifications({
                    ...notifications,
                    failures: !notifications.failures,
                  })
                }
                className="w-4 h-4"
              />
              <span>Email on integration failures</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={notifications.weekly}
                onChange={() =>
                  setNotifications({
                    ...notifications,
                    weekly: !notifications.weekly,
                  })
                }
                className="w-4 h-4"
              />
              <span>Weekly usage report</span>
            </label>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-card p-6 rounded-lg border border-red-500">
          <h2 className="text-xl font-semibold mb-4 text-red-500">
            Danger Zone
          </h2>

          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            Delete Account
          </button>
        </div>

      </div>
    </div>
  )
}