import React from "react";

const Menu = () => {
  const categories = [
    { icon: "/images/iteration-2-images/icons/1.svg", label: "YENİ! Kore" },
    { icon: "/images/iteration-2-images/icons/2.svg", label: "Pizza" },
    { icon: "/images/iteration-2-images/icons/3.svg", label: "Burger" },
    { icon: "/images/iteration-2-images/icons/4.svg", label: "Kızartmalar" },
    { icon: "/images/iteration-2-images/icons/5.svg", label: "Fast food" },
    { icon: "/images/iteration-2-images/icons/6.svg", label: "Gazlı İçecek" },
  ];

  return (
    <div className="overflow-x-auto py-4">
      <div className="flex gap-6 justify-start md:justify-center items-center min-w-max px-4">
        {categories.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center md:gap-2 cursor-pointer transform hover:scale-110 transition-transform duration-300"
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

export default Menu;
