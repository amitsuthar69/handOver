import ProfileCard from "./ProfileCard";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import { getUserByEmail } from "@/app/utils/getUserByEmail";


export default async function Profile() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const username = session?.user?.name;

  let phone = "Phone Number";
  if (email) {
    const user = await getUserByEmail(email);
    phone = user?.phone as string;
  }

  return (
    <div>
      <ProfileCard username={username} phone={phone} email={email} />
    </div>
  );
}
