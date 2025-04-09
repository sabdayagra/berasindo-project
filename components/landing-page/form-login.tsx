"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full lg:w-[520px] space-y-6 self-center">
      {/* Email Input */}
      <div className="border-b border-gray-300 pb-2">
        <label className="block text-sm text-gray-700 mb-1">Email</label>
        <input type="email" placeholder="Masukkan email" className="w-full outline-none text-sm bg-background" />
      </div>

      {/* Password Input */}
      <div className="border-b border-gray-300 pb-2 relative">
        <label className="block text-sm text-gray-700 mb-1">Kata Sandi</label>
        <input type={showPassword ? "text" : "password"} placeholder="Masukkan kata sandi" className="w-full pr-8 outline-none text-sm bg-transparent" />
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-[28px] text-gray-500">
          {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
        </button>
      </div>
    </form>
  );
}
