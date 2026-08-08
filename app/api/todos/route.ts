import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Todo from "@/models/todo";
import { getUserId } from "@/lib/auth";


// GET ALL TODOS
export async function GET() {
  try {
    await connectDB();

    // check login user
    const userId = await getUserId();

    if (!userId) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }


    // get user todos
    const todos = await Todo.find({
      userId,
    }).sort({
      createdAt: -1,
    });


    return NextResponse.json(
      {
        todos,
      },
      {
        status: 200,
      }
    );


  } catch (error) {
    console.error("Get Todo Error:", error);

    return NextResponse.json(
      {
        message: "Server error",
      },
      {
        status:500,
      }
    );
  }
}





// CREATE TODO
export async function POST(request: NextRequest) {

  try {

    await connectDB();


    // check login user
    const userId = await getUserId();


    if(!userId){
      return NextResponse.json(
        {
          message:"Unauthorized",
        },
        {
          status:401,
        }
      );
    }



    const {title}= await request.json();



    if(!title){
      return NextResponse.json(
        {
          message:"Title is required",
        },
        {
          status:400,
        }
      );
    }



    const todo = await Todo.create({
      title,
      userId,
    });



    return NextResponse.json(
      {
        message:"Todo created successfully",
        todo,
      },
      {
        status:201,
      }
    );



  } catch(error){

    console.error("Create Todo Error:",error);


    return NextResponse.json(
      {
        message:"Server error",
      },
      {
        status:500,
      }
    );

  }
}