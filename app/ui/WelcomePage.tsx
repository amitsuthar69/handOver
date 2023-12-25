import Link from "next/link";
import Image from "next/legacy/image";

export default function WelcomePage() {
  return (
    <div className="flex flex-col gap-2 p-4 items-center justify-center font-mono h-screen bg-[#1e1e1e] text-gray-50">
      <div className="flex gap-2 mb-2 border rounded-xl p-2 items-center justify-center">
        <h1 className="text-center text-4xl font-bold">handOver</h1>
        <Image
          priority={true}
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
          className="bg-fuchsia-700 hover:bg-fuchsia-500 border p-2 rounded-md w-full md:w-1/2 text-center text-sm"
          href={`/signin`}>
          Proceed to Sign in {">>"}
        </Link>
        <Link
          className="bg-cyan-700 hover:bg-cyan-500 border p-2 rounded-md w-full md:w-1/2 text-center text-sm"
          href={`/home/items`}>
          Have a sneak peak {">>"}
        </Link>
      </div>
      <p className="text-center text-sm">
        <input
          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
          type="checkbox"
          name="T&C"
          required
        />{" "}
        Check here to indicate that you have read and agree our{" "}
        <Link
          className="links"
          href={
            "https://github.com/amitsuthar69/handOver/blob/main/docs/End-User-Agreement.md"
          }>
          End User Agreement
        </Link>{" "}
        &{" "}
        <Link
          className="links"
          href={
            "https://github.com/amitsuthar69/handOver/blob/main/docs/Privacy-Policy.md"
          }>
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
