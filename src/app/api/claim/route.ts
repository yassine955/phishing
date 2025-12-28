import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateDutchPerson } from "@/lib/dutchDataGenerator";

export async function POST(request: NextRequest) {
  try {
    // Generate fake Dutch person data
    const person = generateDutchPerson();

    // Get user agent and referrer from request
    const userAgent = request.headers.get("user-agent") || "Unknown";
    const referrer = request.headers.get("referer") || "Direct";

    // Store in database
    const click = await prisma.click.create({
      data: {
        voornaam: person.voornaam,
        achternaam: person.achternaam,
        geboortedatum: person.geboortedatum,
        stad: person.stad,
        postcode: person.postcode,
        telefoonnummer: person.telefoonnummer,
        email: person.email,
        ipAdres: person.ipAdres,
        bsn: person.bsn,
        userAgent: userAgent,
        referrer: referrer,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Click recorded",
      id: click.id
    });
  } catch (error) {
    console.error("Error recording click:", error);
    return NextResponse.json(
      { success: false, error: "Failed to record click" },
      { status: 500 }
    );
  }
}
