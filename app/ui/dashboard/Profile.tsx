"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Profile() {
  // current user status : "authenticated" | "loading" | "unauthenticated"
  const { status } = useSession();
  return (
    <div className="flex gap-4">
      <div className="pfp">pfp</div>
      <div className="bio">bio</div>
      {status === "authenticated" ? (
        <button onClick={() => signOut()}>Log Out</button>
      ) : (
        <Link href={"/"}>Log In</Link>
      )}
    </div>
  );
}
