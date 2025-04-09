import React from "react";
import { Truck, Headphones, ShieldCheck, Package } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    icon: "/assets/Vector1.png",
    width: 40,
    height: 50,
    title: "Pengiriman Gratis",
    desc: "Gratis Ongkir untuk Semua Pesanan",
  },
  {
    icon: "/assets/Vector1.png",
    width: 40,
    height: 40,
    title: "Customer Support 24/7",
    desc: "Akses Instan ke CS",
  },
  {
    icon: "/assets/Vector2.png",
    width: 35,
    height: 30,
    title: "Pembayaran 100% Aman",
    desc: "Belanja Aman, Uang Terjamin!",
  },
  {
    icon: "/assets/Vector3.png",
    width: 38,
    height: 38,
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
            <div key={index} className="flex justify-start lg:justify-center items-start lg:items-center  gap-3">
              <Image alt="icon" src={item.icon} width={item.width} height={item.height} className="self-center" />{" "}
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
