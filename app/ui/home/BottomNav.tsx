import { Category } from "@/types/itemType";
import { getCategories } from "@/app/utils/getCategories";

export default async function BottomNav() {
  const categories = await getCategories();
  return (
    <div className="bg-[#1a1a1aee] sticky top-10 z-10 flex p-2 gap-2 w-full items-center justify-between font-mono shadow-md text-gray-50">
      <input
        type="text"
        placeholder="search..."
        className="outline-none w-1/2 bg-transparent border-b border-gray-50"
      />
      <div className="filter">
        <select
          className="bg-transparent outline-none border p-0.5 rounded"
          name="filter">
          {categories &&
            categories.map((category: Category) => (
              <option
                className="dark"
                key={category.id}
                value={category.catName}>
                {category.catName}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
