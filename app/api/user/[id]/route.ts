import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const userById = await prisma.user.findUnique({ where: { id } });
    return NextResponse.json(userById);
  } catch (error) {
    console.log("error fetching user by email: ", error);
    return NextResponse.json({ error: "error fetching user by email" });
  }
}
