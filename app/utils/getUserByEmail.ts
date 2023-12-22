import { UserType } from "@/types/userType";

const getUserByEmail = async (email: string): Promise<UserType | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/edituser/${email}`
    );
    if (res.ok) {
      const user = await res.json();
      return user;
    }
  } catch (error) {
    console.log("error fetching user by email in frontend : ", error);
  }
  return null;
};

export { getUserByEmail };
