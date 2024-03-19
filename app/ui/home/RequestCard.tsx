"use client";
import { getRequestItemById } from "@/app/utils/getItems";
import { getUserById } from "@/app/utils/getUserById";
import { ItemType } from "@/types/itemType";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";

export default function RequestCard({ senderId, itemId, status }: any) {
  const [item, setItem] = useState<ItemType>();
  const [senderName, setSenderName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const item = await getRequestItemById(itemId);
      setItem(item as ItemType);
      const user = await getUserById(senderId);
      setSenderName(user?.name as string);
      setImageUrl(user?.image as string);
    };
    fetchData();
  }, [senderId, itemId]);

  return (
    <div className="box transition ease-in-out min-h-full hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-lg bg-[#181818] text-sm md:text-lg flex justify-between font-mono text-gray-50 rounded-md px-2 md:mx-4">
      <div className="top flex gap-4 justify-between items-center">
        <div className="flex-auto mt-2">
          <Image
            priority={true}
            className="rounded-full"
            src={imageUrl ? imageUrl : `/user-placeholder.png`}
            alt="user"
            width={90}
            height={90}
          />
        </div>
        {senderName ? (
          <div className="right p-0.5 w-full flex flex-col justify-center">
            <div className="name">{senderName}</div>
            <div className="description">Requested for {item?.description}</div>
          </div>
        ) : (
          <Skeleton />
        )}
      </div>
      <div className="bottom flex flex-col justify-center items-center gap-2">
        <button className="btns flex items-center justify-center min-w-max p-1 md:p-1.5 bg-green-700 hover:bg-green-500 rounded">
          <Image
            priority={true}
            width={18}
            height={18}
            alt="handOver-logo"
            src={"/check.svg"}
          />
        </button>
        <button className="btns flex items-center justify-center p-1 md:p-1.5 bg-red-700 hover:bg-red-500 rounded">
          <Image
            priority={true}
            width={18}
            height={18}
            alt="handOver-logo"
            src={"/cross.svg"}
          />
        </button>
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="animate-pulse w-full flex flex-col gap-3 p-2 justify-center">
      <p className="bg-gray-600/50 py-2.5 px-24 rounded-md" />
      <p className="bg-gray-600/50 py-2.5 px-24 rounded-md" />
    </div>
  );
}
