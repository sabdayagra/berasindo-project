import LoginForm from "@/components/landing-page/form-login";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="px-4 lg:px-20 h-screen lg:h-full py-4 lg:py-18">
      <div className="flex flex-col lg:flex-row">
        {/* kiri */}
        <div className="flex flex-col w-full lg:w-[50%]">
          <p className="text-[32px] font-bold mt-[52px] self-center">Mulai Sekarang</p>

          <div className="hidden lg:flex flex-row gap-10 w-full items-center justify-center mt-10">
            <button className="flex items-center justify-center gap-2 border px-[16px] py-[10px] rounded-md shadow-sm text-[16px] font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                <path
                  fill="#ffc107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                />
                <path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" />
                <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" />
                <path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" />
              </svg>
              Daftar dengan Google
            </button>

            <button className="flex items-center justify-center gap-2 border px-[16px] py-[10px] rounded-md shadow-sm text-[16px] font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                <path
                  fill="#1877f2"
                  d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                />
                <path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" />
              </svg>
              Daftar dengan Facebook
            </button>
          </div>
          <div className="my-6 text-gray-500 self-center hidden lg:block">- Atau -</div>
          <LoginForm />
          <button type="submit" className="w-full lg:w-[520px] self-center my-6 bg-[#f07e3e] cursor-pointer text-white py-3 rounded-md font-semibold hover:bg-white hover:border hover:border-[#f07e3e] hover:text-[#f07e3e]">
            DAFTAR
          </button>
          <p className="text-sm text-center">
            Belum memiliki akun?{" "}
            <a href="/login" className="text-blue-500">
              Masuk
            </a>
          </p>
        </div>
        {/* kanan */}
        <div className="w-full lg:w-[50%] hidden lg:block">
          <Image width={1920} height={1080} alt="login" src="/assets/login.png" className="w-full lg:w-[788px] h-[200px] lg:h-[574px]" />
        </div>
      </div>
    </div>
  );
};

export default page;
