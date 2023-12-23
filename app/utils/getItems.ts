import { ItemType } from "@/types/itemType";

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
