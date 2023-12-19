import Link from "next/link";
import Image from "next/image";

export default function TopNav() {
  return (
    <div className="dark flex p-2 gap-2 w-full items-center justify-between font-mono text-gray-50">
      <div className="flex gap-2 items-center">
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
          src={"/user-placeholder.png"}
          alt="user"
          width={25}
          height={25}
        />
      </Link>
    </div>
  );
}
