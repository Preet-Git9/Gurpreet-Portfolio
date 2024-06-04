import connectDb from "@/middleware/mongoose";
import UserQuery from "@/models/UserQuery";
import { NextResponse } from "next/server";



export const POST = async (req) => {
  // NextResponse.setHeader('Access-Control-Allow-Origin', '*');

  // NextResponse.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // NextResponse.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  await connectDb();
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;
    let user = new UserQuery({ name, email, subject, message });
    await user.save();
    return NextResponse.json({ success: "success" });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
};
