"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import setItems from "@/app/utils/setItems";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import toast from "react-hot-toast";
import { removeImg } from "@/app/utils/removeImage";


export default function HandOverForm() {
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("exchange");
  const [price, setPrice] = useState("0");
  const [publicId, setPublicId] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();

  const removeImage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await removeImg(publicId);
      if (res?.ok) {
        setImageUrl("");
        setPublicId("");
      }
    } catch (error) {
      console.log("error in frontend: ", error);
    }
  };

  const handleImageUpload = (result: CldUploadWidgetResults) => {
    const info = result.info as object;
    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url as string;
      const public_id = info.public_id as string;
      setImageUrl(url);
      setPublicId(public_id);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !imageUrl) {
      const errorMessage = "Description & Image are necessary";
      toast.error(errorMessage);
      return;
    }
    try {
      await setItems(
        {
          description,
          selectedCategory,
          publicId,
          price,
          imageUrl,
        },
        router,
        toast
      );
    } catch (error) {
      console.log("Error handling form submit: ", error);
    }
  };

  return (
    <div className="dark font-mono text-gray-50 h-screen flex flex-col items-center gap-2 p-8">
      <h1 className="text-center -mt-4 mb-4">What you got to exchange?</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 md:w-3/4 justify-center">
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          maxLength={100}
          minLength={10}
          className="edit-form-input"
          name="description"
          placeholder="describle your item... (atleast 10 characters)"></textarea>
        <select
          required
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-transparent outline-none border p-2 rounded"
          name="sell or exchange?">
          <option className="bg-[#1e1e1ec0]" value={"exchange"}>
            exchange
          </option>
          <option className="bg-[#1e1e1ec0]" value={"sell"}>
            sell
          </option>
        </select>
        {selectedCategory === "sell" && (
          <input
            required
            onChange={(e) => setPrice(e.target.value)}
            className="edit-form-input"
            type="text"
            name="amount"
            placeholder="what's the price? (if selling)"
          />
        )}
        <CldUploadButton
          onUpload={handleImageUpload}
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          className={`h-24 md:h-48 -mt-2 border border-slate-100/50 border-dotted grid place-items-center bg-slate-100/30 rounded-md relative ${
            imageUrl && "pointer-events-none"
          }`}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          {imageUrl && (
            <Image
              src={imageUrl && imageUrl}
              priority={true}
              placeholder="blur"
              blurDataURL={imageUrl}
              fill
              className="absolute object-cover inset-0"
              alt={"item-image"}
            />
          )}
        </CldUploadButton>
        <p className="text-gray-50/50 text-xs flex justify-between items-center -mt-2">
          *Suggested not to use Potrait images{" "}
          {publicId && (
            <button
              onClick={removeImage}
              className="btn-delete w-fit rounded-md bg-red-700 hover:bg-red-500 p-1 text-center text-xs">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z"
                  fill="white"
                />
              </svg>
            </button>
          )}
        </p>
        <button className="btn-cyan -mt-2">
          Open for {selectedCategory === "sell" ? "sell" : "Exchange"}
        </button>
      </form>
    </div>
  );
}
