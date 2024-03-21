import { ItemType } from "@/types/itemType";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import { getUserByEmail } from "../utils/getUserByEmail";
import Image from "next/legacy/image";
import EditDeleteButton from "./EditDeleteButton";
import RequestButton from "./RequestButton";

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
  const email = session?.user?.email as string;
  const user = await getUserByEmail(email);
  const userId = user?.id as string;

  const mood =
    catName === "sell"
      ? `purchase this ${description} from`
      : `exchange this ${description} with`;

  const whatsAppLink = `https://wa.me/${author.phone}?text=Hello%2C%20I%27m%20${
    session ? session?.user?.name : "User"
  }%20from%20handOver%20website%20and%20I%20want%20to%20${mood}%20you%2C%20Is%20It%20still%20Available%3F`;

  const dateObjbect = new Date(createdAt);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = dateObjbect.toLocaleDateString("en-US", options);

  return (
    <div className="text-gray-50 dark shadow-md drop-shadow-md rounded-lg font-mono grid grid-cols-1">
      <div className="thumbnail relative h-48 bg-gray-950/20 rounded-lg rounded-b-none shadow-md">
        <Image
          priority={true}
          placeholder="blur"
          blurDataURL={imageUrl}
          layout="fill"
          src={imageUrl && imageUrl}
          alt="item-image"
          className="rounded-lg rounded-b-none absolute object-cover inset-0"
        />
      </div>
      <div className="flex items-center justify-between">
        <h1
          className={`w-fit m-2 px-0.5 rounded-md text-xs ${
            catName === "sell"
              ? "bg-red-400/50 border border-red-500"
              : "bg-green-400/50 border border-green-500"
          }`}
        >
          {catName === "sell" ? "sale" : "exchange"}
        </h1>
        <div
          className={`mx-2 ${
            catName === "sell" ? "text-green-400" : "text-gray-50/50"
          } `}
        >
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
        <RequestButton senderId={userId} receiverId={author.id} itemId={id} url={whatsAppLink} />
      )}
    </div>
  );
}