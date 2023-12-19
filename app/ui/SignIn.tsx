"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold mt-8">Sign in</h1>
      <div className="mt-2 p-2 flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => signIn("github")}
          className="flex items-center justify-center p-2 gap-2 border rounded-full cursor-pointer hover:bg-slate-100/70 transition">
          <Image width={35} height={35} src={`/github.svg`} alt="github-icon" />
          <h1>Sign in with GitHub</h1>
        </button>
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center p-2 gap-2 border rounded-full cursor-pointer hover:bg-slate-100/70 transition">
          <Image width={35} height={35} src={`/google.svg`} alt="google-icon" />
          <h1>Sign in with Google</h1>
        </button>
      </div>
    </>
  );
}
