"use client";

import Breadcrumbs from "@/components/landing-page/breadcrumb";
import CheckboxFilter from "@/components/landing-page/checkbox-filter";
import PopularCategories from "@/components/landing-page/popular-category";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const CategoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    {
      name: "Beras Putih",
      desc: "1 kg / utuh",
      price: 34000,
      img: "/assets/beras3.png",
      rating: 4,
      slug: "beras-putih-1",
    },
    {
      name: "Beras Jasmine",
      desc: "1 kg",
      price: 32000,
      img: "/assets/beras2.png",
      rating: 4,
      slug: "beras-jasmine",
    },
    {
      name: "Beras Basmati",
      desc: "1 kg",
      price: 75000,
      img: "/assets/beras3.png",
      rating: 4,
      slug: "beras-basmati",
    },
    {
      name: "Beras Merah",
      desc: "1 kg",
      price: 57000,
      img: "/assets/beras4.png",
      rating: 4,
      slug: "beras-merah",
    },
    {
      name: "Beras Jagung",
      desc: "1 kg",
      price: 35000,
      img: "/assets/beras5.png",
      rating: 4,
      slug: "beras-jagung",
    },
    {
      name: "Beras Pipih",
      desc: "1 liter",
      price: 16000,
      img: "/assets/beras6.png",
      rating: 4,
      slug: "beras-pipih",
    },
    {
      name: "Beras Coklat",
      desc: "1 kg",
      price: 19000,
      img: "/assets/beras7.png",
      rating: 4,
      slug: "beras-coklat",
    },
    {
      name: "Beras Putih",
      desc: "1 kg",
      price: 65000,
      img: "/assets/beras1.png",
      rating: 4,
      slug: "beras-putih-1",
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-gray-500 text-sm">(4)</span>
    </div>
  );

  const ProductCard = ({ name, desc, price, img, rating, slug }: (typeof products)[0]) => (
    <div className="border rounded-xl p-4 flex flex-col justify-between shadow-sm">
      <Link href={`/detail/${slug}`}>
        <img src={img} alt={name} className="w-full h-32 object-contain" />
      </Link>

      <div className="mt-3">
        <h4 className="text-gray-800 font-semibold text-base">{name}</h4>
        <p className="text-sm text-gray-500">{desc}</p>
        <StarRating rating={rating} />
        <div className="flex justify-between items-center mt-2 gap-1">
          <p className="text-gray-600 font-bold text-xs lg:text-base">Rp{price.toLocaleString("id-ID")}</p>
          <Button className="bg-[#fdf1eb] text-xs lg:text-base flex flex-row items-center py-[1px] lg:py-[2px] px-[2px] lg:px-[4px] mb-1 gap-1 rounded-md text-black hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3.873 17.02L2.669 9.84c-.182-1.086-.273-1.628.019-1.984c.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356c.292.356.2.898.019 1.984l-1.204 7.18c-.399 2.38-.598 3.569-1.413 4.275C17.9 22 16.726 22 14.378 22H9.622c-2.348 0-3.522 0-4.336-.706c-.815-.705-1.014-1.895-1.413-4.275M17.5 7.5a5.5 5.5 0 1 0-11 0"
                color="currentColor"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20 pb-14 flex flex-col pt-16 lg:pt-36">
      <Breadcrumbs />
      <PopularCategories />

      <div className="flex flex-col lg:flex-row my-4 ">
        {/* Konten Kiri */}
        <div className="bg-[#fdf1eb] gap-4 flex flex-col p-[20px] w-full lg:w-[20%] rounded-lg h-fit">
          <h1 className="font-bold text-[18px] ">Lokasi</h1>
          <div className="relative w-full">
            {/* Icon Search */}
            <div className="absolute inset-y-0 left-3 flex items-center text-[#fdf1eb]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7" />
              </svg>
            </div>

            {/* Input Box */}
            <input placeholder="Cari Lokasi..." className="border border-[#fdf1eb] pl-10 pr-4 py-2 w-full rounded-lg bg-white focus:outline-none" />
          </div>
          <CheckboxFilter />
        </div>

        {/* Konten Kanan */}
        <div className="ml-0 lg:ml-4 w-full lg:w-[80%]">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 lg:mt-0 mt-4 mb-0 lg:mb-4">
            <p className="text-sm text-gray-700">
              Menampilkan 1 - 60 item di Lokasi <strong>&apos;DKI Jakarta&apos;</strong>
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-700">Urutkan berdasarkan</p>
              <select className="border text-sm rounded-lg px-3 py-1">
                <option>Harga Rendah ke Tinggi</option>
                <option>Harga Tinggi ke Rendah</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            <Button variant="outline" size="icon" className="w-8 h-8" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {[1, 2, 3].map((n) => (
              <Button key={n} variant={n === currentPage ? "default" : "outline"} className="w-8 h-8 px-0" onClick={() => setCurrentPage(n)}>
                {n}
              </Button>
            ))}
            <Button variant="outline" size="icon" className="w-8 h-8" onClick={() => setCurrentPage((p) => p + 1)}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
