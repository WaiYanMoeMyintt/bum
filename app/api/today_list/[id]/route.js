import { NextRequest, NextResponse } from "next/server";
import connectDatabase from "@/lib/mongoose";
import BumBumModel from "@/app/models/schema";

export async function GET(req, {params}){
    const {id} = params;
     try {
        await connectDatabase();
        const topics =  await BumBumModel.findOne({_id: id});
        return NextResponse.json({topics});
     }
     catch(err){
         return err.message;
     }
}

export async function PUT(req, {params}){
      const {id} =  params;
      try {
         await connectDatabase();
         const {title, description, status} = await req.json();
         await BumBumModel.findByIdAndUpdate(id, {title,description,status}, { new: true });
         return NextResponse.json({message:"update success"});
      }
      catch(err) {
         return err.message;
      }
}

export async function DELETE(req, {params}){
   const {id}  = params;
     try {
         await connectDatabase();
         await BumBumModel.findByIdAndDelete(id);
         return NextResponse.json({message:"delete success"});
     }
     catch (err){
        return err.message;
     }

}