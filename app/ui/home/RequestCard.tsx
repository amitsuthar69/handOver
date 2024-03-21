"use client";
import { getRequestItemById } from "@/app/utils/getItems";
import { getUserById } from "@/app/utils/getUserById";
import { ItemType } from "@/types/itemType";
import { useEffect, useState } from "react";
import { deleteRequest, updateStatus } from "@/app/utils/requestItem";
import { useRouter } from "next/navigation";
import Image from "next/legacy/image";
import toast from "react-hot-toast";

export default function RequestCard({
  requestId,
  senderId,
  itemId,
  status,
}: any) {
  const [item, setItem] = useState<ItemType>();
  const [senderName, setSenderName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();

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

  const handleRequestDecline = async () => {
    try {
      const res = await deleteRequest(requestId);
      if (res?.ok) {
        toast.success("Request Declined!");
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log("error deleting request in frontend: ", error);
    }
  };

  // const handleRequestDelete = async () => {
  //   try {
  //     const res = await deleteRequest(requestId);
  //     if (res?.ok) {
  //       router.refresh();
  //     }
  //   } catch (error) {
  //     console.log("error deleting request in frontend: ", error);
  //   }
  // };

  const handleRequestApprove = async () => {
    try {
      const update = await updateStatus(requestId);
      if (update?.ok) {
        toast.success(
          "Request Approved, The sender may now contact you for this item."
        );
        console.log("request was approved!");
        console.log(status);
      }
      // await handleRequestDelete();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
      console.log("error approving request in frontend: ", error);
    }
  };

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
          <div className="right p-1 w-full flex flex-col justify-center">
            <div className="name">{senderName}</div>
            <div className="description">Requested {item?.description}</div>
          </div>
        ) : (
          <Skeleton />
        )}
      </div>
      <div className="bottom flex flex-col justify-center items-center gap-2">
        <button
          disabled={status === "Approved"}
          onClick={handleRequestApprove}
          className="btns flex items-center justify-center min-w-max p-1 md:p-1.5 bg-green-600 hover:bg-green-500 rounded"
        >
          {status == "Approved" ? (
            <Image
              priority={true}
              width={18}
              height={18}
              alt="approved"
              src={"/approve.svg"}
            />
          ) : (
            <Image
              priority={true}
              width={18}
              height={18}
              alt="check"
              src={"/check.svg"}
            />
          )}
        </button>
        <button
          disabled={status === "Approved"}
          onClick={handleRequestDecline}
          className="btns flex items-center justify-center p-1 md:p-1.5 bg-red-600 hover:bg-red-500 rounded"
        >
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
