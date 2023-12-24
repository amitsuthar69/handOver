import EditItemForm from "@/app/ui/dashboard/EditItemForm";
import { ItemType } from "@/types/itemType";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";

const getItemById = async (id: string): Promise<ItemType | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/items/${id}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const item = await res.json();
      //   console.log(item);
      return item;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default async function EditItem({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }

  const id = params.id;
  const item = await getItemById(id);
  //   console.log(id);
  //   console.log(item);

  return <>{item ? <EditItemForm item={item} /> : <div>Invalid Post!</div>}</>;
}
