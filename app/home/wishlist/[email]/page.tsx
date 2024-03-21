import ItemCard from "@/app/ui/ItemCard";
import ItemCardSkeleton from "@/app/ui/ItemCardSkeleton";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
import { getWishlistItems } from "@/app/utils/getItems";
import { redirect } from "next/navigation";

export default async function Wishlist({
  params,
}: {
  params: { email: string };
}) {
  const session = await getServerSession(authOptions);
  const email = decodeURIComponent(params.email);
  const items = await getWishlistItems(email);

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="bg-[#1a1a1ae8] mt-12 p-6 min-h-screen">
      <h1 className="font-mono text-gray-50/50 text-center">
        Your wishlist items...
      </h1>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items && items.length > 0 ? (
          items.map((item) => (
            <Suspense key={item.id} fallback={<ItemCardSkeleton />}>
              <ItemCard
                key={item.id}
                id={item.id}
                author={{
                  id: item.author.id,
                  name: item.author.name,
                  phone: item.author.phone,
                }}
                description={item.description}
                price={item.price}
                imageUrl={item.imageUrl}
                authorEmail={item.authorEmail}
                createdAt={item.createdAt}
                catName={item.catName}
              />
            </Suspense>
          ))
        ) : (
          // TODO center this
          <h1 className="font-mono text-gray-50/50 text-center">
            No Requests sent yet...
          </h1>
        )}
      </div>
    </div>
  );
}
