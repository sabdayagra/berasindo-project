"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname(); // e.g., "/category/ayam"
  const router = useRouter();

  const pathnames = pathname.split("/").filter((x) => x); // ['category', 'ayam']

  return (
    <div className="bg-[#fdf1eb] p-4 rounded-lg">
      <nav className="text-gray-600 text-[16px] flex flex-wrap items-center">
        <button onClick={() => router.push("/")} className="text-gray-500 font-semibold hover:underline cursor-pointer">
          Beranda
        </button>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          return (
            <span key={routeTo} className="flex items-center">
              <span className="mx-2">/</span>
              <Link href={routeTo} className="text-gray-500 capitalize hover:underline">
                {decodeURIComponent(name)}
              </Link>
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
