"use client";

import Breadcrumbs from "@/components/landing-page/breadcrumb";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  checked: boolean;
};

const page: React.FC = () => {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Beras Putih",
      price: 34000,
      image: "/assets/beras3.png",
      quantity: 1,
      checked: true,
    },
  ]);

  const allChecked = items.every((item) => item.checked);
  const total = items.filter((item) => item.checked).reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckAll = () => {
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        checked: !allChecked,
      }))
    );
  };

  const handleDeleteChecked = () => {
    const updatedItems = items.filter((item) => !item.checked);
    setItems(updatedItems);
  };

  const handleItemCheck = (id: number) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  return (
    <div className="px-4 lg:px-20 py-6 max-w-screen">
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row gap-8 py-4">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[75%] bg-white  ">
          <div className="flex justify-between items-center mb-4 text-[16px] rounded-lg border p-8">
            <label className="flex items-center gap-2 font-semibold text-[16px]">
              <input type="checkbox" checked={allChecked} onChange={handleCheckAll} />
              PILIH SEMUA ({items.length})
            </label>
            <button onClick={handleDeleteChecked} className="text-[#E36262] text-[16px] cursor-pointer">
              Hapus
            </button>
          </div>

          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 mb-4 rounded-lg border">
              <div className="flex items-center">
                <input type="checkbox" checked={item.checked} onChange={() => handleItemCheck(item.id)} className="" />
                <Image width={1920} height={1080} src={item.image} alt={item.name} className="w-[100px] lg:w-[220px] h-[90px] lg:h-[154px] border m-3 rounded-lg" />
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm lg:text-[20px]">{item.name}</h4>
                  <p className="text-base lg:text-[32px] font-bold">Rp{item.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 lg:gap-8 border rounded-lg px-1.5 lg:px-3 py-0.5 lg:py-2 self-end">
                <button onClick={() => updateQuantity(item.id, -1)} className="cursor-pointer">
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="cursor-pointer">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[25%] bg-white p-[26px] h-fit rounded-lg border border-[#f07e3e]">
          <h3 className="font-semibold mb-4 text-[16px]">Ringkasan Pesanan</h3>
          <div className="flex justify-between text-[14px] mb-2">
            <span>Sub Total:</span>
            <span className="font-semibold">Rp{total.toLocaleString()}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-[14px] my-4">
            <span>Perkiraan pengiriman:</span>
            <span>Rp0</span>
          </div>
          <div className="flex justify-between text-[14px] my-4">
            <span>Perkiraan pajak:</span>
            <span>Rp0</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold my-4">
            <span>TOTAL PESANAN:</span>
            <span>Rp{total.toLocaleString()}</span>
          </div>
          <button onClick={() => router.push("/checkout")} className="bg-[#f07e3e] cursor-pointer hover:bg-white hover:text-[#f07e3e] hover:border hover:border-[#f07e3e] text-white font-bold py-2 w-full rounded-lg text-[16px]">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
