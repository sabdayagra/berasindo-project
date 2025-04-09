"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  isNew?: boolean;
  rating: number;
  viewRate: string;
  desc: string;
  slug: string;
}

const products: Product[] = [
  { id: 1, name: "Beras Putih", slug: "beras-putih", image: "/assets/beras3.png", price: 50000, isNew: true, rating: 5, viewRate: "(5)", desc: "1kg / utuh" },
  { id: 2, name: "Beras Jasmine", slug: "beras-jasmine", image: "/assets/beras2.png", desc: "1kg", price: 50000, rating: 4, viewRate: "(4)" },
  { id: 3, name: "Beras Basmati", slug: "beras-basmati", image: "/assets/beras3.png", desc: "1kg", price: 50000, rating: 5, viewRate: "(5)" },
  { id: 4, name: "Beras Merah", slug: "beras-merah", image: "/assets/beras4.png", desc: "1kg", price: 50000, rating: 4, viewRate: "(4)" },
  { id: 5, name: "Beras Pipih", slug: "beras-pipih", image: "/assets/beras5.png", desc: "1kg", price: 50000, rating: 5, viewRate: "(5)" },
  { id: 6, name: "Beras Jagung", slug: "beras-jagung", image: "/assets/beras6.png", desc: "1kg", price: 50000, rating: 4, viewRate: "(4)" },
  { id: 7, name: "Beras Shirataki", slug: "beras-shirataki", image: "/assets/beras7.png", desc: "1kg", price: 50000, rating: 4, viewRate: "(4)" },
];

const SimillarProducts: React.FC = () => {
  const router = useRouter();
  return (
    <div className="container px-4 lg:px-20 my-16">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-[18px] lg:text-[24px]">Konten Serupa</h3>
          <a href="#" className="text-[#f07e3e] flex items-center hover:underline">
            Lihat Semua <span className="ml-1">→</span>
          </a>
        </div>

        {/* Garis dengan dua warna */}
        <div className="mt-2 h-1 w-full" style={{ background: "linear-gradient(to right, #f07e3e 20%, #e5e7eb 30%)" }}></div>
      </div>

      {/* Carousel */}
      <Carousel className="mt-6">
        <CarouselContent className="-ml-1">
          {products.map((product) => (
            <CarouselItem key={product.id} className="px-2 py-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 gap-5">
              <div className="group ">
                <div className="relative overflow-hidden shadow-md group-hover:shadow-lg rounded-md  duration-500 w-fit px-2 border border-slate-400">
                  {/* <Image src={product.image} alt={product.name} width={1920} height={1080} className="w-[190px] h-[140px] rounded-md" /> */}
                  <Image src={product.image} alt={product.name} width={1920} height={1080} className="w-[190px] h-[140px] rounded-md cursor-pointer" onClick={() => router.push(`/detail/${product.slug}`)} />
                  {/* Add to Cart Button (Appears on Hover) */}
                  {/* <div className="absolute -bottom-20 group-hover:bottom-3 left-3 right-3 duration-500">
                    <button className="py-2 px-5 w-full text-white font-semibold bg-black rounded-md hover:bg-gray-800">Add to Cart</button>
                  </div> */}

                  {/* Action Buttons (Wishlist, View, Save) */}
                  {/* <ul className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                    <li>
                      <button className="size-8 flex items-center justify-center bg-indigo-600 text-white rounded-full hover:bg-indigo-700">❤️</button>
                    </li>
                    <li>
                      <button className="size-8 flex items-center justify-center bg-indigo-600 text-white rounded-full hover:bg-indigo-700">👁</button>
                    </li>
                    <li>
                      <button className="size-8 flex items-center justify-center bg-indigo-600 text-white rounded-full hover:bg-indigo-700">🔖</button>
                    </li>
                  </ul> */}

                  {/* Badge for New Products */}
                  {product.isNew && <span className="absolute top-2 left-4 bg-orange-600 text-white text-xs px-2 py-0.5 rounded">New</span>}

                  {/* Product Info */}
                  <div className="mt-4">
                    <a href="#" className="hover:text-indigo-600 text-lg font-semibold">
                      {product.name}
                    </a>
                    <p className="hover:text-indigo-600 text-base font-semibold">{product.desc}</p>
                    <p className="text-amber-400">
                      {"★".repeat(product.rating)}&nbsp;
                      <span className="text-gray-400">{product.viewRate}</span>
                    </p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="font-semibold">
                        RP. {product.price.toLocaleString("id-ID")} {product.oldPrice && <del className="text-red-600">RP. {product.oldPrice.toLocaleString("id-ID")}</del>}
                      </p>

                      <button className="bg-[#fdf1eb] flex flex-row items-center rounded-full py-[2px] px-[4px] mb-1 gap-1">
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
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </div>
  );
};

export default SimillarProducts;
