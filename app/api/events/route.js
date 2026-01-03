import { request } from "https";
import { NextRequest, NextResponse } from "next/server";
import {v2 as cloudinary} from "cloudinary";

import connectDB from "../../../lib/mongoDb";
import Event from "../../../model/event";
export async function POST(request){
    try {
        await connectDB();
        const formData = await request.formData();
        let event
        try {
            event = Object.fromEntries(formData.entries())
        } catch (error) {
            return NextResponse.json({message:"Invalid form data"},{status:400})
        }
        const file = formData.get('image')
        if(!file){
            return NextResponse.json({message:"Image is required"},{status:400})
        }
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const uploadResult =  await new Promise((resolve, reject) =>{
            cloudinary.uploader.upload_stream({resource_type:"image"},(error,result)=>{
                if(result){
                    resolve(result)
                }else{
                    reject(error)
                }
            }).end(buffer)
        })
        event.image = uploadResult.secure_url

        const createdEvent = await Event.create(event);

        return NextResponse.json({message:"Event created successfully",createdEvent},{status:201})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{status:500},{error:error.message})
    }    
}


export async function GET(){
    try {
        await connectDB();
        const events = await Event.find().sort({createdAt:-1});
        return NextResponse.json({message:"Events fetched successfully",events},{status:200})

    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{status:500},{error:error.message})
    }
}