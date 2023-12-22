import ProfileCard from "./ProfileCard";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";

const getUser = async (email: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/useritems/${email}`,
      { cache: "no-store" }
    );
    const { phone } = await res.json();
    return phone;
  } catch (error) {
    console.log("error getting user by email", error);
    return null;
  }
};

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const username = session?.user?.name;
  let phone = "Phone Number";
  if (email) {
    phone = await getUser(email);
  }

  return (
    <div>
      <ProfileCard username={username} phone={phone} email={email} />
    </div>
  );
}

// const getUser = async (email: string) => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXTAUTH_URL}/api/useritems/${email}`
//     );
//     const { phone } = await res.json();
//     return phone;
//   } catch (error) {
//     console.log("error getting user by email", error);
//     return null;
//   }
// };

// export default async function Profile() {
//   const session = await getServerSession(authOptions);
//   const email = session?.user?.email;
//   const username = session?.user?.name;
//   let phone = "Phone Number";
//   if (email) {
//     phone = await getUser(email);
//   }

//   return (
//     <div>
//       <ProfileCard username={username} phone={phone} />
//     </div>
//   );
// }
