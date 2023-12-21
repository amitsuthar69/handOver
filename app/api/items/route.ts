import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { description, imageUrl, publicId, selectedCategory } =
    await req.json();
  if (!description) {
    return NextResponse.json(
      { error: "Description is required" },
      { status: 500 }
    );
  }
  const authorEmail = "sutharamit707@gmail.com"; // temporary, will change it from session
  try {
    const newItem = await prisma.item.create({
      data: {
        description,
        imageUrl,
        publicId,
        authorEmail,
        catName: selectedCategory,
      },
    });
    console.log("post created");
    return NextResponse.json(newItem);
  } catch (error) {
    console.log("error creating item: ", error);
    return NextResponse.json({ message: "could not create post" });
  }
}

export async function GET() {
  try {
    const items = await prisma.item.findMany({
      include: { author: { select: { name: true } } }, // getting author name from User collection
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
