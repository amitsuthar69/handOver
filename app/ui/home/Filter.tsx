"use client";
import { Category } from "@/types/itemType";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Filter() {
  const categories: Category[] = [
    { id: "All Items", catName: "All Items", href: "/home/items" },
    { id: "exchange", catName: "exchange", href: "/home/items/exchange" },
    { id: "sell", catName: "sell", href: "/home/items/sell" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex p-2 justify-end">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1a1a1aee] rounded z-10 flex p-2 font-mono shadow-md text-gray-50">
        <Image src={"/filter.svg"} alt="filter" width={25} height={25} />
      </button>

      <button
        className={`absolute top-[52px] w-32 z-10 rounded text-gray-50 font-mono ${
          isOpen ? "" : "hidden"
        }`}>
        <div>
          <div className="block bg-[#1a1a1aee] shadow-md rounded text-sm">
            {categories.map((category) => (
              <Link key={category.id} href={category.href as string}>
                <div
                  className="p-2 hover:underline"
                  onClick={() => setIsOpen(false)}>
                  {category.catName}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </button>
      
    </div>
  );
}
