import { UserType } from "@/types/userType";

const getUserById = async (id: string): Promise<UserType | null> => {
  try {
    const res = await fetch(`/api/user/${id}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const user = await res.json();
      return user;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export { getUserById };
