import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const removeImage = async (publicId: string) => {
  try {
    const res = await cloudinary.v2.uploader.destroy(publicId);
    console.log("Image removed with publicId: ", publicId);
  } catch (error) {
    console.log("error deleting image: ", error);
  }
};

export async function POST(req: Request) {
  const { publicId } = await req.json();
  await removeImage(publicId);
  console.log("publicId in POST method: ", publicId);
  return NextResponse.json({
    message: "success",
  });
}
