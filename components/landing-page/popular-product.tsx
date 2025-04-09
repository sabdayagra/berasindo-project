"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const popularProducts = [
  { name: "Beras Putih 1 kg", price: "Rp34.000", originalPrice: "Rp40.000", rating: 4, image: "/assets/beras2.png", discount: true },
  { name: "Beras Jasmine 1 kg", price: "Rp34.000", rating: 4, image: "/assets/beras2.png", discount: false },
  { name: "Beras Basmati 1 kg", price: "Rp34.000", rating: 4, image: "/assets/beras3.png", discount: false },
  { name: "Beras Merah 1 kg", price: "Rp34.000", originalPrice: "Rp40.000", rating: 4, image: "/assets/beras4.png", discount: true },
  { name: "Beras Pipih 1 kg", price: "Rp34.000", originalPrice: "Rp40.000", rating: 4, image: "/assets/beras5.png", discount: true },
  { name: "Beras Pipih 1 kg", price: "Rp34.000", originalPrice: "Rp40.000", rating: 4, image: "/assets/beras6.png", discount: false },
  { name: "Beras Pipih 1 kg", price: "Rp34.000", originalPrice: "Rp40.000", rating: 4, image: "/assets/beras7.png", discount: false },
];

export default function PopularProduct() {
  return (
    <section className="my-8 px-4 lg:px-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[32px] font-bold">Produk Populer</h2>
        <button className="text-[16px] text-[#CB8055] flex items-center gap-1">
          Lihat Semua{" "}
          <span className="text-[#CB8055] text-[16px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 17l5-5l-5-5" />
            </svg>
          </span>
        </button>
      </div>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="-ml-2 sm:-ml-4">
          {popularProducts.map((item, i) => (
            <CarouselItem key={i} className="pl-2 sm:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
              <div className="border rounded-md p-4 relative flex flex-col items-center bg-white shadow-sm w-[264x] h-[327px]">
                {/* Diskon */}
                {item.discount && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">Diskon 50%</span>}

                {/* Gambar */}
                <Image src={item.image} alt={item.name} width={1920} height={1080} className="mb-4 object-contain w-[154px] lg:w-[254px] h-[130px] lg:h-[200px]" />

                {/* Info Produk */}
                <h4 className="text-sm font-medium self-start">{item.name}</h4>
                <div className="flex items-center gap-2 mt-1 self-start">
                  <p className="text-base font-semibold">{item.price}</p>
                  {item.originalPrice && <p className="line-through text-sm text-gray-400">{item.originalPrice}</p>}
                </div>

                {/* Rating */}
                <div className="text-yellow-400 text-xs mt-1 self-start">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>

                {/* cart icon */}
                <div className="absolute bottom-10 right-4 bg-orange-100 rounded-full p-1">
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
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </section>
  );
}
