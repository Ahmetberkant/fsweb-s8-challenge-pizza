import React from "react";

const Menu2 = () => {
  const categories = [
    { icon: "/images/iteration-2-images/icons/1.svg", label: "YENİ! Kore" },
    { icon: "/images/iteration-2-images/icons/2.svg", label: "Pizza" },
    { icon: "/images/iteration-2-images/icons/3.svg", label: "Burger" },
    { icon: "/images/iteration-2-images/icons/4.svg", label: "Kızartmalar" },
    { icon: "/images/iteration-2-images/icons/5.svg", label: "Fast food" },
    { icon: "/images/iteration-2-images/icons/6.svg", label: "Gazlı İçecek" },
  ];

  return (
    <div className="bg-white py-4 px-4">
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {categories.map((item, i) => (
          <div
            key={i}
            className="bg-white flex flex-col md:flex-row items-center md:gap-2 p-2 rounded-[50px] cursor-pointer transform hover:scale-110 transition-transform duration-300 shadow"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-12 h-12 md:w-10 md:h-10"
            />
            <span className="text-sm mt-1 md:mt-0">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu2;
