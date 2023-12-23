import EditProfile from "@/app/ui/dashboard/EditProfile";
import { getUserByEmail } from "@/app/utils/getUserByEmail";

export default async function Page({ params }: { params: { email: string } }) {
  const email = params.email;
  const user = await getUserByEmail(email);
  // console.log(user);
  return <EditProfile user={user} />;
}
