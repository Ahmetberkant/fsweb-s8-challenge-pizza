import React from "react";
import HomeBanner from "../../images/iteration-1-images/home-banner.png";

const HomeContent = ({ onButtonClick }) => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${HomeBanner})` }}
    >
      <div className="flex flex-col items-center justify-center h-screen gap-4 px-4 sm:px-8 md:px-16 pb-90">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          Teknolojik Yemekler
        </p>
        <p className="text-3xl sm:text-4xl md:text-6xl text-white text-center leading-snug ">
          KOD ACIKTIRIR <br />
          PİZZA, DOYURUR
        </p>
        <button
          onClick={onButtonClick}
          className="bg-yellow-400 text-black font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded hover:bg-yellow-500 transition"
        >
          ACIKTIM
        </button>
      </div>
    </div>
  );
};

export default HomeContent;
