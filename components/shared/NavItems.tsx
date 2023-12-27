"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { headerLinks } from "@/constants";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map(({ label, route }) => {
        const isActive = pathname === route;

        return (
          <li
            key={route}
            className={`${isActive && "text-primary-500"} flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={route}>{label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
