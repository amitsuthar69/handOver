"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function DashboardNavBar() {
  const pathname = usePathname();
  const links = [
    { name: "inventory", href: "/dashboard/inventory" },
    { name: "exchange", href: "/dashboard/exchange" },
  ];
  return (
    <div className="dark mt-[102px] grid grid-cols-2 p-1 gap-0.5 items-center font-mono border-b border-t border-gray-50 rounded text-gray-50">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "rounded-lg p-2 text-center hover:bg-[#333333] hover:text-gray-50/50",
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
