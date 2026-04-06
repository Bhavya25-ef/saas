export default function WorkflowsPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Workflows</h1>

      <div className="bg-card p-12 rounded-lg border text-center">
        <p className="text-xl text-muted-foreground mb-6">
          🔄 No workflows created yet
        </p>

        <a
          href="/dashboard/workflows/create"
          className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Create Your First Workflow
        </a>
      </div>
    </div>
  )
}