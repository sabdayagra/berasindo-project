import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 px-4 lg:px-20 py-4 mx-auto w-auto mt-6">
      <div className="lg:w-2/3 lg:h-full ">
        <div className="relative h-[310px] lg:h-[420px]">
          <Image alt="hero-1" width={1920} height={1080} src="/assets/hero1.png" className="w-full h-[310px] lg:h-[600px] rounded-lg object-cover" />
        </div>
      </div>
      <div className="flex flex-row lg:flex-col md:justify-between gap-5 w-full lg:w-1/3">
        <Image alt="her-2" width={1920} height={1080} src="/assets/hero2.png" className="w-full h-[100px] lg:h-[288px]" />
        <Image alt="her-2" width={1920} height={1080} src="/assets/hero3.png" className="w-full h-[100px] lg:h-[288px]" />
      </div>
    </div>
  );
};

export default Hero;
