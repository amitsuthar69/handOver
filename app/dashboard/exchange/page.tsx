import HandOverForm from "@/app/ui/dashboard/HandOverForm";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";

export default async function Exchnage() {
  // route protection
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  // console.log(session); //verifying session
  return (
    <div>
      <HandOverForm />
    </div>
  );
}
