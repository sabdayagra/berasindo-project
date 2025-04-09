import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  image: string;
  name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, name }) => {
  return (
    <div className="flex flex-row items-center text-center gap-1">
      <Image width={1920} height={1080} src={image} alt={name} className="w-[106px] h-[79px] object-contain" />
      <div className="flex flex-col gap-2">
        <p className="text-[16px] font-medium text-gray-800">{name}</p>
        <p className="text-[14px] text-gray-500">20 Item</p>
      </div>
    </div>
  );
};

const PopularCategories: React.FC = () => {
  const categories: CategoryCardProps[] = [
    { name: "Beras Putih", image: "/assets/beras1.png" },
    { name: "Beras Basmati", image: "/assets/beras2.png" },
    { name: "Beras Merah", image: "/assets/beras3.png" },
    { name: "Beras Jagung", image: "/assets/beras4.png" },
    { name: "Beras Jasmine", image: "/assets/beras5.png" },
    { name: "Beras Coklat", image: "/assets/beras6.png" },
    { name: "Beras Pipih", image: "/assets/beras7.png" },
    { name: "Beras Shirataki", image: "/assets/beras1.png" },
  ];

  return (
    <div className="bg-[#fdf1eb] p-6 rounded-lg mt-4">
      <h3 className="text-[18px] font-bold text-gray-800 mb-4">KATEGORI POPULER</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
