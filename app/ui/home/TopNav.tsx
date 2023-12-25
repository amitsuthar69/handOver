import Link from "next/link";
import Image from "next/legacy/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";

export default async function TopNav() {
  const session = await getServerSession(authOptions);
  return (
    <div className="dark flex p-2 w-full md:px-4 items-center justify-between font-mono text-gray-50 shadow-lg">
      <div className="flex gap-1 items-center">
        <h1 className="text-center text-md font-bold">handOver</h1>
        <Image
          width={25}
          height={25}
          alt="handOver-logo"
          src={"/favicon.ico"}
        />
      </div>
      <Link href={`/dashboard/inventory`}>
        <Image
          className="rounded-full"
          src={
            session?.user?.image
              ? session?.user?.image
              : "/user-placeholder.png"
          }
          alt="user"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
}
