import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      Login Page
      <Link className="underline" href={`/home/items`}>
        skip for now {">>"}
      </Link>
    </div>
  );
}
