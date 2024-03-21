import { authOptions } from "@/app/utils/authOptions";
import prisma from "@/app/utils/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

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
    const deletedRequest = await prisma.request.delete({ where: { id } });
    return NextResponse.json(deletedRequest);
  } catch (error) {
    console.log("Error deleting request", error);
    return NextResponse.json({ error: "error deleting request" });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  try {
    const updatedRequest = await prisma.request.update({
      where: { id },
      data: { status: "Approved" },
    });
    return NextResponse.json(updatedRequest.status);
  } catch (error) {
    console.log("error updating status: ", error);
    return NextResponse.json(
      { error: "error updating status" },
      { status: 500 }
    );
  }
}
