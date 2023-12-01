import { NextResponse } from 'next/server';
import axios from "axios";

export async function POST(req,res) {
    const json=await req.json();
    try {
        const x = await axios.post("https://agency.teamrabbil.com/api/CreateContact",json);
        return NextResponse.json({status:"success"});
    }catch (e) {
        return NextResponse.json(e);
    }

}