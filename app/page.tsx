import Link from "next/link";
import SignIn from "./ui/SignIn";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center h-screen bg-[#1e1e1e] text-gray-50">
      <div className="flex gap-2 items-center justify-center mt-8">
        <h1 className="text-center text-2xl font-bold">handOver</h1>
        <Image
          width={30}
          height={30}
          alt="handOver-logo"
          src={"/favicon.ico"}
        />
      </div>
      <SignIn />
      <Link
        className="hover:underline text-center text-sm"
        href={`/home/items`}>
        skip for now {">>"}
      </Link>
    </div>
  );
}
