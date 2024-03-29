"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { RequestData, getItemStatus } from "../utils/requestItem";
import makeRequest from "../utils/requestItem";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/legacy/image";

export default function RequestButton({
  senderId,
  receiverId,
  itemId,
  url,
}: RequestData) {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [requesting, setRequesting] = useState(false);

  useEffect(() => {
    async function fetchRequestStatus() {
      try {
        const fetchedStatus = await getItemStatus(itemId);
        setStatus(fetchedStatus);
      } catch (error) {
        console.log("Error fetching request status:", error);
      }
    }
    fetchRequestStatus();
  }, [itemId]);

  const handleRequest = async () => {
    setRequesting(true);
    try {
      const res = await makeRequest({ senderId, receiverId, itemId });
      const fetchedStatus = await getItemStatus(itemId);
      setStatus(fetchedStatus);
      setRequesting(false);
      if (fetchedStatus !== "Pending") {
        toast.error("Please Sign up to make request!");
      } else {
        toast.success(
          "Item Requested Successfully!\n Please wait while the owner to approves your Request.",
          { duration: 5000 }
        );
        router.refresh();
      }
    } catch (error) {
      console.log("error in handleRequest: ", error);
    }
  };

  return (
    <div>
      {status === "Approved" ? (
        <Link href={url as string}>
          <button className="btn-green font-semibold rounded-t-none flex gap-2 items-center justify-center">
            Talk to the owner
            <Image
              priority={true}
              width={20}
              height={20}
              alt="whatsapp"
              src={"/whatsapp.svg"}
            />
          </button>
        </Link>
      ) : (
        <button
          disabled={status === "Pending"}
          onClick={handleRequest}
          className={`${
            status === "Pending"
              ? "bg-cyan-700/50 hover:bg-cyan-700/50"
              : "bg-cyan-600"
          } 
        ${
          requesting && "animate-pulse"
        }   hover:bg-cyan-700 p-2 w-full text-center text-sm font-semibold rounded-lg rounded-t-none flex gap-2 items-center justify-center`}
        >
          {status === "Pending" ? "Requested" : "Request this item"}
        </button>
      )}
    </div>
  );
}
