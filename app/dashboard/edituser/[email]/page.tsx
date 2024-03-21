import EditProfile from "@/app/ui/dashboard/EditProfile";
import { getUserByEmail } from "@/app/utils/getUserByEmail";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";

export default async function Page({ params }: { params: { email: string } }) {
  const session = await getServerSession(authOptions)
  const email = decodeURIComponent(params.email);
  if (email === session?.user?.email) {
    const user = await getUserByEmail(email);
    return <EditProfile user={user} />;
  } else {
    return <h1>You are not that guy! Huh...</h1>
  }
}
