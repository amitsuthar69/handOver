import EditProfile from "@/app/ui/dashboard/EditProfile";
import { getUserByEmail } from "@/app/utils/getUserByEmail";

export default async function Page({ params }: { params: { email: string } }) {
  const email = decodeURIComponent(params.email);
  const user = await getUserByEmail(email);
  console.log(user);
  console.log("email from params: ", email);
  return <EditProfile user={user} />;
}

// import EditProfile from "@/app/ui/dashboard/EditProfile";
// import { UserType } from "@/types/userType";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/utils/authOptions";
// const getUser = async (email: string): Promise<UserType | null> => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXTAUTH_URL}/api/edituser/${email}`,
//       { cache: "no-store" }
//     );
//     if (res.ok) {
//       const user = await res.json();
//       return user;
//     }
//   } catch (error) {
//     console.log("error fetching user in frontend", error);
//   }
//   return null;
// };

// export default async function Page({ params }: { params: { email: string } }) {

//   const session = await getServerSession(authOptions);
//   const email = session?.user?.email as string;

//   const user = await getUser(email);

//   const email2 = decodeURIComponent(params.email);

//   console.log(user);
//   console.log("email from session: ", email);
//   console.log("email from params: ", email2);

//   return <EditProfile user={user} />;
// }
