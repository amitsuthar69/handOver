import { ItemType } from "@/types/itemType";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

// fetch all items :
const getItems = async (): Promise<ItemType[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/items`, {
      cache: "no-store",
    });

    if (res.ok) {
      const items = await res.json();
      return items;
    }
  } catch (error) {
    console.log("error fetching items in frontend: ", error);
  }
  return null;
};
export { getItems };

// fetch items by user
const getItemsByUser = async (email: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/useritems/${email}`,
      { cache: "no-store" }
    );
    const { items } = await res.json();
    return items;
  } catch (error) {
    console.log("error fetching useritems in frontend : ", error);
  }
  return null;
};
export { getItemsByUser };

// fetch items by category
const getItemsByCatName = async (catName: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/categories/${catName}`,
      { cache: "no-store" }
    );
    const { items } = await res.json();
    return items;
  } catch (error) {
    console.log("error fetching useritems in frontend : ", error);
  }
  return null;
};

export { getItemsByCatName };

// fetch item by id
const getItemById = async (id: string): Promise<ItemType | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/items/${id}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const item = await res.json();
      return item;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export { getItemById };

const getWishlistItems = async (email: string): Promise<ItemType[] | null> => {
  try {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email as string;

    if (email !== userEmail) {
      return null;
    }

    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/wishlist/${email}`,
      {
        cache: "no-store",
      }
    );
    const wishlistItems = await res.json();
    return wishlistItems;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export { getWishlistItems };
