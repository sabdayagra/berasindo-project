// components/CheckboxFilter.tsx
"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const CheckboxFilter = () => {
  const [selected, setSelected] = useState({
    dki: true,
    dki_children: {
      barat: false,
      timur: false,
      selatan: false,
      utara: false,
      pusat: false,
    },
    jabar: false,
    jateng: false,
  });

  return (
    <div className="bg-[#fdf1eb] p-4 rounded-lg space-y-2 w-full max-w-xs">
      {/* DKI Jakarta */}
      <div className="flex items-center space-x-2">
        <Checkbox id="dki" checked={selected.dki} onCheckedChange={(val) => setSelected((prev) => ({ ...prev, dki: val as boolean }))} />
        <label htmlFor="dki" className="text-sm font-medium leading-none">
          DKI Jakarta (100)
        </label>
      </div>

      {/* Children of DKI Jakarta */}
      <div className="ml-6 space-y-2">
        {[
          { key: "barat", label: "Jakarta Barat" },
          { key: "timur", label: "Jakarta Timur" },
          { key: "selatan", label: "Jakarta Selatan" },
          { key: "utara", label: "Jakarta Utara" },
          { key: "pusat", label: "Jakarta Pusat" },
        ].map(({ key, label }) => (
          <div key={key} className="flex items-center space-x-2">
            <Checkbox
              id={key}
              checked={selected.dki_children[key as keyof typeof selected.dki_children]}
              onCheckedChange={(val) =>
                setSelected((prev) => ({
                  ...prev,
                  dki_children: {
                    ...prev.dki_children,
                    [key]: val as boolean,
                  },
                }))
              }
            />
            <label htmlFor={key} className="text-sm text-gray-800">
              {label} (20)
            </label>
          </div>
        ))}
      </div>

      {/* Jawa Barat */}
      <div className="flex items-center space-x-2">
        <Checkbox id="jabar" checked={selected.jabar} onCheckedChange={(val) => setSelected((prev) => ({ ...prev, jabar: val as boolean }))} />
        <label htmlFor="jabar" className="text-sm text-gray-800">
          Jawa Barat (10)
        </label>
      </div>

      {/* Jawa Tengah */}
      <div className="flex items-center space-x-2">
        <Checkbox id="jateng" checked={selected.jateng} onCheckedChange={(val) => setSelected((prev) => ({ ...prev, jateng: val as boolean }))} />
        <label htmlFor="jateng" className="text-sm text-gray-800">
          Jawa Tengah (15)
        </label>
      </div>
    </div>
  );
};

export default CheckboxFilter;
