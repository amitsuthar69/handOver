import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";
import { getUserByEmail } from "@/app/utils/getUserByEmail";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const itemId = params.id;

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const user = await getUserByEmail(email as string);

    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }
    const userId = user?.id;
    const request = await prisma.request.findFirst({
      where: {
        itemId: itemId,
        senderId: userId,
      },
      select: { status: true },
    });
    if (request && request.status) {
      return NextResponse.json(request.status);
    } else {
      return NextResponse.json("Not Requested");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "requests not found" },
      { status: 404 }
    );
  }
}
