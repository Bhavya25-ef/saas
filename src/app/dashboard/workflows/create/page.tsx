"use client"

import { useState } from "react"

export default function CreateWorkflowPage() {
  const [name, setName] = useState("")

  const handleCreate = async () => {
    await fetch("/api/workflows", {
      method: "POST",
      body: JSON.stringify({ name }),
    })

    alert("Workflow saved to DB 🚀")
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Create Workflow</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-3 bg-black border rounded"
        placeholder="Workflow name"
      />

      <button
        onClick={handleCreate}
        className="ml-4 bg-primary px-6 py-2 rounded"
      >
        Create
      </button>
    </div>
  )
}