import Link from "next/link";

export default function DashboardNavBar() {
  return (
    <div className="navbar flex gap-4">
      <Link href={`/dashboard/inventory`}>Inventory</Link>
      <Link href={`/dashboard/exchange`}>Exchange</Link>
    </div>
  );
}
