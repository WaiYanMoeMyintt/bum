import { NextResponse } from "next/server";
import connectDatabase from "@/lib/mongoose";
import BumBumModel from "@/app/models/schema";

export async function GET() {
  try {
    await connectDatabase();
    const today = await BumBumModel.find();
    return NextResponse.json({ today });
  } catch (err) {
    console.error('GET request error:', err);
    return NextResponse.json({ error: err.message });
  }
}
export async function POST(request) {
  try {
    await connectDatabase();
    const { title, description, status, comment } = await request.json();
   
    await BumBumModel.create({ title, description, status, comment });
    return NextResponse.json({ status: 201 });
  } catch (err) {
    console.error('POST request error:', err);
    return NextResponse.json({ status: 500, error: err.message });
  }
}