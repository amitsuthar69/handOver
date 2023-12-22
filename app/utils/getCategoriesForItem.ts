// Defined this getCategories again with url /api/categoies because process.env.NEXTAUTH_URL is not working for dashboard :(
import { Category } from "@/types/itemType";

const getCategories = async (): Promise<Category[] | null> => {
  try {
    const res = await fetch(`/api/categories`);
    if (res.ok) {
      const categories = await res.json();
      return categories;
    }
  } catch (error) {
    console.log("error fetching cats from api: ", error);
  }
  return null;
};

export { getCategories };
