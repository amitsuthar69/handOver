"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/legacy/image";
import Link from "next/link";

export default function ProfileCard({ username, phone, email }: any) {
  // current user status : "authenticated" | "loading" | "unauthenticated"
  const { status, data: session } = useSession();
  return (
    <div className="dark font-mono fixed w-full z-10 top-0 p-4 text-gray-50 flex gap-5 items-center justify-evenly md:justify-start shadow-md">
      <Link href={`/home/items`}>
        <Image
          className="hover:cursor-pointer"
          src={"/arrow-left.svg"}
          priority={true}
          alt="back"
          width={20}
          height={20}
        />
      </Link>
      <Image
        className="rounded-full"
        src={
          session?.user?.image ? session?.user?.image : "/user-placeholder.png"
        }
        priority={true}
        alt="user"
        width={70}
        height={70}
      />
      <div className="details">
        <h1 className="username leading-none text-sm font-semibold">
          {username}
        </h1>
        <h1 className="phone text-gray-50/50">
          {phone ? phone : "phone number"}
        </h1>
        <h1 className="text-red-500 text-sm">
          {phone ? "" : "please add phone number!"}
        </h1>
        {status === "authenticated" ? (
          <div className="btns flex gap-1">
            <Link href={`/dashboard/edituser/${email}`}>
              <button className="edit-btn flex items-center gap-1">
                edit
                <Image
                  src={"/pen-square.svg"}
                  alt="edit"
                  width={15}
                  height={15}
                />
              </button>
            </Link>
            <div className="btn">
              <button
                onClick={() => signOut()}
                className="log-out-btn flex items-center gap-1"
              >
                log out
                <Image
                  src={"/logout.svg"}
                  alt="log-out"
                  width={15}
                  height={15}
                />
              </button>
            </div>
          </div>
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="flex animate-pulse gap-1">
      <div className="bg-gray-700 w-[60px] h-[24px] rounded"></div>
      <div className="bg-gray-700 w-[85px] h-[24px] rounded"></div>
    </div>
  );
}
