import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";

import { Landing } from "@/app/ui/Landing/Landing";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home/items");
  }
  return <Landing />;
}
