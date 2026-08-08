import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Todo from "@/models/todo";
import { getUserId } from "@/lib/auth";


export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    // Check login user
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


    // Get todo id from URL
    const { id } = await params;


    // Get update data
    const { title, completed } = await request.json();


    // Update todo
    const updatedTodo = await Todo.findOneAndUpdate(
      {
        _id: id,
        userId: userId,
      },
      {
        title,
        completed,
      },
      {
        new: true,
      }
    );


    if (!updatedTodo) {
      return NextResponse.json(
        {
          message: "Todo not found",
        },
        {
          status: 404,
        }
      );
    }


    return NextResponse.json(
      {
        message: "Todo updated successfully",
        todo: updatedTodo,
      },
      {
        status: 200,
      }
    );


  } catch (error) {

    console.error("Update Todo Error:", error);

    return NextResponse.json(
      {
        message: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    // Check login user
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


    // Get todo id from URL
    const { id } = await params;


    // Delete todo
    const deletedTodo = await Todo.findOneAndDelete({
      _id: id,
      userId: userId,
    });


    if (!deletedTodo) {
      return NextResponse.json(
        {
          message: "Todo not found",
        },
        {
          status: 404,
        }
      );
    }


    return NextResponse.json(
      {
        message: "Todo deleted successfully",
        todo: deletedTodo,
      },
      {
        status: 200,
      }
    );


  } catch (error) {

    console.error("Delete Todo Error:", error);

    return NextResponse.json(
      {
        message: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}