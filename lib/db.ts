import mongoose from "mongoose";

const uri: string | undefined = process.env.MONGODB_URI;

export async function connectDB(): Promise<void> {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  if (!uri) {
    throw new Error("MONGODB_URI is not defined");
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("MongoDB connection error:", error.message);
    } else {
      console.error("MongoDB connection error:", error);
    }

    throw error;
  }
}
