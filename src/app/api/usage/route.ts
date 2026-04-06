import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"

export async function GET() {
  const { userId } = auth()

  if (!userId) {
    return NextResponse.json({ usage: 0 })
  }

  const user = await db.user.findUnique({
    where: { clerkId: userId },
  })

  return NextResponse.json({
    usage: user?.usage || 0,
  })
}

export async function POST() {
  const { userId } = auth()

  if (!userId) return NextResponse.json({})

  const user = await db.user.update({
    where: { clerkId: userId },
    data: {
      usage: {
        increment: 1,
      },
    },
  })

  return NextResponse.json({ usage: user.usage })
}