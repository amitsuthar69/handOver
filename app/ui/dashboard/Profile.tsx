import ProfileCard from "./ProfileCard";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const username = session?.user?.name as string;
  return (
    <div>
      <ProfileCard username={username} />
    </div>
  );
}
