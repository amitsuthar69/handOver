import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Inventory() {
  // route protection
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return <div>User Inventory</div>;
}
