import React from "react";
import soldakiImg from "../../images/iteration-2-images/cta/kart-1.png";
import sagUstImg from "../../images/iteration-2-images/cta/kart-2.png";
import sagAltImg from "../../images/iteration-2-images/cta/kart-3.png";

const ThreeDivLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mx-auto max-w-[1100px] p-4">
     
      <div
        className="relative flex items-center justify-center text-white w-full md:w-[531px] h-[449px] rounded-[12px]"
        style={{
          backgroundImage: `url(${soldakiImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute flex flex-col gap-2 left-4 top-4 md:left-8 md:top-8">
          <p className="text-3xl md:text-[50px] font-bold">
            Özel <br /> Lezzetus
          </p>
          <p className="text-sm md:text-[15px]">Position:Absolute Acı Burger</p>
          <button className="bg-white text-red-500 !rounded-[50px] px-4 py-2 mt-2">
            SİPARİŞ VER
          </button>
        </div>
      </div>

     
      <div className="flex flex-col gap-2 md:gap-1 w-full md:w-auto">
        <div
          className="relative flex items-center justify-center text-white w-full md:w-[531px] h-[224.5px] rounded-[12px]"
          style={{
            backgroundImage: `url(${sagUstImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute flex flex-col gap-2 left-4 top-4 md:left-8 md:top-8 items-start md:items-center">
            <p className="text-xl md:text-[30px]">
              Hackathlon <br /> Burger Menü
            </p>
            <button className="bg-white text-red-500 !rounded-[50px] px-4 py-2 mt-2">
              SİPARİŞ VER
            </button>
          </div>
        </div>

        <div
          className="relative flex items-center justify-center text-white w-full md:w-[531px] h-[224.5px] rounded-[12px]"
          style={{
            backgroundImage: `url(${sagAltImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute flex flex-col gap-2 left-4 top-4 md:left-8 md:top-8 items-start md:items-center">
            <p className="text-xl md:text-[30px] text-black">
              <span className="text-red-500">Çoooook</span> hızlı <br /> npm
              gibi kurye
            </p>
            <button className="bg-white text-red-500 !rounded-[50px] px-4 py-2 mt-2">
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDivLayout;
