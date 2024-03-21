import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import { Request } from "@/types/itemType";

const getUserRequests = async (email: string): Promise<Request[] | null> => {
  try {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email as string;

    if (email !== userEmail) {
      return null;
    }

    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/requests/${email}`,
      {
        cache: "no-store",
      }
    );
    const requests = await res.json();
    return requests;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export { getUserRequests };
