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
}: ItemType) {
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
      <div className="details p-2 flex gap-2">
        <div className="detail">
          <h1 className="font-semibold">{author.name}</h1>
          <p className="text-xs">{description}</p>
        </div>
        <div className="price text-green-400">₹{price ? price : "0"}</div>
      </div>
      <Link href={"/dashboard/inventory"}>
        <button className="btn-green font-semibold rounded-t-none flex gap-2 items-center justify-center">
          Talk to the owner
          <Image width={20} height={10} alt="whatsapp" src={"/whatsapp.svg"} />
        </button>
      </Link>
    </div>
  );
}
