import connectDb from "@/middleware/mongoose"
import UserQuery from "@/models/UserQuery";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        await connectDb();
        const user  = await UserQuery.find()
        return NextResponse.json({data: user});
        
    }
    catch(e) {
        return NextResponse.json({error: e});
        
    }
}