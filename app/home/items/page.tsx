import ItemCard from "@/app/ui/ItemCard";
import { itemData } from "@/dummy-data";

export default function Items() {
  return (
    <div className="bg-[#1a1a1ae8] p-4">
      <div className="mt-4 grid grid-cols-1 gap-4">
        {itemData && itemData.length > 0 ? (
          itemData.map((post) => (
            <ItemCard
              key={post.id}
              id={post.id}
              author={post.author}
              description={post.description}
              price={post.price}
              imageUrl={post.imageUrl}
              authorEmail={"sutharamit707@gmal.com"}
              createdAt={post.datePublished}
            />
          ))
        ) : (
          <div>No items to display</div>
        )}
      </div>
    </div>
  );
}
