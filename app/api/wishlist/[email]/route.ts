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
      where: { senderId: userId },
    });

    const itemIds = requests.map((req) => req.itemId);
    const items = await prisma.item.findMany({
      where: { id: { in: itemIds } },
      include: { author: { select: { name: true, phone: true } } },
    });

    // console.log("email of this user: ", email);
    // console.log("the fetched user is: ", user);
    // console.log("the id of this user: ", userId);
    // console.log("requests sent by this user", requests);
    // console.log("these items have ids: ", itemIds);
    // console.log("requested items of this user: ", items);

    return NextResponse.json(items);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "error fetching requests" },
      { status: 500 }
    );
  }
}


