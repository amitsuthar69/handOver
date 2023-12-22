import { ItemType } from "@/types/itemType";

const getItems = async (): Promise<ItemType[] | null> => {
  try {
    const res = await fetch(`/api/items`, {
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
