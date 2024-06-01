import connectDb from "@/middleware/mongoose";
import UserQuery from "@/models/UserQuery";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDb();
    const body = await req.json();
    const { name, email, subject, message } = body;
    let user = new UserQuery({ name, email, subject, message });
    await user.save();
    return NextResponse.json({ success: "success" });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
};
