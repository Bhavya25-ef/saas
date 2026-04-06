import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import { db } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const { type, accessToken, refreshToken, metadata } = await req.json()

    // Validate integration type
    const validTypes = [
      "google_drive",
      "slack",
      "discord",
      "notion",
      "stripe",
    ]
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: "Invalid integration type" },
        { status: 400 }
      )
    }

    // Get or create user
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

    // Create or update integration
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
        accessToken,
        refreshToken,
        metadata,
        isActive: true,
      },
      update: {
        accessToken,
        refreshToken,
        metadata,
        isActive: true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        integration: {
          id: integration.id,
          type: integration.type,
          isActive: integration.isActive,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("[INTEGRATION_ERROR]", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to create integration",
      },
      { status: 500 }
    )
  }
}

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

    if (!user) {
      return NextResponse.json(
        { integrations: [] },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { integrations: user.integrations },
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
