import Link from "next/link";
import Image from "next/legacy/image";

export default function WelcomePage() {
  return (
    <div className="flex flex-col gap-2 p-4 items-center justify-center font-mono h-screen bg-[url('/layered-waves-sm.svg')] md:bg-[url('/layered-waves-lg.svg')] bg-no-repeat bg-cover bg-[#001220] text-gray-50">
      <div className="flex gap-2 border mb-2 rounded-xl p-2 items-center justify-center">
        <h1 className="text-center text-5xl font-bold">handOver</h1>
        <Image
          priority={true}
          width={40}
          height={40}
          alt="handOver-logo"
          src={"/favicon.ico"}
        />
      </div>
      <div className="flex flex-col gap-2 text-center text-sm">
        <p className="md:text-lg self-center md:w-2/3">
          <span className="text-green-300">You survived this semester!</span>{" "}
          but you got some books to
          <span className="text-yellow-300"> exchange </span> with other batch
          students?
        </p>
        <p className="md:text-xl text-lg">
          <span className="text-red-300">handOver </span> welcomes you!
        </p>
        <p className="md:text-lg">
          Make it <span className="text-green-300"> open </span> for exchange,
          and let us handle the chaos!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full p-2">
        <Link
          className="bg-fuchsia-700 hover:bg-fuchsia-500 border p-2 rounded-md w-full md:w-fit text-center text-sm"
          href={`/signin`}>
          Proceed to Sign in {">>"}
        </Link>
        <Link
          className="bg-cyan-700 hover:bg-cyan-500 border p-2 rounded-md w-full md:w-fit text-center text-sm"
          href={`/home/items`}>
          Have a sneak peek {">>"}
        </Link>
      </div>
      <p className="text-center text-xs">
        I agree to the{" "}
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
      <p className="mt-4 text-sm">
        Made with ❤️ by{" "}
        <Link
          className="font-semibold"
          href={"https://github.com/amitsuthar69"}>
          Amit Suthar
        </Link>
      </p>
    </div>
  );
}
