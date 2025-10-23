import React from "react";

const pizzas = [
  {
    id: 1,
    name: "Terminal Pizza ",
    rating: 4.9,
    reviews: 200,
    price: 60,
    image: "/images/iteration-2-images/pictures/food-1.png",
  },
  {
    id: 2,
    name: "Position Absolute Acı Pizza",
    rating: 4.7,
    reviews: 150,
    price: 55,
    image: "/images/iteration-2-images/pictures/food-2.png",
  },
  {
    id: 3,
    name: "useEffect Tavuklu Burger",
    rating: 4.8,
    reviews: 180,
    price: 65,
    image: "/images/iteration-2-images/pictures/food-2.png",
  },
];

const PizzaCard = ({ pizza }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-85">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-60 h-60 object-cover rounded-full"
      />
      <h2 className="mt-3 font-bold !text-[15px]">{pizza.name}</h2>
      <div className="flex items-center gap-19 text-sm text-gray-600 mt-1">
        <span>{pizza.rating}</span>
        <span className="pl-6">({pizza.reviews})</span>

        <p className="pt-3 font-bold">{pizza.price}₺</p>
      </div>
    </div>
  );
};

const PizzaList = () => {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;
