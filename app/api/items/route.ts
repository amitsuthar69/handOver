import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";

export async function POST(req: Request) {
  const { description, imageUrl, publicId, selectedCategory, price } =
    await req.json();
  if (!description) {
    return NextResponse.json(
      { error: "Description is required" },
      { status: 500 }
    );
  }
  const session = await getServerSession(authOptions);
  const authorEmail = session?.user?.email as string;
  try {
    const newItem = await prisma.item.create({
      data: {
        description,
        imageUrl,
        publicId,
        authorEmail,
        catName: selectedCategory,
        price,
      },
    });
    return NextResponse.json(newItem);
  } catch (error) {
    console.log("error creating item: ", error);
    return NextResponse.json(
      { message: "could not create post" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const items = await prisma.item.findMany({
      include: { author: { select: { name: true, phone: true } } }, // getting author name & phone from User collection
      orderBy: { createdAt: "desc" }, // keeping latest items at top
    });
    return NextResponse.json(items);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "error fetching items" },
      { status: 500 }
    );
  }
}
