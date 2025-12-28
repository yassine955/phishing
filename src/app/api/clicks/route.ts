import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const clicks = await prisma.click.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: clicks,
      count: clicks.length,
    });
  } catch (error) {
    console.error("Error fetching clicks:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch clicks" },
      { status: 500 }
    );
  }
}
