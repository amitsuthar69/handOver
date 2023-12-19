import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";

export default async function Inventory() {
  // route protection
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  return <div>User Inventory</div>;
}
