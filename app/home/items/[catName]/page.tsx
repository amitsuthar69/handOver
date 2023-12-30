import { getItemsByCatName } from "@/app/utils/getItems";
import ItemCard from "@/app/ui/ItemCard";
import { Suspense } from "react";
import ItemCardSkeleton from "@/app/ui/ItemCardSkeleton";
import { ItemType } from "@/types/itemType";
import Filter from "@/app/ui/home/Filter";

export default async function ItemByCatName({
  params,
}: {
  params: { catName: string };
}) {
  const catName = decodeURIComponent(params.catName);
  const itemsByCatName = await getItemsByCatName(catName);
  return (
    <div>
      <div className="bg-[#1a1a1ae8] mt-14 p-6 min-h-screen">
        <div
          className={`w-fit -mt-4 p-1 text-gray-50 rounded font-mono font-semibold text-xs ${
            catName === "sell"
              ? "bg-red-400/50 border border-red-500"
              : "bg-green-400/50 border border-green-500"
          }`}>
          {catName === "sell" ? "On Sale" : "On Exchange"}
        </div>
        <div className="sticky top-14 -my-6 -mx-6 flex justify-end z-10">
          <Filter />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {itemsByCatName && itemsByCatName.length > 0 ? (
            itemsByCatName.map((post: ItemType) => (
              <Suspense key={post.id} fallback={<ItemCardSkeleton />}>
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
              </Suspense>
            ))
          ) : (
            <div className="text-gray-50 text-center">{`No Items for ${
              catName === "sell" ? "Sale" : "Exchange"
            }!`}</div>
          )}
        </div>
      </div>
    </div>
  );
}
