import EditItemForm from "@/app/ui/dashboard/EditItemForm";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";
import { getItemById } from "@/app/utils/getItems";

export default async function EditItem({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  const id = params.id;
  const item = await getItemById(id);
  return <>{item ? <EditItemForm item={item} /> : <div>Invalid Post!</div>}</>;
}
