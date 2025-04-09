"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="w-full py-0 lg:py-3 px-4 lg:px-20 sticky top-0 z-50 shadow-sm flex items-center justify-between bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image onClick={() => router.push("/")} src="/assets/logo-beras.png" alt="Berasindo" width={1920} height={1080} className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] rounded-full cursor-pointer" />
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center w-full max-w-5xl mx-4 flex-1">
          <button onClick={() => router.push("/category")} className="font-bold cursor-pointer mr-3 text-[14px]">
            Kategori
          </button>
          <div className="flex items-center w-full bg-white border border-gray-300 rounded-full px-[16px] py-[15px]">
            <Search className="text-orange-500 w-4 h-4 mr-2" />
            <input type="text" placeholder="Cari jenis atau merk beras disini..." className="w-full text-sm outline-none bg-transparent placeholder:text-gray-500" />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Icon keranjang */}
          <button onClick={() => router.push("/cart")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3.873 17.02L2.669 9.84c-.182-1.086-.273-1.628.019-1.984c.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356c.292.356.2.898.019 1.984l-1.204 7.18c-.399 2.38-.598 3.569-1.413 4.275C17.9 22 16.726 22 14.378 22H9.622c-2.348 0-3.522 0-4.336-.706c-.815-.705-1.014-1.895-1.413-4.275M17.5 7.5a5.5 5.5 0 1 0-11 0"
              />
            </svg>
          </button>

          {/* Garis vertikal */}
          <div className="border-l-2 h-7 border-slate-300" />

          {/* Tombol menu mobile */}
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" />
              </svg>
            )}
          </button>

          <div className="hidden lg:flex gap-2">
            <Link href="/login">
              <button className="bg-[#f07e3e] hover:bg-white hover:border hover:border-[#f07e3e] hover:text-[#f07e3e] text-white text-sm px-4 py-1.5 rounded-md font-medium">Masuk</button>
            </Link>
            <Link href="/register">
              <button className="border border-[#f07e3e] hover:bg-[#f07e3e] hover:text-white text-orange-500 text-sm px-4 py-1.5 rounded-md font-medium">Daftar</button>
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute bg-[#f7f7f7] dark:bg-slate-600 px-4 py-3 w-fit space-y-3 z-50 right-4">
          <div className="md:hidden flex flex-col items-center w-full max-w-sm justify-center gap-2">
            <button onClick={() => router.push("/category")} className="font-bold cursor-pointer mr-3 text-[14px] text-[#f07e3e]">
              Kategori
            </button>
            <div className="flex items-center w-full bg-white border border-gray-300 rounded-full px-[4px] py-[4px]">
              <Search className="text-[#f07e3e] w-4 h-4 mr-2" />
              <input type="text" placeholder="Cari jenis beras disini..." className="w-full text-sm outline-none bg-transparent placeholder:text-gray-500" />
            </div>
          </div>
          <div className="md:hidden flex gap-2 justify-center">
            <Link href="/login">
              <button className="bg-[#f07e3e] cursor-pointer hover:bg-white hover:border hover:border-[#f07e3e] hover:text-[#f07e3e] text-white text-sm px-4 py-1.5 rounded-md font-medium">Masuk</button>
            </Link>
            <Link href="/register">
              <button className="border cursor-pointer border-[#f07e3e] hover:bg-[#f07e3e] hover:text-white text-orange-500 text-sm px-4 py-1.5 rounded-md font-medium">Daftar</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
