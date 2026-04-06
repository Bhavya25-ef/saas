import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"

// ✅ GET USER SETTINGS
export async function GET() {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await db.user.findUnique({
      where: { clerkId: userId },
    })

    return NextResponse.json({
      user: user || null,
    })
  } catch (error) {
    console.error("GET SETTINGS ERROR:", error)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}

// ✅ SAVE SETTINGS
export async function POST(req: Request) {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, email, notifications } = await req.json()

    const user = await db.user.upsert({
      where: { clerkId: userId },
      create: {
        clerkId: userId,
        name,
        email,
      },
      update: {
        name,
        email,
      },
    })

    return NextResponse.json({
      message: "Settings saved successfully ✅",
      user,
    })
  } catch (error) {
    console.error("SAVE SETTINGS ERROR:", error)
    return NextResponse.json({ error: "Failed to save" }, { status: 500 })
  }
}

// ✅ DELETE ACCOUNT
export async function DELETE() {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await db.user.delete({
      where: { clerkId: userId },
    })

    return NextResponse.json({
      message: "Account deleted successfully ❌",
    })
  } catch (error) {
    console.error("DELETE ERROR:", error)
    return NextResponse.json({ error: "Delete failed" }, { status: 500 })
  }
}