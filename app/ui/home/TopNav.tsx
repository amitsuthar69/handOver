import Link from "next/link";
import Image from "next/legacy/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import { getWishlistItems } from "@/app/utils/getItems";
import { getUserRequests } from "@/app/utils/getUserRequests";

export default async function TopNav() {
  const session = await getServerSession(authOptions);
  const email = decodeURIComponent(session?.user?.email as string);
  const items = await getWishlistItems(email);
  const size = items?.length;
  const requests = await getUserRequests(email);

  return (
    <div className="dark flex p-2 w-full md:px-4 items-center justify-between font-mono text-gray-50 shadow-lg">
      <Link className="flex gap-1" href={"/home/items"}>
        <h1 className="text-center text-lg font-bold">handOver</h1>
        <Image
          priority={true}
          width={25}
          height={25}
          alt="handOver-logo"
          src={"/favicon.ico"}
        />
      </Link>
      <div className="flex items-center justify-center gap-3">
        <Link
          href={`/home/requests/${email}`}
          className="flex items-center justify-center"
        >
          {(requests?.length as number) > 0 && (
            <span className="relative z-10 flex h-3 w-3">
              <span className="animate-ping bottom-3 left-7 absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative bottom-3 left-7 inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          )}
          <Image
            src={"/bell.svg"}
            priority={true}
            alt="wishlist"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href={`/home/wishlist/${email}`}
          className="flex items-center justify-center bg-[#333333] border border-gray-500 hover:border-gray-300 px-1 py-0.5 rounded-md gap-0.5 "
        >
          <Image
            src={"/wishlist.svg"}
            priority={true}
            alt="wishlist"
            width={30}
            height={30}
          />
          <h1 className="text-xl">{size ? size : 0}</h1>
        </Link>
        <Link
          className="flex items-center justify-center"
          href={`/dashboard/inventory`}
        >
          <Image
            priority={true}
            className="rounded-full"
            src={
              session?.user?.image
                ? session?.user?.image
                : "/user-placeholder.png"
            }
            alt="user"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}
