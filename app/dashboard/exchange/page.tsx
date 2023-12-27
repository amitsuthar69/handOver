import HandOverForm from "@/app/ui/dashboard/HandOverForm";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";

export default async function Exchnage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  return (
    <div>
      <HandOverForm />
    </div>
  );
}
