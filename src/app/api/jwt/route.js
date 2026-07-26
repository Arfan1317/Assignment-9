import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d", 
    });

    return NextResponse.json({ token }, { status: 200 });
    
  } catch (error) {
    console.error("JWT Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}