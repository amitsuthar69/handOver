import Link from "next/link";

export default function MiddleNav() {
  return (
    <div className="flex gap-4">
      <Link href={`/`}>HP items</Link>
      <Link href={`/wishlist`}>Wishlist</Link>
    </div>
  );
}
