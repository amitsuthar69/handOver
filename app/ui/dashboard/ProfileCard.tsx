"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  // current user status : "authenticated" | "loading" | "unauthenticated"
  const { status } = useSession();
  return (
    <div className="dark font-mono p-4 text-gray-50 flex gap-2 items-center justify-evenly">
      <Link href={`/home/items`}>
        <Image
          className="absolute z-10 top-2 left-2 hover:cursor-pointer"
          src={"/arrow-left.svg"}
          alt="back"
          width={20}
          height={20}
        />
      </Link>
      <Image src={"/user-placeholder.png"} alt="user" width={70} height={70} />
      <div className="details">
        <h1 className="username leading-none">username</h1>
        <h1 className="phone">phone number</h1>
        <div className="btns flex gap-2">
          <Link href={"/dashboard/edit"}>
            <button className="edit-btn flex items-center gap-0.5">
              edit{" "}
              <Image
                src={"/pen-square.svg"}
                alt="edit"
                width={15}
                height={15}
              />
            </button>
          </Link>
          <div className="btn">
            {status === "authenticated" && (
              <button onClick={() => signOut()} className="log-out-btn">
                log out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
