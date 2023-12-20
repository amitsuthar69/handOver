import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    const email = params.email;
    const itemByUser = await prisma.user.findUnique({
      where: { email },
      include: { items: { orderBy: { createdAt: "desc" } } },
    });
    return NextResponse.json(itemByUser);
  } catch (error) {
    console.log("error fetching items by user: ", error);
    return NextResponse.json({ error: "error fetching items by user" });
  }
}
