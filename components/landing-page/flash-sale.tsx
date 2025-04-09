"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { Reveal } from "../ui/Reveal";

export default function FlashSale() {
  const router = useRouter();
  return (
    <>
      <Reveal>
        <div className="bg-[#f7f7f7] py-8 px-4 md:px-20 my-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[20px] md:text-[32px] font-bold">Flash Sale Hari Ini</h2>
            <button className="text-[#CB8055] text-[16px] flex items-center gap-1">
              Lihat Semua{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 17l5-5l-5-5" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row w-full justify-between">
            {/* Kartu besar */}
            <div className="bg-white border border-orange-200 rounded-md p-4 flex flex-col items-center justify-between w-full lg:w-[40%]">
              <div className="flex gap-2 mb-2 self-start">
                <span className="bg-[#EA4B48] text-white text-xs font-semibold px-2 py-1 rounded">Diskon 50%</span>
                <span className="bg-[#2388FF] text-white text-xs font-semibold px-2 py-1 rounded">Best Sale</span>
              </div>
              <Image onClick={() => router.push("/detail")} src="/assets/beras1.png" alt="beras putih" width={1920} height={1080} className="mb-4 cursor-pointer w-[325px ] lg:w-[525px] h-[250px] lg:h-[446px]" />
              <button className="bg-[#F07E3E] text-white text-sm py-2 px-4 rounded-full w-full flex items-center justify-center gap-1 mb-4">
                Tambah ke Keranjang <ShoppingCart size={16} />
              </button>
              <h3 className="text-[18px] text-center">Beras Putih</h3>
              <p className="text-[24px] font-bold text-black">
                Rp16.000 <span className="line-through text-gray-400 text-sm">Rp20.000</span>
              </p>
              <div className="text-yellow-400 text-[12px]">
                ★★★★★ <span className="text-gray-400 text-[12px]">(524 Ulasan)</span>
              </div>
              <p className="text-[14px] text-gray-400 mt-2">Cepat! Penawaran berakhir dalam:</p>
              <div className="flex gap-2 mt-1 text-base font-bold">
                <div className="text-center">
                  01 <span className="block font-normal text-[10px]">HARI</span>
                </div>
                <div className="text-center">
                  23 <span className="block font-normal text-[10px]">JAM</span>
                </div>
                <div className="text-center">
                  34 <span className="block font-normal text-[10px]">MENIT</span>
                </div>
                <div className="text-center">
                  57 <span className="block font-normal text-[10px]">DETIK</span>
                </div>
              </div>
            </div>

            {/* Produk lainnya */}
            <div className="grid grid-cols-2 md:grid-cols-3">
              {[
                { name: "Beras Coklat", price: "Rp19.000", rating: 5, image: "/assets/beras2.png" },
                { name: "Beras Basmati", price: "Rp34.000", rating: 4, image: "/assets/beras3.png" },
                { name: "Beras Putih", price: "Rp15.000", rating: 4, image: "/assets/beras4.png" },
                { name: "Beras Jasmine", price: "Rp30.000", rating: 5, image: "/assets/beras5.png" },
                { name: "Beras Merah", price: "Rp50.000", rating: 4, image: "/assets/beras6.png" },
                { name: "Beras Pipih", price: "Rp35.000", rating: 5, image: "/assets/beras7.png" },
              ]
                .slice(0, 6)
                .map((item, i) => (
                  <div key={i} className="bg-white p-2 rounded-md relative flex flex-col items-center shadow-sm">
                    <Image src={item.image} alt={item.name} width={1920} height={1080} className="w-[100px] lg:w-[264px] h-[100px] lg:h-[270px] mb-2" />
                    <h4 className="text-[14px] self-start">{item.name}</h4>
                    <p className="font-semibold text-[16px] self-start">{item.price}</p>
                    <div className="text-yellow-400 text-xs mt-1 self-start">
                      {"★".repeat(item.rating)}
                      {"☆".repeat(5 - item.rating)}
                    </div>
                    <div className="absolute bottom-8 right-4 bg-[#fdf1eb] rounded-full p-1 border">
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
                ))}
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
