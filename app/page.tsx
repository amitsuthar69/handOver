import Link from "next/link";
import Image from "next/legacy/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 p-4 items-center justify-center font-mono h-screen bg-[#1e1e1e] text-gray-50">
      <div className="flex gap-2 mb-2 border rounded-xl p-2 items-center justify-center">
        <h1 className="text-center text-4xl font-bold">handOver</h1>
        <Image
          width={40}
          height={40}
          alt="handOver-logo"
          src={"/favicon.ico"}
        />
      </div>
      <div className="flex flex-col gap-2 text-center text-sm p-2">
        <p>
          <span className="text-green-300">You survived this semester!</span>{" "}
          but you got some books to
          <span className="text-yellow-300"> exchange </span> with other batch
          students?
        </p>
        <p className="text-lg">
          <span className="text-red-300">handOver </span> welcomes you!
        </p>
        <p>
          Make it <span className="text-green-300"> open </span> for exchange,
          and let us handle the chaos!
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 w-full p-2">
        <Link
          className="bg-fuchsia-700 hover:bg-fuchsia-500 border p-2 rounded-md w-full text-center text-sm"
          href={`/signin`}>
          Proceed to Sign in {">>"}
        </Link>
        <Link
          className="bg-cyan-700 hover:bg-cyan-500 border p-2 rounded-md w-full text-center text-sm"
          href={`/home/items`}>
          Have a sneak peak {">>"}
        </Link>
      </div>
    </div>
  );
}
