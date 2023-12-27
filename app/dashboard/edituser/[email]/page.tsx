import EditProfile from "@/app/ui/dashboard/EditProfile";
import { getUserByEmail } from "@/app/utils/getUserByEmail";

export default async function Page({ params }: { params: { email: string } }) {
  const email = decodeURIComponent(params.email);
  const user = await getUserByEmail(email);
  return <EditProfile user={user} />;
}
