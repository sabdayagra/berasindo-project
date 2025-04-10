"use client";

import Breadcrumbs from "@/components/landing-page/breadcrumb";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import DescReview from "@/components/landing-page/desc-review";
import SimillarProducts from "@/components/landing-page/simillar-product";
import { useRouter } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";

type Product = {
  name: string;
  price: number;
  sold: number;
  rating: number;
  reviewCount: number;
  sizes: { label: string; price: number }[];
  images: string[];
};

const product: Product = {
  name: "BERAS PUTIH",
  price: 34000,
  sold: 20,
  rating: 4,
  reviewCount: 20,
  sizes: [
    { label: "Beras Putih 1 kg", price: 34000 },
    { label: "Beras Putih 2 kg", price: 68000 },
  ],
  images: ["/assets/beras1.png", "/assets/beras1.png", "/assets/beras1.png", "/assets/beras1.png"],
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const router = useRouter();

  const total = selectedSize.price * quantity;

  return (
    <div className="w-screen overflow-x-hidden pb-4 pt-16 lg:pt-36">
      <>
        <Reveal>
          <div className="px-4 lg:px-20 mb-4">
            <Breadcrumbs />
          </div>
        </Reveal>
      </>

      <>
        <Reveal>
          <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-20 w-full justify-between">
            {/* Left - Images */}
            <div className="flex flex-col items-center w-full lg:w-[60%]">
              <div className="border rounded-md overflow-hidden w-full">
                <Image src={selectedImage} alt={product.name} width={1920} height={1080} className="w-[500px] h-auto object-contain max-h-[350px]" />
              </div>
              <div className="flex gap-6 mt-4 flex-row justify-between">
                {product.images.map((img, idx) => (
                  <button key={idx} onClick={() => setSelectedImage(img)} className={`border p-1 rounded-md ${selectedImage === img ? "ring-2 ring-[#fdf1eb]" : ""}`}>
                    <Image src={img} alt={`thumb-${idx}`} width={1920} height={1080} className="w-[60px] lg:w-[103px] h-[60px] lg:h-[100px]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Product Info */}
            <div className="flex flex-col lg:flex-row w-full gap-8 lg:justify-between">
              {/* Detail */}
              <div className="flex flex-col w-full lg:w-[60%] space-y-4">
                <p className="text-[32px] font-semibold text-gray-800 mb-4 lg:hidden flex">Rp{selectedSize.price.toLocaleString("id-ID")}</p>
                <h1 className="text-[20px] font-bold uppercase">{product.name}</h1>
                <div className="flex flex-row gap-4">
                  <p className="text-[16px] text-gray-600 mb-2">Terjual: {product.sold}</p>
                  <div className="flex items-center gap-1 text-yellow-400 text-[16px]">
                    {"★".repeat(product.rating)} <span className="text-gray-500 ml-1">({product.reviewCount})</span>
                  </div>
                </div>

                <p className="text-[32px] font-semibold text-gray-800 mb-4 hidden lg:flex">Rp{selectedSize.price.toLocaleString("id-ID")}</p>
                <div className="border border-b-2 border-slate-300 mb-4"></div>

                <div className="mb-4 gap-4">
                  <p className="font-semibold mb-2 text-[16px]">Pilih Ukuran:</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSize(size)}
                        className={`flex items-center gap-2 border rounded-md px-2 py-2 text-[12px] w-fit ${selectedSize.label === size.label ? "border-[#f07e3e] text-[#f07e3e] font-semibold" : "text-gray-600"}`}
                      >
                        <Image alt={`option-${idx}`} width={1920} height={1080} src={product.images[idx] || "/assets/beras1.png"} className="w-[40px] h-[40px] object-cover rounded" />
                        <div className="text-left">
                          <p className="leading-tight text-[12px]">{size.label}</p>
                          <p className="font-semibold text-black text-[12px]">Rp{size.price.toLocaleString("id-ID")}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Total Box */}
              <div className="border  rounded-md p-4 shadow-sm w-full lg:w-[350px] h-[350px] self-start bg-[#fdf1eb]">
                <p className="text-[14px] text-gray-500 mb-3">TOTAL HARGA:</p>
                <p className="text-[32px] font-bold mb-4">Rp{total.toLocaleString("id-ID")}</p>

                {/* Quantity */}
                <div className="flex items-center gap-2 mb-4 bg-white w-full justify-between border border-slate-300 rounded-lg px-[21px] py-[12px]">
                  <button className="px-2 py-1 cursor-pointer" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                    -
                  </button>
                  <span className="text-[14px] font-semibold">{quantity}</span>
                  <button className="px-2 py-1 cursor-pointer" onClick={() => setQuantity((q) => q + 1)}>
                    +
                  </button>
                </div>

                {/* Buttons */}
                <button onClick={() => router.push("/cart")} className="w-full bg-[#f07e3e] cursor-pointer hover:bg-white text-white hover:text-[#f07e3e] font-semibold py-[12px] rounded-lg mb-2 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
                  </svg>
                  Tambahkan ke Keranjang
                </button>
                <button className="w-full bg-white cursor-pointer border border-[#f07e3e] hover:bg-[#f07e3e] text-[#f07e3e] hover:text-white font-semibold py-[12px] rounded-lg mb-2 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.644-1.142l-4.29 1.117a.85.85 0 0 1-1.037-1.036l1.116-4.289A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m1.252 11H8.75l-.102.007a.75.75 0 0 0 0 1.486l.102.007h4.502l.101-.007a.75.75 0 0 0 0-1.486zm1.998-3.5h-6.5l-.102.007a.75.75 0 0 0 0 1.486L8.75 11h6.5l.102-.007a.75.75 0 0 0 0-1.486z"
                    />
                  </svg>
                  Obrolan
                </button>

                <div className="flex justify-between text-[14px] text-gray-600 mt-4">
                  <button className="flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137" />
                    </svg>{" "}
                    Wishlist
                  </button>
                  <button className="flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22"
                      />
                    </svg>{" "}
                    Bagikan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </>
      <>
        <Reveal>
          <div className="px-4 lg:px-20">
            <div className="border border-b-2 border-slate-200 my-8"></div>
          </div>
        </Reveal>
      </>

      <>
        <Reveal>
          <DescReview />
        </Reveal>
      </>

      <div className="px-4 lg:px-20">
        <div className="border border-b-2 border-slate-200 my-8"></div>
      </div>

      <>
        <Reveal>
          <SimillarProducts />
        </Reveal>
      </>
    </div>
  );
}
