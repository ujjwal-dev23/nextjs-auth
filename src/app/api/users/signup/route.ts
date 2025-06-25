import { connectDB } from "@/db/db";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import logger from "@/helpers/logger";
import bcrypt from "bcryptjs";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    const user = await User.findOne({ username });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const savedUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    logger.info(`User signed up: ${savedUser}`);

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        savedUser,
      },
      { status: 200 }
    );
  } catch (error: any) {
    logger.error(`Error occurred during signup: ${error}`);
    return NextResponse.json({ error: error.messsage }, { status: 500 });
  }
}
