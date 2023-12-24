import { ItemType } from "@/types/itemType";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import Image from "next/legacy/image";
import Link from "next/link";
import EditDeleteButton from "./EditDeleteButton";

export default async function ItemCard({
  id,
  author,
  description,
  price,
  imageUrl,
  authorEmail,
  createdAt,
  catName,
}: ItemType) {

  const session = await getServerSession(authOptions);

  const mood =
    catName === "sell" ? "purchase this item from" : "exchange this item with";
  
  let whatsAppLink = `https://wa.me/${author.phone}?text=Hello%2C%20I%27m%20a%20user%20from%20handOver%20website%20and%20I%20want%20to%20${mood}%20you%2C%20Is%20It%20still%20Available%3F`;
  
  const dateObjbect = new Date(createdAt);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = dateObjbect.toLocaleDateString("en-US", options);
  
  return (
    <div className="text-gray-50 dark shadow-md drop-shadow-md rounded-lg font-mono grid grid-cols-1">
      <div className="thumbnail bg-gray-950/20 rounded-lg rounded-b-none shadow-md">
        <Image
          priority={true}
          width={40}
          height={30}
          src={
            imageUrl && imageUrl.length > 0
              ? imageUrl
              : "/item-placeholder-image.webp"
          }
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
          ₹{catName === "sell" ? price : "0"}
        </div>
      </div>
      <div className="details px-2">
        <h1 className="font-semibold text-sm">{author.name}</h1>
        <p className="text-xs">{description}</p>
      </div>
      <p className="text-xs px-2 py-1 text-gray-50/40">
        Created at : ${formattedDate}
      </p>
      {session && session.user?.name === author.name ? (
        <EditDeleteButton id={id} />
      ) : (
        <Link href={`${whatsAppLink}`}>
          <button className="btn-green font-semibold rounded-t-none flex gap-2 items-center justify-center">
            Talk to the owner
            <Image
              width={20}
              height={20}
              alt="whatsapp"
              src={"/whatsapp.svg"}
            />
          </button>
        </Link>
      )}
    </div>
  );
}
