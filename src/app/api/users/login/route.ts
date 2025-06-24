import { connectDB } from "@/db/db";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

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
  } catch (error: any) {
    return NextResponse.json({ error: error.messsage }, { status: 500 });
  }
}
