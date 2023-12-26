import { ItemType } from "@/types/itemType";

// fetch all items :
const getItems = async (): Promise<ItemType[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/items`, {
      next: {
        revalidate: 60, // Revalidate every 1 minute (1 * 60 seconds)
      },
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
      {
        next: {
          revalidate: 60, // Revalidate every 1 minute (1 * 60 seconds)
        },
      }
    );
    const { items } = await res.json();
    return items;
  } catch (error) {
    console.log("error fetching useritems in frontend : ", error);
  }
  return null;
};

export { getItemsByCatName };
