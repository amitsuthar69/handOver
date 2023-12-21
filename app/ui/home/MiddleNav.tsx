"use client";
import Link from "next/link";
import { useState } from "react";

export default function MiddleNav() {
  const [active, setActive] = useState(false);
  return (
    <div className="dark grid grid-cols-2 p-0.5 gap-0.5 items-center font-mono border-b border-t border-gray-50 rounded text-gray-50">
      <Link href={`/home/items`}>
        <button
          onClick={() => setActive((prev) => !prev)}
          className={`rounded-lg p-2 w-full hover:bg-[#333333] ${
            active ? "" : "bg-[#333333]"
          }`}>
          Items
        </button>
      </Link>
      <Link href={`/home/wishlist`}>
        <button
          onClick={() => setActive((prev) => !prev)}
          className={`rounded-lg p-2 w-full hover:bg-[#333333] ${
            active ? "bg-[#333333]" : ""
          }`}>
          Wishlist
        </button>
      </Link>
    </div>
  );
}
