"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function DescReview() {
  const [activeTab, setActiveTab] = useState<"deskripsi" | "ulasan">("deskripsi");

  return (
    <div className="px-4 lg:px-20">
      {/* Tabs */}
      <div className="flex items-center gap-4 mb-6 border-b border-gray-300">
        <button onClick={() => setActiveTab("deskripsi")} className={`pb-2 cursor-pointer text-[18px] font-semibold ${activeTab === "deskripsi" ? "text-black border-b-2 border-black" : "text-gray-400"}`}>
          DESKRIPSI
        </button>
        <button onClick={() => setActiveTab("ulasan")} className={`pb-2 text-[18px] cursor-pointer font-semibold ${activeTab === "ulasan" ? "text-black border-b-2 border-black" : "text-gray-400"}`}>
          ULASAN (20)
        </button>
      </div>

      {/* Content */}
      {activeTab === "deskripsi" ? (
        <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Duis lacinia ornare rutrum dictumst aliquet pretium lobortis. Tincidunt posuere adipiscing diam odio venenatis vitae at. Suspendisse interdum nulla magnis in habitasse volutpat enim at
            sit. Elementum tellus viverra etiam et odio diam in vitae tempor. Viverra id a facilisis scelerisque felis mauris arcu lacus. Tempus duis vel vestibulum eu ultrices ipsum luctus orci suspendisse. Elementum semper fames dolor
            fames fermentum mauris vel enim. Varius vel felis est nisl. Eget aliquam magna at dictum urna egestas cras. Mauris diam odio phasellus commodo. Turpis tellus est tempus tincidunt lacus faucibus facilisi. Sagittis vulputate orci
            ac elit lacus. Sagittis pellentesque pellentesque gravida ipsum sed amet. Egestas volutpat dictumst netus eu lobortis ac ac risus. Enim pellentesque pretium etiam turpis commodo mattis velit. Risus integer ac est hac viverra id
            est. Tortor aliquam pharetra turpis rhoncus tortor. Quis tincidunt sit vivamus aliquam eu aliquet lorem eleifend. Amet euismod amet penatibus sit. Sit massa nisl nunc malesuada suspendisse ipsum. Diam adipiscing non faucibus
            lobortis egestas tellus. Volutpat elementum vitae nibh amet vitae pharetra vel nullam nunc. Sed morbi neque posuere vestibulum vitae gravida massa ultrices urna. Aliquet quisque erat a et fames quis a. Neque ipsum velit nibh
            malesuada mauris est orci. Placerat id et ultricies ut ut ac sed ut in. Ultricies elementum egestas sit nullam malesuada. Sed elit risus vitae blandit lorem massa. Sit urna diam euismod quam condimentum. Praesent volutpat
            gravida vivamus in arcu nibh sollicitudin. In quis volutpat molestie aliquam purus in sem dui. Iaculis elementum augue venenatis montes et. Nibh libero neque purus elementum. Eu ultrices pretium vitae egestas convallis. Nascetur
            cras amet molestie sagittis donec lectus laoreet scelerisque. Faucibus neque vitae aliquam amet ut proin rutrum. Lectus faucibus sit neque ipsum nisi mauris duis in. Viverra adipiscing cras mattis pellentesque velit mattis
            consectetur mollis. Ligula lobortis pretium amet egestas imperdiet ullamcorper pharetra in sapien. Pretium enim scelerisque diam suspendisse quis ullamcorper egestas erat convallis. Eu cursus habitasse leo massa congue varius id
            in. Ut elit consectetur ipsum morbi ullamcorper ac quam nisl. Consectetur sed sed pharetra porttitor amet. Amet nunc fermentum.{" "}
          </p>
        </div>
      ) : (
        <div>
          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold">4.0</span>
              <Star className="text-yellow-400 fill-yellow-400" />
            </div>

            <div className="space-y-2 w-full max-w-md">
              {[5, 4, 3, 2, 1].map((star, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <span className="w-4 text-right">{star}</span>
                  <div className="relative w-full max-w-[200px] h-2 bg-gray-200 rounded overflow-hidden">
                    <div className="absolute left-0 top-0 h-2 bg-yellow-400" style={{ width: [20, 70, 10, 0, 0][5 - star] + "%" }} />
                  </div>
                  <span className="w-10 text-right text-gray-600">{[20, 70, 10, 0, 0][5 - star]}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review List */}
          <div className="flex justify-between items-center border-t pt-4 mb-2">
            <h3 className="font-semibold text-[16px]">Semua Ulasan (20)</h3>
            <button className="text-cyan-600 text-[16px] flex items-center gap-[10px] hover:underline cursor-pointer">
              <span className="text-xl">+</span> Tambah Ulasan
            </button>
          </div>

          <div className="space-y-[20px]">
            {[1, 2].map((_, idx) => (
              <div key={idx} className="flex gap-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-[40px] h-[40px] rounded-full object-cover" />
                <div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-semibold text-[16px] self-start">Arlene McCoy</span>
                    <div className="flex gap-1 text-yellow-400 text-sm">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400" />
                        ))}
                      <span className="text-[12px] text-gray-500">15/03/2025 - 1:10:37 AM</span>
                    </div>
                  </div>
                  <p className="text-[16px] text-gray-700 mt-1">Ayam yang Enak!</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
