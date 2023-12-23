import { ItemType } from "@/types/itemType";
import Image from "next/legacy/image";
import Link from "next/link";

export default function ItemCard({
  id,
  author,
  description,
  price,
  imageUrl,
  authorEmail,
  createdAt,
  catName,
}: ItemType) {
  const mood =
    catName === "sell" ? "purchase this item from" : "exchange this item with";
  let whatsAppLink = `https://wa.me/${author.phone}?text=Hello%2C%20I%27m%20a%20user%20from%20handOver%20website%20and%20I%20want%20to%20${mood}%20you%2C%20Is%20It%20still%20Available%3F`;
  return (
    <div className="text-gray-50 dark shadow-md drop-shadow-md rounded-lg font-mono grid grid-cols-1">
      <div className="thumbnail">
        <Image
          width={40}
          height={40}
          src={imageUrl}
          alt="thumbnail"
          layout="responsive"
          className="rounded-lg rounded-b-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <h1
          className={`w-fit m-2 px-0.5 rounded-md text-xs ${
            catName === "sell"
              ? "bg-red-400/50 border border-red-500"
              : "bg-green-400/50 border border-green-500"
          }`}>
          {catName}
        </h1>
        <div
          className={`mx-2 ${
            catName === "sell" ? "text-green-400" : "text-gray-50/50"
          } `}>
          ₹{price ? price : "0"}
        </div>
      </div>
      <div className="details px-2">
        <h1 className="font-semibold">{author.name}</h1>
        <p className="text-xs">{description}</p>
      </div>
      <p className="text-xs text-gray-50/40 text-center">Created at : ${createdAt}</p>
      <Link href={`${whatsAppLink}`}>
        <button className="btn-green font-semibold rounded-t-none flex gap-2 items-center justify-center">
          Talk to the owner
          <Image width={20} height={20} alt="whatsapp" src={"/whatsapp.svg"} />
        </button>
      </Link>
    </div>
  );
}
