import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const itemByid = await prisma.item.findUnique({ where: { id } });
    return NextResponse.json(itemByid);
  } catch (error) {
    console.log("error fetching item by id: ", error);
    return NextResponse.json({ error: "error fetching item by id" });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { description, imageUrl, price } = await req.json();
  const id = params.id;

  try {
    const updatedItem = await prisma.item.update({
      where: { id },
      data: {
        description,
        imageUrl,
        price,
      },
    });
    if (price === null || price === undefined) {
      return NextResponse.json({ error: "Price is required" }, { status: 400 });
    }
    return NextResponse.json(updatedItem);
  } catch (error) {
    console.log("error updating user: ", error);
    return NextResponse.json({ error: "error updating user" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  try {
    const id = params.id;
    const deletedItem = await prisma.item.delete({ where: { id } });
    return NextResponse.json(deletedItem);
  } catch (error) {
    console.log("Error deleting item", error);
    return NextResponse.json({ error: "error deleting item" });
  }
}
