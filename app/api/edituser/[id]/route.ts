import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { name, phone } = await req.json();
  const id = params.id;
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        phone,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("error updating user: ", error);
    return NextResponse.json({ error: "error updating user" }, { status: 500 });
  }
}

// incase if we had a serach user feature
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const userbyId = await prisma.user.findUnique({ where: { id } });
    return NextResponse.json(userbyId);
  } catch (error) {
    console.log("error fetching user by id: ", error);
    return NextResponse.json({ error: "error fetching user by id" });
  }
}
