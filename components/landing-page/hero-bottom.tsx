import React from "react";
import { Truck, Headphones, ShieldCheck, Package } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    icon: "/assets/Vector1.png",
    title: "Pengiriman Gratis",
    desc: "Gratis Ongkir untuk Semua Pesanan",
  },
  {
    icon: "/assets/Vector1.png",
    title: "Customer Support 24/7",
    desc: "Akses Instan ke CS",
  },
  {
    icon: "/assets/Vector2.png",
    title: "Pembayaran 100% Aman",
    desc: "Belanja Aman, Uang Terjamin!",
  },
  {
    icon: "/assets/Vector3.png",
    title: "Jaminan Uang Kembali",
    desc: "Jaminan Uang Kembali 30 Hari",
  },
];

const HeroBottom = () => {
  return (
    <div className="px-4 lg:px-20 ">
      <div className="bg-white rounded-xl shadow-lg py-6 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item: any, index) => (
            <div key={index} className="flex items-start gap-3">
              <Image alt="icon" width={1920} height={1080} src={item.icon} className="w-[40px] h-[40px] self-center" />
              <div>
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
