import ItemCard from "@/app/ui/ItemCard";
import { getItems } from "@/app/utils/getItems";
import { Suspense } from "react";
import ItemCardSkeleton from "@/app/ui/ItemCardSkeleton";

export default async function Items() {
  const item = await getItems();
  return (
    <div className="bg-[#1a1a1ae8] p-4 min-h-screen">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {item && item.length > 0 ? (
          item.map((post) => (
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
          <div className="text-gray-50 text-center">No Items!</div>
        )}
      </div>
    </div>
  );
}
