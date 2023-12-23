"use client";
import ItemCard from "@/app/ui/ItemCard";
import { useEffect, useState } from "react";
import { getItems } from "@/app/utils/getItems";
import { ItemType } from "@/types/itemType";

export default function Items() {
  const [item, setItem] = useState<ItemType[] | null>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getItems();
        setItem(items);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="bg-[#1a1a1ae8] p-4">
      <div className="mt-4 grid grid-cols-1 gap-4">
        {item && item.length > 0 ? (
          item.map((post) => (
            <ItemCard
              key={post.id}
              id={post.id}
              author={{ name: post.author.name, phone: post.author.phone }}
              description={post.description}
              price={post.price}
              imageUrl={post.imageUrl}
              authorEmail={post.authorEmail}
              createdAt={post.createdAt}
              catName={post.catName}
            />
          ))
        ) : (
          <div className="text-gray-50 text-center">
            Fetching latest Items...
          </div>
        )}
      </div>
    </div>
  );
}
