import EditProfile from "@/app/ui/dashboard/EditProfile";
import { UserType } from "@/types/userType";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";

const getUser = async (email: string): Promise<UserType | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/edituser/${email}`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const user = await res.json();
      return user;
    }
  } catch (error) {
    console.log("error fetching user in frontend", error);
  }
  return null;
};

export default async function Page({ params }: { params: { email: string } }) {
  const session = await getServerSession(authOptions);
  const email = params.email;
  const user = await getUser(email);
  // console.log(user);
  // console.log(email);
  return <EditProfile user={user} />;
}
