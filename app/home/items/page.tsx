"use client";
import ItemCard from "@/app/ui/ItemCard";
import { useEffect, useState } from "react";
import { getItems } from "@/app/utils/getItems";
import { ItemType } from "@/types/itemType";

export default function Items() {
  const [item, setItem] = useState<ItemType[] | null>([]);
  useEffect(() => {
    const fetchItems = async () => {
      const items = await getItems();
      setItem(items);
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
              author={{ name: post.author.name }}
              description={post.description}
              price={post.price}
              imageUrl={post.imageUrl}
              authorEmail={post.authorEmail}
              createdAt={post.createdAt}
              catName={post.catName}
            />
          ))
        ) : (
          <div>No items to display</div>
        )}
      </div>
    </div>
  );
}
