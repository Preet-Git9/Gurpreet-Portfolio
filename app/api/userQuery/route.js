// import connectDb from "@/middleware/mongoose";
// import UserQuery from "@/models/UserQuery";
// import { NextResponse } from "next/server";



// export const POST = async (req) => {
//   await connectDb();
//   try {
//     const body = await req.json();
//     const { name, email, subject, message } = body;
//     let user = new UserQuery({ name, email, subject, message });
//     await user.save();
//     return NextResponse.json({ success: "success" });
//   } catch (e) {
//     return NextResponse.json({ error: e });
//   }
// };


import connectDb from "@/middleware/mongoose";
import UserQuery from "@/models/UserQuery";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDb();

  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*', // Update with your allowed origins
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  };

  if (req.method === 'OPTIONS') {
    return NextResponse.json({}, { headers });
  }

  try {
    const body = await req.json();
    const { name, email, subject, message } = body;
    console.log(name)
    let user = new UserQuery({ name, email, subject, message });
    await user.save();
    return NextResponse.json({ success: "success" }, { headers });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { headers });
  }
};
