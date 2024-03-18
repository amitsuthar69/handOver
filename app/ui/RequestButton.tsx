"use client";

import { useState, useEffect } from "react";
import { RequestData, getItemStatus } from "../utils/requestItem";
import makeRequest from "../utils/requestItem";

export default function RequestButton({
  senderId,
  receiverId,
  itemId,
}: RequestData) {
  const [status, setStatus] = useState("");
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
    try {
      const res = await makeRequest({ senderId, receiverId, itemId });
      const fetchedStatus = await getItemStatus(itemId);
      console.log("fetchedStatus in function: ", fetchedStatus);
      setStatus(fetchedStatus);
    } catch (error) {
      console.log("error in handleRequest: ", error);
    }
  };

  return (
    <button
      disabled={status === "Pending"}
      onClick={handleRequest}
      className={`${
        status === "Pending"
          ? "bg-cyan-700/50 hover:bg-cyan-700/50"
          : "bg-cyan-600"
      } 
        hover:bg-cyan-700 p-2 w-full text-center text-sm font-semibold rounded-lg rounded-t-none flex gap-2 items-center justify-center`}
    >
      {status === "Pending" ? "Requested" : "Request this item"}
    </button>
  );
}
