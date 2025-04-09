"use client";

import { useState } from "react";
import { ChevronDown, Calendar, CreditCard, Tag } from "lucide-react";
import Breadcrumbs from "@/components/landing-page/breadcrumb";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Checkout() {
  const [address, setAddress] = useState("Jakarta");
  const [addresses] = useState([
    {
      city: "Jakarta",
      detail: "Thamrin Residence, Jl. Kebon Kacang Raya No.3, RT.3/RW.8, Kb. Melati",
    },
    {
      city: "Jakarta Selatan",
      detail: "Jl. Panglima Polim No.10, Melawai",
    },
  ]);
  const [product, setProduct] = useState<Product>({
    id: "1",
    name: "BERAS PUTIH",
    price: 34000,
    image: "/assets/beras3.png",
    quantity: 1,
  });
  const [shipping, setShipping] = useState(0);
  const [discount] = useState(0.2);

  const subtotal = product.price * product.quantity;
  const shippingCost = shipping;
  const discountAmount = subtotal * discount;
  const total = subtotal + shippingCost - discountAmount;

  return (
    <div className="flex flex-col px-4 lg:px-20 py-4 mb-14">
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        {/* Left side */}
        <div className="flex-1 space-y-4">
          {/* Address */}
          <div className="border rounded-lg p-4">
            <p className="text-gray-500 text-[14px]">Alamat pengiriman Anda</p>
            <div className="flex items-center gap-2 mt-1">
              {/* <span className="text-green-600 text-sm font-bold">● {address}</span>
            <ChevronDown size={16} /> */}
              <select className="my-2 border rounded px-2 py-1 text-[14px]" value={address} onChange={(e) => setAddress(e.target.value)}>
                {addresses.map((addr) => (
                  <option key={addr.city} value={addr.city}>
                    {addr.city}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-[14px] mt-1">{addresses.find((a) => a.city === address)?.detail}</p>
          </div>

          {/* Product */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-4 border rounded-lg shadow-md p-4">
              <img src={product.image} alt={product.name} className="w-[150px] lg:w-[200px] h-[75px] lg:h-[154px] object-contain lg:object-cover rounded-lg border px-2 py-2 lg:px-10" />
              <div className="flex-1 self-start">
                <p className="font-bold text-[10px] lg:text-[20px] mb-2">{product.name}</p>
                <p className="font-bold text-[15px] lg:text-[32px]">Rp{product.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center border rounded-lg gap-2 lg:gap-4 px-2 lg:px-6 py-0.5 self-end">
                <button onClick={() => setProduct({ ...product, quantity: Math.max(1, product.quantity - 1) })}>-</button>
                <span className="px-3">{product.quantity}</span>
                <button onClick={() => setProduct({ ...product, quantity: product.quantity + 1 })}>+</button>
              </div>
            </div>

            {/* Shipping */}
            <div className="mt-4 border rounded-lg shadow-md p-4">
              <label className="block font-medium mb-3">Opsi Pengiriman</label>
              <select className="border rounded px-3 py-1 w-full" value={shipping} onChange={(e) => setShipping(Number(e.target.value))}>
                <option value={0}>Standar (Rp0)</option>
                <option value={10000}>Express (Rp10.000)</option>
                <option value={20000}>Same Day (Rp20.000)</option>
              </select>
            </div>

            {/* Note */}
            <div className="mt-4 flex items-center gap-2 border rounded-lg shadow-md p-3">
              <Calendar size={18} />
              <input type="text" placeholder="Tulis Catatan" className="flex-1 outline-none text-sm" />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-[380px] border border-[#f07e3e] rounded-lg p-6">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-base mb-2">Metode Pembayaran</p>
            <p className="text-sm text-[#f07e3e] cursor-pointer">Lihat Semua</p>
          </div>
          <div className="space-y-6 mb-4 gap">
            <div className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              <CreditCard size={16} />
              <span className="text-[14px]">VISA *8901</span>
            </div>
            <hr className="" />
            <div className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <CreditCard size={16} />
              <span className="text-[14px]">CC *8902</span>
            </div>
            <hr className="mb-4" />
          </div>

          <div className="flex items-center justify-between bg-[#f07e3e] text-white px-3 py-2 rounded cursor-pointer mb-4">
            <div className="flex items-center gap-2">
              <Tag size={16} />
              <span className="text-sm">1 Kupon Diskon 20%</span>
            </div>
            <ChevronDown size={16} />
          </div>
          <hr className="mb-4" />

          <div className="space-y-3 text-sm mb-4">
            <div className="flex justify-between">
              <span>Subtotal ({product.quantity} Item)</span>
              <span>Rp{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Pengiriman</span>
              <span>Rp{shippingCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Diskon Voucher</span>
              <span>-Rp{discountAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>Rp{total.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-between py-3">
            <div className="text-sm text-gray-500 mb-2">Total Belanja</div>
            <div className="text-lg font-bold mb-4">Rp{total.toLocaleString()}</div>
          </div>

          <button className="bg-[#f07e3e] cursor-pointer hover:bg-white hover:border hover:text-[#009444] hover:border-[#009444] text-white font-bold py-2 w-full rounded-lg text-[16px]">BAYAR SEKARANG</button>
        </div>
      </div>
    </div>
  );
}
