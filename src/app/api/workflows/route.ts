import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"

// =======================
// GET workflows
// =======================
export async function GET() {
  try {
    console.log("API HIT")

    const { userId } = auth()

    // ❌ FIX 1: correct condition
    if (!userId) {
      return NextResponse.json({ workflows: [] }, { status: 200 })
    }

    // ✅ DB connection test (FIXED syntax)
    await db.$queryRaw`SELECT 1`

    // ✅ Find user
    let user = await db.user.findUnique({
      where: { clerkId: userId },
      include: { workflows: true },
    })

    // ❌ FIX 2: correct condition
    if (!user) {
      user = await db.user.create({
        data: { clerkId: userId },
        include: { workflows: true },
      })
    }

    console.log("USER:", user)

    return NextResponse.json(
      { workflows: user.workflows || [] },
      { status: 200 }
    )

  } catch (error) {
    console.error("🔥 FULL ERROR:", error)

    return NextResponse.json(
      {
        error: "Failed to fetch workflows",
        details: String(error),
      },
      { status: 500 }
    )
  }
}

// =======================
// CREATE workflow
// =======================
export async function POST(req: Request) {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { name, description } = body

    if (!name) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      )
    }

    // ✅ Find or create user
    let user = await db.user.findUnique({
      where: { clerkId: userId },
    })

    if (!user) {
      user = await db.user.create({
        data: { clerkId: userId },
      })
    }

    // ✅ Create automation
    const automation = await db.automation.create({
      data: {
        name: "Default Automation",
        userId: user.id,
      },
    })

    // ✅ Create workflow
    const workflow = await db.workflow.create({
      data: {
        name,
        description,
        userId: user.id,
        automationId: automation.id,
      },
    })

    console.log("CREATED WORKFLOW:", workflow)

    return NextResponse.json(workflow, { status: 201 })

  } catch (error) {
    console.error("🔥 CREATE ERROR:", error)

    return NextResponse.json(
      {
        error: "Failed to create workflow",
        details: String(error),
      },
      { status: 500 }
    )
  }
}