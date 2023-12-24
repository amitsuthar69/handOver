"use client";
import Image from "next/legacy/image";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <>
      <div className="flex gap-2 mb-2 border rounded-xl p-2 items-center">
        <h1 className="text-center text-4xl font-bold">handOver</h1>
        <Image
          width={40}
          height={40}
          alt="handOver-logo"
          src={"/favicon.ico"}
        />
      </div>
      <h1 className="text-center text-2xl font-bold mt-4">Sign in</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => signIn("github")}
          className="flex items-center justify-center p-2 px-4 gap-2 border rounded-full cursor-pointer hover:bg-slate-600/20 transition">
          <Image width={30} height={30} src={`/github.png`} alt="github-icon" />
          <h1 className="text-gray-50/50">Sign in with GitHub</h1> {/* temporarily fainting it */}
        </button>
        <h1 className="text-xs text-center text-red-300/80 -mt-2">
          *Github Login is currently unavailable,
        </h1>
        <h1 className="text-xs text-center text-red-300/80 -mt-4">
          please try login with Google!
        </h1>
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center p-2 px-4 gap-2 border rounded-full cursor-pointer hover:bg-slate-600/20 transition">
          <Image width={30} height={30} src={`/google.svg`} alt="google-icon" />
          <h1>Sign in with Google</h1>
        </button>
      </div>
    </>
  );
}
