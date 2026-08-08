import mongoose from "mongoose";

const uri: string | undefined = process.env.MONGODB_URI;

export async function connectDB(): Promise<void> {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("MongoDB already connected");
      return;
    }

    if (!uri) {
      throw new Error("MONGODB_URI is not defined");
    }

    await mongoose.connect(uri);

    console.log("MongoDB connected");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("MongoDB connection error:", error.message);
    } else {
      console.log("Something went wrong");
    }
  }
}
