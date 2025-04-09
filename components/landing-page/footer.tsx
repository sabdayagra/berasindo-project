"use client";

import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [language, setLanguage] = useState("Indonesia");
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: string) => {
    setLanguage(lang);
    setOpen(false);
  };
  return (
    <footer className="bg-[#f9f9f9] py-4 px-4 lg:px-20 border-t">
      <div className="max-w-screen mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        {/* Kiri */}
        <div className="flex lg:flex-col flex-row items-center gap-4 text-sm text-gray-700 relative">
          <div className="flex items-center gap-1 cursor-pointer relative self-start" onClick={() => setOpen(!open)}>
            <Globe size={16} />
            <span>{language}</span>
            <ChevronDown size={14} />
          </div>

          {open && (
            <div className="absolute top-8 sm:top-6 left-0 sm:left-auto bg-white border rounded shadow-md z-10 w-32">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect("Indonesia")}>
                Indonesia
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect("English")}>
                English
              </div>
            </div>
          )}

          <p className="text-center sm:text-left text-sm lg:text-base">© 2025 Qudo Buana Nawakara. Semua Hak Dilindungi.</p>
        </div>

        {/* Kanan - Logo + Store Buttons */}
        <div className="flex items-center gap-4">
          {/* Tengah - Sosial Media */}
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" />
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
              <g fill="none">
                <g clipPath="url(#primeTwitter0)">
                  <path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" />
                </g>
                <defs>
                  <clipPath id="primeTwitter0">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                  </clipPath>
                </defs>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78 78 0 0 0 12 4.27a79 79 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48 48 0 0 0 0 6.48a9.6 9.6 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45 45 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.9 2.9 0 0 0 1.53-.78a2.5 2.5 0 0 0 .61-1a10.6 10.6 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/assets/ssi.png" alt="LPS Logo" width={280} height={88} />
          </div>
          <div className="flex flex-col gap-1">
            <Image src="/assets/appstore.png" alt="App Store" width={147} height={43} />
            <Image src="/assets/google.png" alt="Google Play" width={147} height={43} />
          </div>
        </div>
      </div>
    </footer>
  );
}
