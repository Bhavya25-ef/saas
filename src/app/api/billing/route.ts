import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"

export async function POST(req: Request) {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { plan } = await req.json()

    console.log("User upgrading to:", plan)

    return NextResponse.json({
      success: true,
      message: `Upgraded to ${plan}`,
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Billing failed" },
      { status: 500 }
    )
  }
}