import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export async function getUserId() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return null;
    }

    const decoded = verifyToken(token) as {
      userId: string;
    };

    return decoded.userId;

  } catch (error) {
    return null;
  }
}