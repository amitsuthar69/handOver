import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { senderId, receiverId, itemId, status } = await req.json();
  if (!senderId || !receiverId) {
    return NextResponse.json(
      { error: "please signup to make request" },
      { status: 404 }
    );
  }
  if (!itemId) {
    return NextResponse.json({ error: "invalid item" }, { status: 404 });
  }
  try {
    const newItem = await prisma.request.create({
      data: {
        senderId,
        receiverId,
        itemId,
        status,
      },
    });
    return NextResponse.json(newItem);
  } catch (error) {
    console.log("error making request: ", error);
    return NextResponse.json(
      { message: "could not create request" },
      { status: 500 }
    );
  }
}
