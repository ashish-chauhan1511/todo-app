import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/lib/db";
import { generateToken } from "@/lib/jwt";

export async function POST(request:NextRequest){
    try{
        await connectDB();
        const {email,password} =await request.json();
        //validation
        if(!email || !password){
            return NextResponse.json(
                {
                    message:"email and password is required",

                },
                {
                    status:400,
                },
            );
        }
        //find user
        const user =await User.findOne({
            email,
        });
        if (!user){
            return NextResponse.json(
                {
                    message:"invalide email or password",
                },
                {
                    status:401
                },
            );
        }
        //compared Password
        const isPasswordMatch = await bcrypt.compare(
            password,
            user.password
        );
        if(!isPasswordMatch){
            return NextResponse.json(
                {
                    message:"invalid email or pasword",

                },
                {
                    status:400,
                }
            );
        }
        // Generate Jwt
        const token = generateToken(
            user._id.toString()
        );
        const response = NextResponse.json(
            {
                message:"login successful",
                user:{
                    id:user._id,
                    name:user.name,
                    email:user.email,
                },
            },
            {
                status:200,
            }
        );
        // store token in cookie
        response.cookies.set(
            "token",
            token,
            {
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"strict",
            path:"/"
            }
        );
        return response;

    } catch (error: unknown) {
        console.error("Login error:", error);
        return NextResponse.json(
            {
                message:"server error",
            },
            {
                status:500,
            }
        );
    }
}
