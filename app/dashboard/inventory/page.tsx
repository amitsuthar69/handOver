import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";
import { getItemsByUser } from "@/app/utils/getItems";
import ItemCard from "@/app/ui/ItemCard";
import { ItemType } from "@/types/itemType";

export default async function Inventory() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  const email = session.user?.email;
  let items: ItemType[] = [];
  if (email) {
    items = await getItemsByUser(email);
  }

  return (
    <div className="bg-[#1a1a1ae8] p-4 font-mono min-h-screen">
      <h1 className="text-center text-sm text-gray-50/70">
        {items && items.length > 0 ? (
          "Your Items"
        ) : (
          <div>
            <p>No Items to display.</p>
            <p className="text-xs text-gray-50/50">
              Tip: To create your first item, go to exchange.
            </p>
          </div>
        )}
      </h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items &&
          items.map((post: ItemType) => (
            <ItemCard
              key={post.id}
              id={post.id}
              author={
                post.author
                  ? {
                      id: post.author.id,
                      name: post.author.name,
                      phone: post.author.phone,
                    }
                  : {
                      id: post.author,
                      name: session.user?.name as string,
                      phone: "0",
                    }
              }
              description={post.description}
              price={post.price}
              imageUrl={post.imageUrl}
              authorEmail={post.authorEmail}
              createdAt={post.createdAt}
              catName={post.catName}
            />
          ))}
      </div>
    </div>
  );
}
