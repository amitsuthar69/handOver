import SignIn from "../ui/SignIn";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home/items");
  }
  return (
    <div className="flex flex-col gap-2 p-4 items-center justify-center font-mono h-screen bg-[#1e1e1e] text-gray-50">
      <SignIn />
    </div>
  );
}
