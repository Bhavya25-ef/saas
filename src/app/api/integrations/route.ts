import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"

// =======================
// CREATE / UPDATE INTEGRATION
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

    const {
      type,
      name,
      accessToken = null,
      refreshToken = null,
      metadata = {},
    } = body

    // ✅ Validate type
    const validTypes = [
      "google_drive",
      "slack",
      "discord",
      "notion",
      "stripe",
      "email",
    ]

    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: "Invalid integration type" },
        { status: 400 }
      )
    }

    // ✅ Find or create user
    let user = await db.user.findUnique({
      where: { clerkId: userId },
    })

    if (!user) {
      user = await db.user.create({
        data: {
          clerkId: userId,
        },
      })
    }

    // ✅ UPSERT integration
    const integration = await db.integration.upsert({
      where: {
        userId_type: {
          userId: user.id,
          type,
        },
      },
      create: {
        userId: user.id,
        type,
        name: name || type, // ✅ FIX
        accessToken,
        refreshToken,
        metadata,
        isActive: true,
      },
      update: {
        name: name || type, // ✅ FIX
        accessToken,
        refreshToken,
        metadata,
        isActive: true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        integration,
      },
      { status: 201 }
    )

  } catch (error) {
    console.error("[INTEGRATION_ERROR]", error)

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to create integration",
      },
      { status: 500 }
    )
  }
}

// =======================
// GET INTEGRATIONS
// =======================
export async function GET() {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const user = await db.user.findUnique({
      where: { clerkId: userId },
      include: {
        integrations: {
          select: {
            id: true,
            type: true,
            name: true,
            isActive: true,
            createdAt: true,
          },
        },
      },
    })

    return NextResponse.json(
      { integrations: user?.integrations || [] },
      { status: 200 }
    )

  } catch (error) {
    console.error("[INTEGRATIONS_GET_ERROR]", error)

    return NextResponse.json(
      { error: "Failed to fetch integrations" },
      { status: 500 }
    )
  }
}