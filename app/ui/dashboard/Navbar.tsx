"use client";
import Link from "next/link";
import { useState } from "react";

export default function DashboardNavBar() {
  const [active, setActive] = useState(false);
  return (
    <div className="dark grid grid-cols-2 p-0.5 gap-0.5 items-center font-mono border-b border-t border-gray-50 rounded text-gray-50">
      <Link href={`/dashboard/inventory`}>
        <button
          onClick={() => setActive((prev) => !prev)}
          className={`rounded-lg p-2 w-full hover:bg-[#333333] ${
            active ? "" : "bg-[#333333]"
          }`}>
          Inventory
        </button>
      </Link>
      <Link href={`/dashboard/exchange`}>
        <button
          onClick={() => setActive((prev) => !prev)}
          className={`rounded-lg p-2 w-full hover:bg-[#333333] ${
            active ? "bg-[#333333]" : ""
          }`}>
          Exchange
        </button>
      </Link>
    </div>
  );
}
