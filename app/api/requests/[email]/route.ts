import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";
import { getUserByEmail } from "@/app/utils/getUserByEmail";

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    const email = params.email;
    const user = await getUserByEmail(email);

    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }

    const userId = user?.id;

    const requests = await prisma.request.findMany({
      where: { receiverId: userId },
    });

    return NextResponse.json(requests);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "error fetching requests" },
      { status: 500 }
    );
  }
}
