import { NextResponse } from "next/server";
import prisma from "@/app/utils/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { catName: string } }
) {
  try {
    const catName = params.catName;
    const itemsByCat = await prisma.category.findUnique({
      where: { catName },
      include: {
        items: { include: { author: true }, orderBy: { createdAt: "desc" } },
      },
    });
    return NextResponse.json(itemsByCat);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Could not fetch post" },
      { status: 500 }
    );
  }
}
