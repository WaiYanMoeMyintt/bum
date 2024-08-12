import { NextRequest, NextResponse } from "next/server";
import connectDatabase from "@/lib/mongoose";
import BumBumModel from "@/app/models/schema";

export async function GET() {
  try {
    await connectDatabase;
    const today = await BumBumModel.find();
    return NextResponse.json({ today });
  } catch (err) {
    return NextResponse.json(err.message);
  }
}

export async function DELETE(request) {
  try {
    await connectDatabase();
    const { title } = await request.json();
    await BumBumModel.deleteOne({ title });
    return NextResponse.json({ message: "success" });
  } catch (err) {
    return err.message;
  }
}

export async function POST(request) {
  try {
    const { title, description, status, comment } = await request.json();
    await connectDatabase();
    await BumBumModel.create({ title, description, status, comment });
    return NextResponse.json({ status: 201 });
  } catch (err) {
    return NextResponse.json({ status: 500 });
  }
}
