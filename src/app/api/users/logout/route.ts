import logger from "@/helpers/logger";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logged Out",
      success: true,
    });
    response.cookies.set("token", "", {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    logger.error(`Error during logout : ${error}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
