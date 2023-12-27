"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function MiddleNav() {
  const pathname = usePathname();
  const links = [
    { name: "items", href: "/home/items" },
    { name: "wishlist", href: "/home/wishlist" },
  ];
  return (
    <div className="dark grid mt-[54px] grid-cols-2 p-0.5 gap-0.5 items-center font-mono text-gray-50">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "p-2 text-center border border-gray-500/50 hover:bg-[#333333] transition duration-300 hover:ease-in-out hover:text-gray-50/50",
              {
                "bg-[#33333393]": pathname === link.href,
              }
            )}>
            <button>{link.name}</button>
          </Link>
        );
      })}
    </div>
  );
}
