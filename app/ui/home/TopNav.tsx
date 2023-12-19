import Link from "next/link";

export default function TopNav() {
  return (
    <div className="flex gap-4">
      <div className="logo">Logo</div>
      <Link href={`/dashboard/inventory`}>icon</Link>
    </div>
  );
}
