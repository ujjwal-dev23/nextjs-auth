import { connectDB } from "@/db/db";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import logger from "@/helpers/logger";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Password invalid" }, { status: 401 });
    }

    const tokenData = {
      id: user._id,
      username: user.username,
    };

    if (!process.env.TOKEN_SECRET)
      return NextResponse.json(
        { error: "Token Secret not defined" },
        { status: 400 }
      );
    const loginToken = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successfull",
      success: true,
    });

    response.cookies.set("token", loginToken, {
      httpOnly: true,
    });

    logger.info(`User logged in : ${user}`);

    return response;
  } catch (error: any) {
    logger.error(`Error occurred during login: ${error}`);
    return NextResponse.json({ error: error.messsage }, { status: 500 });
  }
}
